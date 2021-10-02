import sys
import redis
import json

file = int(sys.argv[1])
r = redis.StrictRedis()
r.execute_command('JSON.SET', 'allCompanies', '.', json.dumps(file))
reply = json.loads(r.execute_command('JSON.GET', 'allCompanies'))
jsonRedis(file)


