const mysql=require("mysql2");
module.exports=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"12345678",
    database:"target",
});