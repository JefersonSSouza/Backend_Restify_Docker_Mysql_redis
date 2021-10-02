const knex= require('../../knex.conf')

// select * from company;


const select_companies = knex('company');


function select_company_term(term){
    const select_company_term = knex('company').where(term)
    return select_company_term
}

// "id": "35339",
//             "business_name": "Wisoky - Raynor",
//             "suffix": "LLC",
//             "industry": "Research",
//             "catch_phrase": "Multi-layered directional archive",
//             "bs_company_statement": "innovate frictionless relationships",
//             "logo": "http://placeimg.com/640/480/business",
//             "type": "exploit",
//             "phone_number": "(200) 597-7377 x514",
//             "full_address": "80400 Kamron Haven",
//             "latitude": "60.6894",
//             "longitude": "-79.9518",
//             "created_at": "2021-10-02T04:22:47.000Z",
//             "updated_at": "2021-10-02T04:22:47.000Z"


module.exports = {
    select_companies,
    select_company_term
}