const products = require('../data/productsdb');
let productsJSON = products.getProducts();

module.exports = {
    index : (req, res) => {
        let onSale = productsJSON.filter(product => {
            return product.category == 'in-sale';
        })
        let visited = productsJSON.filter(product => {
            return product.category == 'visited';
        })

        res.render('home', {
            title : 'Welcome to Mercado Liebre',
            onSale,
            visited
        })
    }
}