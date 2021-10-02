import urllib2, json

url = "https://gist.githubusercontent.com/hfabio/514717af3461ced9947641d583c29581/raw/fb3d702f286952a169bf460826b0de1a16e89af3/data.json"

response = urllib2.urlopen(url)

data = json.load(response)

with open('./src/knex/dataset.json', 'w') as f:
    json.dump(data, f)

contributors = []
contributors_list = []
desktops = []
desktops_list = []
companies = []
companies_list = []




for company in data:
    #generate contributors json file with compamny_id
    contributors = company['contributors']
    for contrib in contributors:
        contrib['cp_phone_number'] = company['phone_number']
        contributors_list.append(contrib)

     #generate desktops json file with compamny_id
    desktops = company['desktops']
    for desk in desktops:
        desk['cp_phone_number'] = company['phone_number']
        desktops_list.append(desk)       
    
    del company['contributors']
    del company['desktops']
    companies_list.append(company)
   # print(companies_list)
  
with open('./src/knex/desktop.json', 'w') as f:
    json.dump(desktops_list, f)

with open('./src/knex/contributors.json', 'w') as f:
    json.dump(contributors_list, f)


with open('./src/knex/companies.json', 'w') as f:
    json.dump(companies_list, f)
  