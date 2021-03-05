const productsdb = require('../data/productsdb');
const products = require('../data/productsdb');
let productsJSON = products.getProducts();


module.exports = {
    categoryList : (req, res) => {

        let result = '';

        for (let product of productsJSON){
            result = `${product.category}\n`.toUpperCase();
        }; 

        res.render('category', {
            title : 'Categories',
            result
        }) 
    }
}