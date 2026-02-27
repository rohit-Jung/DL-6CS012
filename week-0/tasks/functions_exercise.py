def unit_conversion():
    type_conversion = input("Enter the type of conversion (length, weight, volume): ")
    match type_conversion.lower():
        case "length" | "l":
            length_conversion()
        case "volume" | "v":
            volume_conversion()
        case "weight" | "w":
            weight_conversion()
        case _:
            print(
                f"Invalid input {type_conversion}. Inputs are: length, weight, volume"
            )


def perform_operation():
    """
    Performs the specified operation on the list of numbers given
    """
    operation = input("Enter a operation (sum, avg, max, min): ")
    nums = input("Enter numbers separated by space: ")

    try:
        filtered_num = [int(x) for x in nums.split()]
        match operation.lower():
            case "sum":
                print(f"Sum is {get_sum(filtered_num)}")
            case "avg":
                print(f"Avg is {get_avg(filtered_num)}")
            case "max":
                print(f"Max is {get_max(filtered_num)}")
            case "min":
                print(f"Min is {get_min(filtered_num)}")
            case _:
                print(
                    f"Invalid operation: {operation}. Enter among (sum, avg, max, min)"
                )

    except Exception as e:
        print(f"Invalid input detected, {e}")


def length_conversion():
    """
    This function asks the user to which unit the value
    should be converted to (either meter or feet)

    It then ask for the value and converts accordingly
    """
    unit = input("What do you want to convert to (m/ft): ")

    try:
        val = float(input("Enter the value: "))
        match unit.lower():
            case "m" | "meters":
                converted = val / 3.28084
                print(f"{val} in {unit} is {converted}")

            case "ft" | "feet":
                converted = (val) * 3.28084
                print(f"{val} in {unit} is {converted}")

            case _:
                print("Invalid Unit Given For Conversion.")

    except Exception as e:
        print("Non numeric values are not allowed.", e)


def weight_conversion():
    """
    This function asks the user to which unit the value
    should be converted to (either kilograms or pounds)

    It then ask for the value and converts accordingly
    """
    unit = input("What do you want to convert to (lbs/kg): ")

    try:
        val = float(input("Enter the value: "))
        match unit.lower():
            case "pounds" | "lbs":
                converted = val * 2.204623
                print(f"{val} in {unit} is {converted}")

            case "kilograms" | "kg":
                converted = val / 2.204623
                print(f"{val} in {unit} is {converted}")

            case _:
                print("Invalid Unit Given For Conversion.")

    except Exception as e:
        print("Non numeric values are not allowed.", e)


def volume_conversion():
    """
    This function converts asks the user to which unit the value
    should be converted to (either gallons or litres)

    It then ask for the value and converts accordingly
    """
    unit = input("What do you want to convert to (gals/l): ")

    try:
        val = float(input("Enter the value: "))
        match unit.lower():
            case "liters" | "l":
                converted = val * 0.2641729
                print(f"{val} in {unit} is {converted}")

            case "gals" | "gallons":
                converted = val / 0.2641729
                print(f"{val} in {unit} is {converted}")

            case _:
                print("Invalid Unit Given For Conversion.")

    except Exception as e:
        print("Non numeric values are not allowed.", e)


def get_sum(items: list[int]):
    """Returns sum of items in the list

    Parameters
    ----------
    items : list[int]
        List of number to find sum of

    Returns
    -------
    int
        sum of numbers in list
    """
    if len(items) == 0:
        raise Exception("Empty List Received")

    sum = 0
    for item in items:
        sum += item

    return sum


def get_avg(items: list[int]):
    """Returns average of given list
    Parameters
    ----------
    items : list[int]
        list of integers

    Returns
    -------
    int
        average value of list
    """
    if len(items) == 0:
        raise Exception("Empty List Received")

    return get_sum(items) / len(items)


def get_max(items: list[int]):
    """Returns maximum element of the list

    Parameters
    ----------
    items : list[int]
        List of numbers

    Returns
    -------
    int
       Maximum element in the list
    """
    if len(items) == 0:
        raise Exception("Empty List Received")

    max = items[0]
    for item in items:
        if item > max:
            max = item

    return max


def get_min(items: list[int]):
    """Returns minimum element of the list

    Parameters
    ----------
    items : list[int]
        List of numbers

    Returns
    -------
    int
       Minimum element in the list
    """
    if len(items) == 0:
        raise Exception("Empty List Received")

    min = items[0]
    for item in items:
        if item < min:
            min = item

    return max
