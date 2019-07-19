const db = require('../data/dbConfig')




module.exports = {
    getProjects,
    getProjectById,
    addProject,
    getActions,
    getAction,
    addAction

}


function getProjects() {
    return db('projects')
}

function getProjectById(id) {
    return db('projects')
    .first()
    .where({id}).then(project =>{
        if(project){
            return project;
        }else{
            return null;
        }
    })
}

function getAction(id){
    return db('actions')
    .first()
    .where({id:id}).then(action =>{
        if(action){
            return action
        }else{
            return null
        }
    })
}


function addProject(project){
    return db('projects').insert({...project, completed:0})
}

function getActions(id){
    return db('actions').where({project_id:id})
}


function addAction(action, id){
    return  db('actions').insert({
        ...action,
        completed:0,
        project_id:id
    });
}
