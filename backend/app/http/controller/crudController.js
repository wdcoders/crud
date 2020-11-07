function crudController(){
    return {
        read(req,res){
            res.send('read');
        },
        update(req,res){
            res.send('update');
        },
        create(req,res){
            res.send('create');
        },
        delete(req,res){
            res.send('delete');
        }
    }
}

module.exports = crudController;