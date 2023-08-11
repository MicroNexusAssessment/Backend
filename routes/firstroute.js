const Router = require('express');
const router = Router();
const db = require('../database.js');


// api to get score based on the player id
router.get('/getScore/:player_id', async (req, res) => {           
    let query=`call target.getScoreIdBased(${req.params.player_id});`
    console.log(query)
    const result = await db.promise().query(query)
        .catch(err => {
            console.log(err);            
            res.status(200).send({msg:"Error Occured"});
        });
    if (result) {        
        console.log(result[0][0])
        res.status(200).send(JSON.stringify(result[0][0]));
    }
});


// api to insert the score of the player
router.post('/insertScore', async (req, res) => {  
    console.log("Hit")  
    console.log(`call target.InsertScore(${req.body.player_id}, '${req.body.player_name}', ${req.body.player_score})`);
    const result = await db.promise().query(`call target.InsertScore(${req.body.player_id}, '${req.body.player_name}', ${req.body.player_score})`)
        .catch(err => {
            console.log(err);
            logger.error(err, { req });
            res.status(200).send(null);
        });        
    if (result) {
        console.log('inserted')
        console.log(result[0][0])
        res.status(200).send(result[0][0]);
    }
});




// api to delete the score of the player
router.post('/deleteScore', async (req, res) => {  
    console.log("Hit")  
    console.log(`call target.DeleteScoreIdBased(${req.body.player_id})`);
    const result = await db.promise().query(`call target.DeleteScoreIdBased(${req.body.player_id})`)
        .catch(err => {
            console.log(err);            
            res.status(200).send(null);
        });        
    if (result) {                
        res.status(200).send({msg:"Deleted"});
    }
});
module.exports = router;
