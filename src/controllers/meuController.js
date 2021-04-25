const db = require('../database/conn')
const moment = require('moment')

async function getTime() {
    timestamp = await moment(new Date()).format('DD/MM/YYYY HH:mm:ss')
    return timestamp
}

module.exports = {

    async index (req, res) {
        const { id } = req.query

        if(id){
            const respID = await db('people').select().where({ id }).first()
            if(respID){
                return res.status(200).json(respID)    
            } else{
                return res.status(400).json({error:"Person ID not Found"})    
            }
        }


        const resp =  await db('people').select().orderBy('id')

        return res.status(200).send(resp)
    },

    async create(req, res){
        const person = req.body
        
        const [id] = await db('people').insert(person).returning('id')

        res.send({id,person})
    },

    async update (req,res){
        const { id } = req.params
        const person = req.body
        
        const alteredId = await db('people')
        .update(person)
        .where('id', id)
        // .returning('*')

        // console.log(alteredId)

        const respPerson = await db('people').select().where('id',id)

        return res.status(201).json(respPerson)

    },

    async delete (req,res){
        const { id } = req.params

        const Id = await db('people').select().where('id',id).first()

        if(!Id){
            return res.status(400).json({error: "ID not found"})
        }

        await db('people').delete().where('id',id)

        return res.status(204).send()
        
    }
    

};