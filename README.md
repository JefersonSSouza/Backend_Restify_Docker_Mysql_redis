# Backend_Restify_Docker_Mysql_redis
Rest API Restify includes knex migrations an seed files to populate a mysql database running on docker container with images mysql  5.7 and redis
## required Configuration.
* Pyton 
https://www.python.org/downloads/

* Docker
https://docs.docker.com/get-docker/

* Nodejs
https://nodejs.org/en/

# Step1
```` 
npm install
```` 

# Step 2 Running application
<p align="left">
  Make sure docker is running
</p>

## Install Mysql 3.7 and Redis: latest from Docker Compose File
````
npm run docker-compose-up
````
<p align="left">
 When install docker image and running is finished the database named database_test is created on mysql.
</p>
 <p align="left">
  The file <strong>src/knex/.env</strong> have the environment variables to database parameters
  </p>

# Step 3 Running Backend
## In another terminal.
````
npm start
````
* The Restify server running on PORT 5000:
````
http://localhost:5000
````
# Step 4 Running Kenx Migration and Seed Files
<p align="left">
 The knex migration is used to structure Mysql database, from Restify route
</p>
 
````
http://localhost:5000/migrate/ADMIN-migrate
````

<p align="left"> 
The Parameter <strong>ADMIN-migrate</strong> is the parameter used to authenticate and can be changed to another strategy.
</p>

<p align="left">
  After migration created another route is redirect to run seeds file
</p>


## The Seed File
<p align="left">
The python code in src/knex/getData.py is used to download a dataset used to the test API, from:
</p>
<p align="left">
https://gist.githubusercontent.com/hfabio/514717af3461ced9947641d583c29581/raw/fb3d702f286952a169bf460826b0de1a16e89af3/data.json
</p>  
<p align="left">
The Python code structure and generate 3 seeds files by company and add the phone_number from company to foreign key, to contributors and desktops seed files, and insert this datas on database_test, mysql image running on docker created from docker compose.
</p>

# Setp 5 test API
# Get all companies list
<p align="left">
  <strong> Method GET </strong>
</p>

````
http://localhost:5000/getAllCompanies
````

# POST which receives a term to search a company (**details below)
<p align="left">
  <strong> Method POST </strong>
</p>

## Search company from term by POST method from JSON form
````
http://localhost:5000/searchCompanies
````
## Example form
````
{
"business_name":"Schuppe - Spencer"
}
````
## Details term
````
{
   "id":40068,
   "business_name":"Schuppe - Spencer",
   "suffix":"LLC",
   "industry":"Tactics",
   "catch_phrase":"Compatible background benchmark",
   "bs_company_statement":"grow global infrastructures",
   "logo":"http://placeimg.com/640/480/business",
   "type":"enable",
   "phone_number":"803.658.4521",
   "full_address":"2037 Champlin Summit",
   "latitude":"-73.1783",
   "longitude":"55.6623",
   "contributors":[
      {
         "firstName":"Hailee",
         "lastName":"Davis",
         "title":"Corporate Security Liaison",
         "jobTitle":"Legacy Implementation Strategist",
         "age":23
      },
      {
         "firstName":"Clare",
         "lastName":"Hauck",
         "title":"Future Metrics Administrator",
         "jobTitle":"Central Integration Representative",
         "age":35
      },
      {
         "firstName":"Elvis",
         "lastName":"Nitzsche",
         "title":"District Interactions Planner",
         "jobTitle":"International Accounts Associate",
         "age":31
      },
     ...
   ]
}
````
# Get all desktops in all companies
<p align="left">
  <strong> Method GET </strong>
</p>

````
http://localhost:5000/getAllDesktops
````

# Get all desktops in a company
<p align="left">
  <strong> Method POST </strong>
</p>
## Search all desktops from a company by phone number's company

````
http://localhost:5000/getDesktopCompany
````

## Example form
````
{
"phone_number" : "(201) 933-1234"
}
````
# Get all contributors in a company
<p align="left">
  <strong> Method POST </strong>
</p>

## Search all contributors from a company by phone number's company

````
http://localhost:5000/getContributorsCompany
````

## Example form
````
{
"phone_number" : "(201) 933-1234"
}
````

