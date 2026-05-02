#import "./assignment-format.typ": *;

// usuage
#show: university-assignment.with(
  title: "Machine Learning Systems and Neural Networks",
  subtitle: "Part 1: Question Answer Report",
  author: "Rohit Jung Kathet",
  assignment_type: "QnA Report",
  university_image_path: "./images/university_logo.png",
  college_image_path: "./images/college_logo.png",
  module_name: "Artificial Intelligence and Machine Learning",
  course_leader:  "Simon Giri",
  show_table_of_figures: false,
  details: (
    course: "6CS012",
    module_leader: "Simon Giri",
  ),
)


#line(length: 100%, stroke: 0.4pt + luma(160))

= Long question

== *Production challenges for ML in e-commerce* 

You are a Machine Learning Engineer at a rapidly growing e-commerce company responsible for deploying and maintaining ML systems in production.
\
\
*Ans:* In production, ML models rarely fail in one big event. They usually fade: inputs shift, metrics slip, and the business feels it before the dashboard does. Three challenges show up often.
\
\
 + *Data drift / concept drift (recommendations and demand forecasting).* During sales, new product launches, or UI changes, user behavior shifts. Click patterns and popular categories can stop matching what the model saw during training. If we ignore this, recommendations become less relevant, CTR and conversion drop, and teams start making decisions on stale signals.
    - *Solution:* set up drift monitoring on key features and outputs (for example with _PSI_, _KS test_, or _Jensen-Shannon divergence_) and connect it to a retraining pipeline. When drift is real, retrain using a balanced slice of data so the model does not overfit to a short holiday spike and forget normal behavior.
   -  *Trade-off: *retraining too often improves freshness but increases cost and can introduce instability if we react to temporary noise.

 + *Latency and scalability (fraud detection at checkout).* A fraud model can be accurate but still hurt revenue if it is slow. Even a 1 to 2 second delay at checkout can increase cart abandonment. At peak traffic, the model can time out or queue.
     - *Solution:* optimize inference (for example _pruning_ and _quantization_), reduce per-request work (online feature store + caching expensive features), and scale serving with autoscaling and distributed replicas.
     - *Trade-off:* faster serving can require simpler models or fewer features, and the system becomes more complex to operate.
 + *Model degradation and weak monitoring (silent quality drops).* Labels can arrive late (fraud is confirmed days later), logging pipelines break, and new product categories appear. If we only monitor infrastructure metrics, we can miss a drop in precision/recall until chargebacks or complaints rise.
   - *Solution:* end-to-end monitoring: data quality checks, prediction and feature logging, delayed ground-truth evaluation, and alerts tied to business metrics (chargeback rate, approval rate, revenue impact).
  - *Trade-off:* better observability needs engineering time, storage, and clear metric ownership.
\
Cross-functional work is what keeps this reliable. Data scientists define metrics and retraining triggers, engineers build pipelines and serving reliability, and product managers connect model behavior to user experience and business KPIs.
\
Modern tools help reduce manual work: automated pipelines (CI/CD for ML), model registries, workflow orchestrators, and better alerting. LLM-based tools can help triage incidents (summarizing logs, drafting notes), but humans still need to validate fixes.

#pagebreak()

= Short questions

== Overfitting

Overfitting happens when a model learns the training set too specifically, including noise and accidental patterns. You typically see training accuracy keep rising while validation accuracy stalls or drops.

*Dropout.* During training, dropout randomly turns off a fraction of neurons (for example, 0.3). Because any neuron can disappear on a batch, the model cannot depend on one narrow “shortcut” feature. Useful information has to be spread across multiple neurons, so different parts of the network can still make a good prediction even when some units are missing. This makes training noisier and sometimes slower (training loss can be higher), but it often improves generalization. At inference time, dropout is disabled and the full network is used. Example: in image classification, dropout can reduce a model’s habit of memorizing background textures instead of learning the sign/object itself.

*Early stopping.* If validation loss stops improving, continuing to train often makes the optimizer chase tiny training-only quirks: rare cases, small label errors, or random correlations that do not repeat. Early stopping watches validation loss and stops after it fails to improve for a few epochs, keeping the best checkpoint. It reduces overfitting and saves compute. Example: in text classification (spam/sentiment), training accuracy may climb for many epochs while validation stays flat; early stopping prevents the model from “polishing” noise.

== Neural network architecture

=== FCN vs autoencoder

An *FCN (fully connected network)* is a standard feedforward network: information flows from input to output through dense layers. You provide features and it predicts a target (a class label, a probability, or a number). Example: 20 transaction features in, `P(fraud)` out. The structure is usually “stack of layers” and the last layer is chosen for the task (softmax for classes, linear for regression).

An *autoencoder* is also feedforward, but it has a bottleneck design: an *encoder* compresses the input into a smaller *latent vector*, and a *decoder* expands that latent vector back into a reconstruction of the original input. So the input and output have the same shape.

The objective is different. FCNs minimize prediction error against labels (for example, cross-entropy). Autoencoders minimize reconstruction error (output should match input). Simple example: an autoencoder trained on normal transactions learns what “normal feature combinations” look like. If a new transaction is unusual, it often reconstructs poorly, giving a high reconstruction error.

Application: *anomaly detection* when labeled anomalies are rare (fraud, equipment faults, network intrusion). Autoencoders help by learning a compact representation of normal data, then flagging inputs that do not fit that learned structure.
