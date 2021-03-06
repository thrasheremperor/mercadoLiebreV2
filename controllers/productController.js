const products = require('../data/productsdb');
let productsJSON = products.getProducts();


module.exports = {
    productIndex : (req, res) => {
        let product = productsJSON.find(product => {
            return product.id === Number(req.params.id) && product.category === req.params.category
        })
        res.render('product', {
            title : 'Product List',
            productsJSON,
            product
        })
    },
    detail : (req, res) => {
        let item = productsJSON.find(product => {
            return product.id === Number(req.params.id) && product.category === req.params.category
        })

        res.render('productDetail', {
            title : item.name,
            item
        })
    }
}