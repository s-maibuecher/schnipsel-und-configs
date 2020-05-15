import random

data = None
with open('in.txt', 'r') as f:
    data = f.read().splitlines()

data = [d for d in data if d != '']
print(random.choice(data))

