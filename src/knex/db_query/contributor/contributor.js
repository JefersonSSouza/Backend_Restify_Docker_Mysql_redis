const knex= require('../../knex.conf')
// select * from contributors;
const select_contributors = knex('contributors');

// select * from contributors where term ?
function select_contributors_company(term){
    const select_contributors_company = knex('contributors').where({cp_phone_number:term})
    return select_contributors_company
}
//exports module
module.exports = {
    select_contributors,
    select_contributors_company
}