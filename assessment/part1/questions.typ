= Notes for understanding (extra)

== PSI, KS test, and Jensen-Shannon divergence

All three compare “training-time data” vs “current production data” to detect drift.

*PSI (Population Stability Index).* PSI is a practical drift score used a lot in industry (especially for tabular features). You:

- Choose bins for a feature (for example, 10 bins based on training quantiles).
- Compute the fraction of samples in each bin for training (`p_i`) and production (`q_i`).
- Sum across bins: `PSI = Σ (q_i - p_i) * ln(q_i / p_i)`.

Interpretation: PSI is near 0 when distributions match. Larger PSI means bigger shift. A common rule of thumb is:

- `PSI < 0.1` small/no drift
- `0.1–0.2` moderate drift
- `> 0.2` significant drift (investigate)

Pros: one number per feature, easy dashboards. Cons: depends on binning choices.

*KS test (Kolmogorov-Smirnov).* KS compares two samples by looking at their cumulative distribution functions (CDFs) and taking the largest gap between the two CDF curves. If that max gap is large, the test returns a small p-value, suggesting the distributions differ.

Pros: catches subtle shifts without binning. Cons: very sensitive with large sample sizes; you usually need effect-size thresholds too, not only p-values.

*Jensen-Shannon divergence (JSD).* JSD is a symmetric, bounded way to measure how different two probability distributions are. It is based on KL divergence but averages in both directions, so it is more stable:

- `JSD(P, Q) = 1/2 * KL(P || M) + 1/2 * KL(Q || M)` where `M = (P + Q)/2`.

Pros: symmetric and bounded (often 0 to 1 depending on log base). Cons: you still need to turn it into a practical alert threshold.

== Pruning, quantization, online feature store, caching, autoscaling

These are common ways to reduce latency and handle traffic spikes in production.

*Pruning.* Remove weights, channels, or neurons that contribute little to the final prediction. If done well, accuracy drops very little, but inference becomes faster (less compute) and the model uses less memory.

*Quantization.* Use lower-precision numbers for weights/activations (for example, int8 or float16 instead of float32). This speeds up matrix multiplications and reduces memory bandwidth. It can slightly reduce accuracy, especially if calibration is poor.

*Online feature store.* Many “features” are expensive aggregations (30-day spend, session counts, device history). Recomputing them in the request path is slow and inconsistent. An online feature store precomputes and serves these features with low latency, so the model server mostly does: fetch features → run inference.

*Caching expensive features.* Even with a feature store, some values repeat a lot (per-user aggregates or per-item stats). Caching avoids repeated reads and reduces tail latency (the “slowest 1%” requests).

*Autoscaling.* When traffic rises, requests queue and latency explodes. Autoscaling increases the number of model-serving replicas based on CPU/QPS/latency. It reduces timeouts but needs warm-up strategies (cold starts can hurt) and capacity planning (cost).

== Why extra training can make the model fit noise

If you plot training loss vs validation loss, you often see this pattern:

- Early epochs: both training and validation improve because the model is learning general patterns that exist in the true data distribution (signal).
- Later epochs: training keeps improving, but validation stops improving or gets worse. At this point, the model has enough capacity to start fitting “leftover errors” in the training set.

Those leftover errors are often noise: labeling mistakes, random correlations, rare one-off cases, and quirks of the specific training sample. Gradient descent will happily keep reducing training error by carving out tiny decision boundaries to memorize those quirks. That makes the model more confident on training data, but it hurts generalization.

Early stopping works because it picks the checkpoint where validation performance is best, before the model spends too much capacity on memorizing noise.

== Why turning off neurons (dropout) helps generalization

Dropout randomly zeros out a fraction of activations during training. You can think of this as training many different “thinned” networks that all share weights.

What it prevents:

- *Co-adaptation:* neurons leaning too hard on each other ("I only work if you fire too").
- *Single-shortcut reliance:* the model finding one brittle feature that works on training but fails on new data.

Because any neuron may disappear on a given batch, the model is pushed to distribute information across multiple paths. Features that are useful in many different subnetworks survive; features that only work in one narrow combination do not.

At inference time, dropout is off, so you use the full network. In effect, you get a more robust model that behaves like an ensemble of many subnetworks.

== Feedforward model

A *feedforward* neural network has a one-way flow of computation for each example:

`input → layer 1 → layer 2 → ... → output`

There are no loops in the graph during a single forward pass. This includes standard fully connected networks (MLPs) and most CNNs when used for single images.

This contrasts with:

- *Recurrent networks (RNN/LSTM/GRU):* they feed a hidden state forward across time steps.
- *Sequence models with explicit time dependence:* the model’s output depends on previous tokens/steps (even if implemented without loops at the framework level).

In short: “feedforward” means no recurrence; it is a straight pipeline from input to output.
