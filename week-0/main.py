from tasks.numpy_exercise import matrix_operations, numpy_performance


def main():
    print("Hello from week-0-worksheet!")

    items = [1, 2, 3, 4, 5, 6]
    nested_items = [[1, 2], [3, 4], [5]]

    nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9], 2]
    indices = [1, 2]

    most_nested = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

    # check_python_version()
    # unit_conversion()
    # perform_operation()

    # print(extract_every_other(items))
    # print(reverse_list(items))
    # print(remove_first_last(items))
    # print(get_first_n(items, 3))
    # print(get_last_n(items, 2))
    # print(reverse_skip(items))

    # print(flatten(nested_items))
    # print(access_nested_list(nested, indices))
    # print(remove_element(nested, 2))
    # print(find_max(nested))
    # print(count_occurences(nested, 2))
    # print(deep_flatten(most_nested))

    shape = (4, 2)
    items = [1, 2, 3, 4]
    val = 10
    # array_creation(shape, int, val, items)
    #
    # array_manipulation()

    # array_operation()
    # matrix_operations()
    numpy_performance()


if __name__ == "__main__":
    main()
