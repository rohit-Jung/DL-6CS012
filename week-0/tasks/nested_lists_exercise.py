from typing import Any


def flatten(items: Any) -> list[Any]:
    """Takes a nested list and flattens it into a single list,
       where all the elements are in a single dimension

       Uses Recursion

    Parameters
    ----------
    items : list[Any] | Any
        Given list of elements or an element

    Returns
    -------
    list[Any]
        Flattened list of elements
    """
    # lets try recursion (first principles)
    if not isinstance(items, list):
        return [items]

    if not items:
        return []

    if isinstance(items[0], list):
        return flatten(items[0]) + flatten(items[1:])
    else:
        return [items[0]] + flatten(items[1:])

    # other approach (better one ? )
    # result = []
    #
    # def _flatten(sub_items):
    #     if not isinstance(sub_items, list):
    #         result.append(sub_items)
    #         return
    #
    #     for elem in sub_items:
    #         _flatten(elem)
    #
    # _flatten(items)
    # return result


def access_nested_list(items: list[Any], indices: list[int]) -> Any:
    """Returns the element present at given indices

    Parameters
    ----------
    items : list[Any]
        List of elements
    indices : list[int]
        List of item from elements to access

    Returns
    -------
    Any
        Element at the given index

    """
    try:
        temp = items
        for idx in indices:
            temp = temp[idx]
        return temp

    except IndexError:
        return "Invalid indices passed"


def remove_element(items: list[Any], elem: Any) -> list[Any]:
    """Removes every occurance of given element in given list

    Parameters
    ----------
    items : list[Any]
        List of elements
    elem : Any
        Element to remove from the list

    Returns
    -------
    list[Any]
        List without the removed element
    """

    def _remove(sub):
        # base case ?
        if not isinstance(sub, list):
            return

        while elem in sub:
            sub.remove(elem)

        for item in sub:
            _remove(item)

    _remove(items)
    return items


def find_max(items: Any) -> int:
    """Returns the maximum value in the given list of elements

    Parameters
    ----------
    items : Any
        List of elements or single element

    Returns
    -------
    int
        Maximum value in the list given
    """
    # BUG: Ideally -1 shouldn't be returned
    if not items:
        return -1

    if not isinstance(items, list):
        return items

    return max(find_max(items[0]), find_max(items[1:]))


def count_occurrences(items: list[Any], elem: Any) -> int:
    """Counts the occurrence of given element in the given list

    Parameters
    ----------
    items : list[Any]
        List of elements
    elem : Any
        Element to count occurrence of

    Returns
    -------
    int
        Occurrence count of the given element in list
    """
    occ = {}

    def _count(sub):
        if not isinstance(sub, list):
            occ[sub] = occ.get(sub, 0) + 1
        else:
            for elem in sub:
                _count(elem)

    _count(items)
    sorted_list = sorted(occ.items(), key=lambda x: x[1], reverse=True)
    return sorted_list[0][1]


def deep_flatten(items: list[Any]) -> list[Any]:
    """Flatten the given nested list and returns it

    Parameters
    ----------
    items : list[Any]
        List of list or elements

    Returns
    -------
    list[Any]
        List of elements

    """
    result = []

    def _count(sub):
        if not isinstance(sub, list):
            result.append(sub)
        else:
            for elem in sub:
                _count(elem)

    _count(items)
    return result


def average_nested(items: list[Any]) -> float:
    """Returns the average of the given nested list

    Parameters
    ----------
    items : list[Any]
        List of elements

    Returns
    -------
    float
        Average of the given list (flattened_list)
    """
    flattened_list = deep_flatten(items)
    return sum(flattened_list) / len(flattened_list)
