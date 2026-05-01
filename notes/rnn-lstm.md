##  Problem with simple Vanilla NN

- Simple Vanilla NN cannot capture the sequence 
- as tokens are the same for layers, order doesn't matter for em
- variable length sequential data like stock market cannot be trained with it

- This is where RNN comes to play


## RNN 

- has feedback loops 

### incase of stock market
- allows both yesterday’s and todays value to affect the prediction  )
-sum yestarday + today
- oldest data - newest
- **even on unrolling weights and biases are shared**

### problems

- the more we unroll the more harder it gets to train vanishing and exploding gradient
- explodes when w is > 1 
- so if its 2 power then on unrolling - input * 2 power 69


- **so during back propagation the line would bounce alot**
- one way to solve this is to put limit 
    - but that caused vanishing gradi
    - input * 0.5 power 50 - close to 0

- so veryy small steps iterations more sometimes cannot even find lowest

- this is where LSTM comes

### LSTM

- on each cell has gates : forget gate input gate output gate
- forget gate: creates mask to only keep important features
- input gate: decides current info is necessary or not 
- output gate: prediction, what has it learned till now, compares current supplied token and token from gates ? 


### extras

- latent space is also a part of encoder 
- _SOS_ _EOS_ because the decoder keeps gibberish words if it's capacity isn't filled 

- make same token length similar to how you did same dimension image in CNN 
- take the longest or shortest sentence and the pad tokens <PAD>

- truncate disadvantage - meaning is lost and loss becomes high
- padding - 
- tokeniser algorithm - byte pair tokenizer 

- generator - `yield vs return `  - function doesn't end on yeild but retunrs 
- `model.fit_generator` - similar to `data_loader` / `generator functions ? `
- evaluation is done by human -or **ROUGE score** or **perplexity**
