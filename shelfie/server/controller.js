module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory()
        .then(result => {res.status(200).send(result)})
        .catch(err => res.status(500).send(err))
    },
    getOneProduct: (req, res) => {
        console.log(req.params)
        const db = req.app.get('db')
        const {id} = req.params
        db.get_one_product(+id)
        .then(result => {res.status(200).send(result)})
        .catch(err => res.status(500).send(err))
    },
    addProduct: (req, res) => {
        const db = req.app.get('db')
        const {product_name, product_image, product_price} = req.body
        db.add_product([product_name, product_image, product_price]) 
        .then(result => {res.status(200).send(result)})
        .catch(err => res.status(500).send(err))
    },
    editProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {product_name, product_image, product_price} = req.body
        db.edit_product([+id, product_name, product_image, product_price])
        .then(result => {res.status(200).send(result)})
        .catch(err => res.status(500).send(err))
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product(+id)
        .then(result => {res.status(200)})
        .catch(err => res.status(500).send(err))
    }
};