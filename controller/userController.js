const {users}= require("../models/userModels")
exports.getUsers = async (req, res) => {
    try {
        let userCollection = []
        const skipValue = req.query.skip || 0 ;
        const limitValue = req.query.limit;
        users
            .skip(skipValue*limitValue)
            .limit(limitValue)
            .forEach(user => userCollection.push(user))
            .then(() => {
                res.status(200).json(userCollection);
            })

    }
    catch(err) {
        console.log(err)
    }
   
}