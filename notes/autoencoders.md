- encoder decoder - extract and learn features (encoder) | decoder reconstruction of the input

- Vanilla
  - simplest form of autoencoder
  - learns to copy its input to its output through a bottleneck:
  - minimize reconstruction error

- Deeper autoencoder is 
   - you don't mirror

- Denoising (distorted)
 - nose added image (extracting features from this) 
 - but loss is calculated with original image
 - given distorted image it will try to construct real one ( so we calculate loss with the real one )

- Over complete autoencoder
    - a warning for autoencoder ( instead of learning it memorizes ) 
    - if latent space size is greater or equal to input layer 
    - to solve this we have sparse autoencoder ( deactivating certain neurons )
    - regularization


- Convolutional auto encoder
    - convolution layers on encoder and transposed convolution in decoder

- even if you add noise on latent if the output and space thing doesn't change means the model is robust ? 
- Convolution + UpSampling = Transposed Convolution

