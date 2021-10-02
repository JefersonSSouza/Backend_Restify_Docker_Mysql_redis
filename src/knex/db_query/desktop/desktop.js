const knex= require('../../knex.conf')
// select * from desktop;
const select_desktops = knex('desktop');

// select * from desktop where term ?
function select_desktops_company(term){
    const select_desktops_company = knex('desktop').where({cp_phone_number:term})
    return select_desktops_company
}
//exports module
module.exports = {
    select_desktops,
    select_desktops_company
}