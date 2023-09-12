const personmodule = require("../model/model")

const getperson = async (req, res) => {
    try {
        const user = await personmodule.find()
        if(!user){
            res.status().send("no user found")
        }
        res.status(200).send({user:user}) 
    } catch (error) {
        console.log(error)
        return res.status(500).send("something went wrong")
    }
}
const createperson = async (req, res) => {
    try {
        const {name} = req.body
        if(!name){
            res.status().send("no field provided")
        }
        const user = await personmodule.create({name})
        if(!user){
            res.status().send("could not create user")
        }
        res.status(200).send({user:user})
    } catch (error) {
        console.log(error)
        return res.status(500).send("something went wrong")
    }
}
const updateperson = async (req, res) => {
    try {
        const id = req.params.id
        if(!id){
            res.status().send("no id provided")
        }
        const user =  await personmodule.findByIdAndUpdate({_id:id}, req.body, {
            new:true,
            runValidators: true
        })
        if(!user){
            res.status().send("could not update")
        }
        res.status(200).send({user:user})
    } catch (error) {
        console.log(error)
        return res.status(500).send("something went wrong")
    }
}
const deleteperson = async (req, res) => {
    try {
        const id = req.params.id
        if(!id){
            res.status().send("no id provided")
        }
        await personmodule.findByIdAndDelete({_id:id})
        res.status(200).send("done")
    } catch (error) {
        console.log(error)
        return res.status(500).send("something went wrong")
    }
}

module.exports = {
    getperson,
    createperson,
    updateperson,
    deleteperson
}