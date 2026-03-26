## MCP neuron

initially there was mcp neuron that could determine/predict the output for the linearly separable functions like AND and OR. It used simple threshold function to do so.

## Perceptron

this was improved by rosenbelt by the perceptron model where each unit was assigned randomly initialized weights and mapped to output unit.

through learning this weight were then updated until desired output

```txt
x1 ----(+ w1)----\
                 \
x2 ----(- w2)------>  Σ ---> f(z) ---> a (output) ---> next layer
                 /
x3 ----(+ w3)----/

```

- `+ w1, + w3 `= excitatory weights → push the neuron to fire
- w2 = inhibitory weight → suppress firing
- Σ = sum of weighted inputs
- f(z) = activation function (decides output)
- a = neuron output

#### summary

- so we have inputs associated with each weight that we use to make a linear combination of then we calculate the weighted sum since it's the weighted sum of linear combinations we get another linear combination but we need to introduce non linearity to learn complex functions so we introduce activation function that then takes in the weighted sum and gives a vaue which is then feed to the forward layer as input
