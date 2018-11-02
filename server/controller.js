module.exports = {


    getHouses: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_houses().then((houses) => res.status(200).send(houses))
            .catch(err => {
                console.log(err);
            }).catch(err => {
                console.log(err);
                res.status(500).send(err);
            })
    },

    addHouse: (req, res) => {
        const dbInstance = req.app.get('db');
        const { property_name, address, city, state, zip } = req.body;
        dbInstance.add_house([property_name, address, city, state, zip]).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
    },

    deleteHouse: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        dbInstance.delete_houses([id]).then(() => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
    }
}