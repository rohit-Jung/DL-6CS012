
## terms

corpus - docs collection
vocab - unique words in corpus

## Preprocessing

- tokenization  - every word as one token ?
- stop words removal 
- Stemming (cutting words- running = run)vs Lemmatization(use vocab + grammer - better = good) or both 

## in numeric form 

- representing texts 
    - as ASCII characters - every character is 8 bit
    - problem: you don't know how to truncate things ? 
- for fixed size One Hot Encoding 
    - solves problem of truncating
    - vocab size is very large 
    - matrix becomes large, not feasible practically  (high dimesionality)
    - cat and cats aren't distinguished (semantic meaning)
- BoW (Bag of Words)
    - frequent words should be given priority (stop words ?)
    - semantic meaning between sentences | 
- TF / IDF
    - tf = number of times in doc / total in doc 
    - idf = log(number of times in corpus / 1 +  number of docs having t)  { +1 is done to prevent division by zero }
    - tf-idf = tf * idf
