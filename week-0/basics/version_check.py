import sys


def check_python_version():
    if sys.version_info.major == 3 and sys.version_info.minor >= 6:
        print(f"Python version {sys.version}")
    else:
        print("Please use python version 3.6 or higher")
