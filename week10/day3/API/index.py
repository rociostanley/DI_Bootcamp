import requests
response = requests.get("http://api.open-notify.org/iss-now.json")
# Print the status code of the response.
print(response)
# 200