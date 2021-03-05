module.exports = {
    index : (req, res) => {
        res.render('home', {
            title : 'Welcome to Mercado Liebre'
        })
    }
}