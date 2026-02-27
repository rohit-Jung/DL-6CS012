from timeit import timeit

import numpy as np


def array_creation(shape: tuple[int, int], t: type, val: int, items: list[int]):
    """Represents array creation method in NumPy

    Parameters
    ----------
    shape : tuple[int, int]
        Shape to make zeros like array of
    t : type
        Type to be used while making array
    val : int
        Value used to fill in .full method
    items : list[int]
        List to convert to numpy array

    """
    print(f"Empty array of 2 X 2 (np.empty): {np.empty((2, 2))}\n")
    print(f"Ones arr of 4 X 2 (np.ones): {np.ones((4, 2))}\n")
    print(
        f"Filled arr with {shape} and fill value {val} (np.fill_like): {np.full(shape, dtype=t, fill_value=val)}\n"
    )
    print(f"Zeros arr with {shape} (np.zeros_like): {np.zeros_like(shape, dtype=t)}\n")
    print(f"Ones arr with {shape} (np.ones_like): {np.ones_like(shape, dtype=t)}\n")
    print(
        f"From: {items} {type(items)} \n To: {np.array(items)} {type(np.array(items))}\n\n"
    )


def array_manipulation():
    """Performs array manipulation using functions of NumPy"""

    print(f"Values ranging from 10 to 49 (np.arange): {np.arange(10, 50)}\n")
    print(
        f"3 X 3 matrix with value range 0 - 8 (np.reshape): {np.arange(9).reshape(3, 3)}\n"
    )
    print(f"3 X 3 identity matrix (np.eye): {np.eye(3)}\n")
    print(
        f"Mean of random array of size 30 (np.random.random and np.mean): {np.random.random(30).mean()}\n"
    )

    random_arr = np.random.random((10, 10))
    print(f"Random arr: Max is {random_arr.max()} and Min is {random_arr.min()}\n")

    zeroed_arr = np.zeros(10)
    print(f"Zero element of size 10: {zeroed_arr}")
    zeroed_arr[4] = 1
    print(f"Replaced arr: {zeroed_arr}\n")

    arr = [1, 2, 0, 0, 4, 0]
    print(f"Reverse of {arr}: {np.flip(np.array(arr))}")

    print("1 bodered array\n")
    one_arr = np.ones((8, 8))
    one_arr[1:-1, 1:-1] = 0
    print(one_arr)

    print("Checker's board pattern\n")
    checker_arr = np.ones((8, 8))
    checker_arr[1::2, 1::2] = 0
    checker_arr[0::2, 0::2] = 0
    print(checker_arr)


def perform_arthimetic(a: np.ndarray, b: np.ndarray, val: int):
    """Performs arthimetic operations to the given arrays.
    Implementation of broadcasting

    Parameters
    ----------
    a : np.ndarray
        First array
    b : np.ndarray
        Second arry
    val : int
        Value to multiply to

    """
    print(f"First array (a): {a}")
    print(f"Second array (b): {b}")
    print("ARITHMETIC\n")

    print(f"a + b = {a + b}")
    print(f"a - b = {a - b}")
    print(f"a * {val} = {a * val}")
    print(f"Square of each element a = {a**2}\n")


def array_operation():
    x = np.array([[1, 2], [3, 5]])
    y = np.array([[5, 6], [7, 8]])
    v = np.array([9, 10])
    w = np.array([11, 12])

    perform_arthimetic(x, y, 5)
    perform_arthimetic(v, w, 7)

    print(f"v · w = {np.dot(v, w)}")
    print(f"x · v = {np.dot(x, v)}")
    print(f"x · y = {np.dot(x, y)}\n")

    print(f"x with y along row: {np.hstack((x, y))}")
    print(f"v with w along col: {np.vstack((v, w))}")

    # ValueError: all the input arrays must have same number of
    # dimensions, but the array at index 0 has 2 dimension(s)
    # and the array at index 1 has 1 dimension(s)
    # print(f"x with v: {np.hstack((x, v))}")


def matrix_operations():
    """Performs matrix operations using then `linalg` module of NumpPy"""
    A = np.array([[3, 4], [7, 8]])
    B = np.array([[5, 3], [2, 1]])

    A_inv = np.linalg.inv(A)
    print(f"Is A.A_inv = I ? {np.allclose(np.dot(A, A_inv), np.eye(2))}")
    print(f"Is A_inv.A = I ? {np.allclose(np.dot(A_inv, A), np.eye(2))}")
    print(f"Is A.B = B.A ? {np.allclose(np.dot(A, B), np.dot(B, A))}")
    A_B_t = np.dot(A, B).T
    A_t_B_t = np.dot(B.T, A.T)
    print(f"Is (AB)^t = A^t.B^t ? {np.allclose(A_B_t, A_t_B_t)}")

    print("Solving: \n2x - 3y - z = -1\nx -y + 2z = -3\n3x + y - z = 9\n")
    C = np.array([[2, -3, -1], [1, -1, 2], [3, 1, -1]])
    D = np.array([-1, -3, 9])
    X = np.dot(np.linalg.inv(C), D)
    print(f"Values are: {X[0]}, {X[1]}, {X[2]}")

    print(f"Solving through linalg method: {np.linalg.solve(C, D)}")


def numpy_performance():
    list_size = 1_000_000
    list1 = list(range(list_size))
    list2 = list(range(list_size))

    arr1 = np.arange(list_size)
    arr2 = np.arange(list_size)

    # Element-wise addition
    raw_add_time = timeit(
        lambda: [list1[i] + list2[i] for i in range(list_size)], number=1
    )
    numpy_add_time = timeit(lambda: arr1 + arr2, number=1)

    print(f"Raw add time: {raw_add_time} \nNumpy add time: {numpy_add_time}")

    # Element-wise multiplication
    raw_mul_time = timeit(
        lambda: [list1[i] * list2[i] for i in range(list_size)], number=1
    )
    numpy_mul_time = timeit(lambda: arr1 * arr2, number=1)

    print(f"Raw mul time: {raw_mul_time} \nNumpy mul time: {numpy_mul_time}")

    # Dot product
    raw_dot_time = timeit(
        lambda: sum([list1[i] * list2[i] for i in range(list_size)]), number=1
    )
    numpy_dot_time = timeit(lambda: np.dot(arr1, arr2), number=1)

    print(f"Raw dot time: {raw_dot_time} \nNumpy dot time: {numpy_dot_time}")

    # Matrix multiplication
    def matrix_multiply_lists(A, B):
        result = [[0] * list_size for _ in range(list_size)]
        for i in range(list_size):
            for j in range(list_size):
                for k in range(list_size):
                    result[i][j] += A[i][k] * B[k][j]
        return result

    raw_matrix_time = timeit(lambda: matrix_multiply_lists(list1, list2), number=1)
    numpy_matrix_time = timeit(lambda: np.matmul(arr1, arr2), number=1)

    print(
        f"Raw matrix time: {raw_matrix_time} \nNumpy matrix time: {numpy_matrix_time}"
    )
