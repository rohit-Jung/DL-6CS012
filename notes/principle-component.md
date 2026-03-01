## Shape and size

- Shape: H _ W _ D
- Size: Total Number of Pixels

## Pillow

- Python Image Library (PIL)
- used for preprocessing images

## PCA (Principle Component Analysis)

- When there are many patterns in the image, model might get confused
  **Curse of dimensionality**, what if we compress image and keep most meaningful
  part only ? this is what **PCA** does


- PCA says: "Don't throw away features randomly. Let me find smart,
  new directions that capture the most important patterns — and express everything in terms of those."

- It is like finding the best angle to look at your data so you see the
  most variation, the most spread, the most structure.

- Also, we don't want to store the same information again, if they are related they
  give same information. Like two similar pixels ? but how do we measure this "vary together"

- **Covariance Matrix**
  We have high dimensional data → we can't visualize or work with it easily →
  we want to compress it → but we don't want to lose information →
  so we find the directions of maximum spread → to find those directions we look at the covariance matrix →
  we ask "which arrows does this matrix only stretch without rotating?" →
  those arrows ARE the natural spread directions of the data →
  we pick the top ones (most stretch = most information) →
  and we project our data onto them → now we have 2D (or 3D) data that still carries most of the original story

- If F1 and F2 are buddies — PCA creates one axis capturing their combined story.
- If F3 and F4 are buddies — PCA creates another axis for their story.
- Unrelated groups get separate principal components, not one merged one.


