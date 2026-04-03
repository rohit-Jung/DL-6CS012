## Activation functions

- sigmoid - 0 or 1
- Softmax - probabilities map
- RELu(x) - max(0, x)

## Theory of Universal approximation

- network of multiple interconnected neurons can approximate any continuous function,
  given sufficient neurons and appropriate parameters

- how many neurons - 2^n hidden neurons where n is inputs
- problem - images would have many dimensions

## quantifying loss

- loss functions are according to the dataset/problem ?

## keras

- why not use numpy
  - numpy doesn't support differentiation
  - numpy runs only on CPU and not on GPU
  - keras has pre-built activation functions: sigmoid, relu
  - keras support model training { with numpy, compute forward pass, loss, backward pass, gradients }
  - keras has pre-built layers
  - keras has pre-built optimizers like: SGD, Mini, Batch and Adam (Adaptive momentum Estimation)

## Fully Connected Layers

- every input node is connected to every node in next layer
- this is called `Dense`layer in keras
- ```py
  from tensorflow.keras.layers import Dense
  layer = Dense(units, activation=None, use_bias=True, kernel_initializer="glorot_uniform")
  ```
- each layer computes `y= activation(w @ x + b)`

## some examples and syntax (using keras)

### model optimizer

```txt
# syntax
model.compile(
    optimizer=<optimizer>,
    loss=<loss_function>,
    metrics=[<metric1>, <metric2>, ...]
)

model.fit(
    x=<input_data>,
    y=<target_labels>,
    batch_size=<batch_size>,
    epochs=<epochs>,
    validation_data=(<x_val>, <y_val>),
    validation_split=<validation_split>,
    callbacks=[<callback1>, <callback2>, ...],
    verbose=<verbose_level>
)

```

- we use Softmax at last since it's a multiclass classification
- we should reshape the size as we already defined the size to keras

### model.fit example

```python
batch_size = 128
epochs = 2000
# Callbacks
callbacks = [
    keras.callbacks.ModelCheckpoint(filepath="model_at_epoch_{epoch}.keras"),
    keras.callbacks.EarlyStopping(monitor="val_loss", patience=4 ),
]
# Train the model with callbacks and validation split
history = model.fit(
    x_train,
    y_train,
    batch_size=batch_size,
    epochs=epochs,
    validation_split=0.15,
    callbacks=callbacks,
)

# evaluate syntax
model.evaluate(
    x=None,
    y=None,
    batch_size=None,
    verbose=1,
    sample_weight=None,
    steps=None,
    callbacks =None,
    max_queue_size=10,
    workers=1,
    use_multiprocessing=False
)

# save and load
model.save('model_name.h5')
loaded_model = tf.keras.models.load_model('model_name.h5')

# predict 
model.predict(
    x,
    batch_size=None,
    verbose=0,
    steps=None,
    callbacks=None,
    max_queue_size=10,
    workers=1,
    use_multiprocessing=False
)
```
