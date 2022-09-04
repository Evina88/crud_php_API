const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/create', (req,res,next)=>{
    let client = req.body;
    let query = "insert into clients (last_name, first_name, email,phone, category) values(?,?,?,?,?)";
    connection.query(query,[client.last_name, client.first_name, client.email, client.phone, client_category], (err,results)=>{
        if(!err) {
            return res.status(200).json({message: "Client added succesfully"});
        }

        else {
            return res.status(500).json(error);
        }
    });
});

router.get('/read', (req,res,next) => {
    let query = "select * from clients";
    connection.query(query,(err,results)=> {
         if(!err) {
            return res.status(200).json(results);
        }

        else {
            return res.status(500).json(error);
        }
    });
});

router.patch('/update/:id', (req,res,next) =>{
    let id = req.params.id;
    let client = req.body;
    let query= "update client set last_name=?,fist_name=?,email=?,phone=?,category=? where id=?";
    connection.query(query,[client.last_nameclient.first_name,client.email,client.phone,client.category,id],(err,results)=>{
        if(!err) {
            if(results.affectedRows == 0) {
                return res.status(404).json({message: "Client id is not found"});

            }
            return res.status(200).json({message: "Client updated successfully"});
        }

        else {
            return res.status(500).json(err);
        }
    });
});

router.delete('delete/:id',(req,res,next)=> {
    let id = req.params.id;
    let query = "delete from clients Where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err) {
            if(results.affectedRows == 0){
                return res.status(404).json({message: "Client id is not found"});
            }
             return res.status(200).json({message: "Client deleted successfully"});
        }

         else {
            return res.status(500).json(err);
        }
    })
})

module.exports = router; 
