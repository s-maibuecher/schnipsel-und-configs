# inspect and prettyprint code
import inspect
from pprint import pprint
pprint(inspect.getsource(MODULE-NAME))


# read environment files:
import subprocess
ls_var = subprocess.check_output(['cat', './slot_machine/tests.py'])
print(ls_var)

