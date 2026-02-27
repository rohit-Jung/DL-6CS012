# Python things i got to know

> (why does it not have bracessss )

> Intersting: There are typings in python. (thank god)

- similar to switch case (`match case`)
  - to do `or` you can `case 1 | 2`
  - for catch all (default) `case _`

- there are styles to docstrings ? `Google` & `numpy` & `rest`

- **Exceptions**: (i mess up most on spelling of this )
  - `TypeError`, `IndexError`, `Indentation`, `Name`, `Key`, `Syntax`
  - general is `Exception`

- you can check the data type using `isinstance(val, type)` or `type() is int`

  > There is no `&& || and !`, use and `or and not`

- you can slice using `[start:end:step]`
- `[-2:end:-1]` - starts from second last element from backward
- you can reverse list using `[::-1]`

- you have access to utility functions like `max`, `min`, more to explore on this
- `dict.items()` - convert to list of tuple `[(key, val)]` - similar to `Object.entries() in js`
- `sorted(data, key=lambda func, reverse=False)` - the lambda function decides which key to use while sorting

- to access the index and item in loop `enumerate()` - similar to `rust? `

# NumPy (Numerical Python)

- open source lib that provides func.
- efficient nd array with `reshape flatten resize`
- fast broadcasting and vectorized operations: optimized C and fortan
- mathematical func:
  - `min`, `max`, `median`, `std`, `mean`, `median`, `log`, `exp`
  - `np.linalg` for linear algebra

- backbone of many other libs like: `Pandas, SciPy and scikit-learn`, `CuPy` - similar on NVIDIA GPU

## Functions

- `shape`, `size`, `ndim`, `dtype`, `flat`, `arr.T`
- `itemsize`, `nbytes` - byte related
- `.real`, `imag` - complex numbers
- `.astype(float)` - conversion
- `.reshape()` - as long as no of elems before = no. of elems after

### arrays operations

- `arange([start,]stop[,step],[,dtype=None])` - inside `[]` are optional
- `linpspace(start,stop,num=50,endpoint=True,retstep=False)` - `num` values between `start` and `stop`
- `np.ones, zeros, empty, eye`
- `hstack and vstack` - for stacking ?
- `np.concatenate(arr1, arr2, axios=0)` - concat along x or y

### nuances

- `np.hstack` - rows same (first dim)
- `np.vstack` - column same (second dim)
- `np.concatenate` - both dimension same
- `TypeError: Cannot interpret ’-1’ as a data type` - mismatch in data type
- `ValueError: setting an array element with a sequence` - when stacking different D

## Universal functions

- `ufuncs` operate element wise on arrays
- arithmetic, Trigonometric, exponential, logarithmic, rounding, comparison

### `np.linalg`

- `norm(x), det(A), inv(A)`
- `solve(A, b), lstq(A, b), cond(A)`
- `eig(A) eigvals(A) eigh(A)` - h -> hermitian matrix
- `svd()` - singular value decomposition
- `pinv(A)` - Moore-Penrose pseudo-inverse
- `matrix_rank(A)` - rank of a matrix
- `cholesky(A)` - Cholesky's decomposition of positive-definite matrix
- `qr(A)` - QR decomposition
- `lu(A)` - LU decomposition

## Broadcasting

- technique where the smaller array is stretched across larger
- for broadcasting, one of them is 1 or are equal
- (3, 2) and (2, 3) are invalid as neither is 1 or are equal

## vectorization

- explicit loops -> numpy operations 
- efficiency, readability, memory
