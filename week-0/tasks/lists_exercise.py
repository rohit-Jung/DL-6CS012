from typing import Any


def extract_every_other(items: list[Any]) -> list[Any]:
    """Extracts every other element in the list

    Parameters
    ----------
    items : list[Any]
        List of elements of any type

    Returns
    -------
    list[Any]
        List of every other element in the user specified list

    """
    every_other = []
    for idx, item in enumerate(items):
        if idx % 2 == 0:
            every_other.append(item)

    return every_other


def get_sublist(items: list[Any], start: int, end: int):
    """Returns a slice(list) containing items of given range of given list

    Parameters
    ----------
    items : list[Any]
        List of elements of any type
    start : int
        Start index of slice
    end : int
        End index of slice

    """
    return items[start:end]


def reverse_list(items: list[Any]) -> list[Any]:
    """Reverses the given list element

    Parameters
    ----------
    items : list[Any]
        List of elements to reverse

    Returns
    -------
    list[Any]
        List of reversed elements

    """
    return items[::-1]


def remove_first_last(items: list[Any]) -> list[Any]:
    """Removes the first and last element from the list

    Parameters
    ----------
    items : list[Any]
        List of elements

    Returns
    -------
    list[Any]
        List excluding first and last element

    """
    return items[1:-1:]


def get_first_n(items: list[Any], n: int) -> list[Any]:
    """Returns the first n elements from the list

    Parameters
    ----------
    items : list[Any]
        List of elements
    n : int
        Upper limit of new list

    Returns
    -------
    list[Any]
        List containing first n elements

    """
    return items[:n]


def get_last_n(items: list[Any], n: int) -> list[Any]:
    """Returns the last n elements from the list

    Parameters
    ----------
    items : list[Any]
        List of elements
    n : int
        Index of element to return up to

    Returns
    -------
    list[Any]
        List containing last n elements

    """
    return items[-n:]


def reverse_skip(items: list[Any]) -> list[Any]:
    """Extracts a list of elements in reverse order starting from the
    second-to-last element and skipping one element in between.

    Parameters
    ----------
    items : list[Any]
        List of elements

    Returns
    -------
    list[Any]
        List in reverse order skipping one element in between.
    """
    return items[-2::-2]
