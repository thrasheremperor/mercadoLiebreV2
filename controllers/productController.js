const products = require('../data/productsdb');
let productsJSON = products.getProducts();


module.exports = {
    productIndex : (req, res) => {
        res.render('product', {
            title : 'Product List',
            productsJSON
        })
    },
    detailList: (req,res)=>{

        const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");
        let productss = [];

        let productoo = productsJSON.find(product => {
            return product.id === Number(req.params.id)
        })

        productsJSON.forEach(product=>{
            if(productoo){
                return productss.push(product);
            }
        })

        res.render('productDetail',{
            productss,
            toThousand,
            title : productoo.name,
            productoo
        });
    }
}