const express = require('express')
const router = express.Router();
router.use(express.json())

const db = require('./projects-model')



router.get('/', (req,res) =>{
    db.getProjects()
    .then(projects =>{
        res.status(200).json(projects)
    })
    .catch(error =>{
        res.status(500).json(error)
    })
})


router.get('/:id', (req,res) =>{

    const {id} = req.params;
    db.getProjectById(id)
    .then(project =>{
        res.status(200).json(project)
    })
    .catch(error =>{
        res.status(500).json(error)
    })
})

///post project
router.post('/', async (req,res) =>{

    const {name, description} = req.body;
    if(!description || !name){
        res.status(204).json({message:"please add a name and deacription"})
    }else{
        try{
            const project = req.body;
            //get id to return orject and not count
            const [id] = await db.addProject(project)
            const newEntry = await db.getProjects().where({id})

            res.status(200).json(newEntry)

        }catch(error){
            res.status(500).json(error)
        }
    }
})




///get actions 
router.get('/:id/actions', async(req,res) =>{
    const {id} = req.params;
   

    const check = await db.getProjectById(id);
    if(check){
        try{
            const actions = await db.getActions(id);

            res.status(200).json({...check,actions})
        }catch(error){
            res.status(500).json(error)
        }
    }else{
        res.status(404).json({message:"this project doesnt exist"})
    }
});


router.post('/:id/actions', async (req,res) =>{
    const {id} = req.params;
    const check = await db.getProjectById(id);

    if(check){

        const {description} = req.body;
        if(!description){
            res.status(204).json({message:"please add a description"})
        }else{

            try{
                const action = req.body;
            //get id to return orject and not count
            const [action_id] = await db.addAction(action, id)


            const newEntry = await db.getAction(action_id)
    
               res.status(200).json(newEntry)
            }catch(error){
                res.status(500).json(error)
            }
        }
    }else{
        res.status(404).json({message:"this project doesnt exist"})
    }
});


module.exports = router;