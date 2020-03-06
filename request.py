import requests

url = 'http://localhost:5000/results'
r = requests.post(url,json={'step':205, 'type':1, 'oldbalanceOrg':0, 'newbalanceOrig': 0, 'oldbalanceDest': 1853683.32,
                           'newbalanceDest': 1916926.76, 'errorBalanceOrig': 63243.44, 'errorBalanceDest':0})

print(r.json())
'''

'''
