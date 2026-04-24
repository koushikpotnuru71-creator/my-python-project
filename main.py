import json
from utils import greet_user

with open("data.json") as f:
    data = json.load(f)

greet_user(data["name"])

print("Skills:")
for skill in data["skills"]:
    print("-", skill)
