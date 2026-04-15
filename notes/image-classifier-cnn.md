## assignments

Carbon footprints from the other papers of nvidia and all
abolition - freezing some layers

language models - image resize  similarly text processing

word2vec - gensim, thikka ko model not too large not too small

momentum is technique to speed up learning, make optimization more stable

Momentum introduces a velocity term 

- v=βv+(1−β)∇J(θ)
- θ=θ−ηv
    - v: accumulated gradient (velocity)
    - β: momentum coefficient (typically ~0.9)

Adam optimizer
Learning Rate Decay 

## ImageDataGenerator Vs `tf.keras.layers` 

- Unlike ImageDataGenerator, which operates offline (creating augmented images before training),
these layers are part of the computational graph and applied during training i.e. Can be used
inside a model or independently before training.

- Batch Normalization (BN) - reduces internal covariate shift.
- normalizes the output of a previous activation layer by subtracting
the batch mean and dividing by the batch standard deviation.

- Dropout - prevents overfitting, set random training units to zero
    - During inference, all neurons are used, but their outputs are scaled by the dropout rate.

- Global Average Pooling
    - Takes average of each feature map, One number per channel
    - few params as compare to flatten, genralizes better

- `loss="sparse_categorical_crossentropy""`

train_ds = train_ds.prefetch(buffer_size=tf.data.AUTOTUNE)
val_ds = val_ds.prefetch(buffer_size=tf.data.AUTOTUNE)

```txt
Freeze VGG → train only top layers
LR = 1e-3

Unfreeze top VGG layers
LR = 1e-5
Recompile
Train again
```

- prefetch → faster training (parallel loading)
- patience → wait before stopping training

- Data augmentation introduces variability in training data, improving generalization. Batch Normalization stabilizes learning and accelerates convergence, 
while Dropout reduces overfitting. Transfer learning using VGG16 leverages pre-trained features, significantly improving performance.
Fine-tuning further adapts high-level features to the target dataset.

## Fine tuning is advanced transfer learning ? 

- transfer learning - train only the few dense layer, (use feature extractor) 
- Fine-tuning - unfreeze some pre-trained layer and letem adapt to your dataset

