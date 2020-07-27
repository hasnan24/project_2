var moment 	= require('moment');
var mysql 	= require('mysql');
var chalk	= require('chalk');

var con_mysql = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"db_project_js_2"
});

con_mysql.connect(function(err){
	if(err)throw err;
	console.log(chalk.red.bgYellow("Connected "+moment().format("DD/MM/YYYY hh:mm:ss") ));
	
	// var sql = "CREATE TABLE employee (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
	// con_mysql.query(sql,function(err,result){
	// 	if(err) throw err;
	// 	console.log("TABLE CREATED");
	// });

  // var sql = "INSERT INTO employee (name, address) VALUES ?";
  // var values = [
  //   ['John', 'Highway 71'],
  //   ['Peter', 'Lowstreet 4'],
  //   ['Amy', 'Apple st 652'],
  //   ['Hannah', 'Mountain 21'],
  //   ['Michael', 'Valley 345'],
  //   ['Sandy', 'Ocean blvd 2'],
  //   ['Betty', 'Green Grass 1'],
  //   ['Richard', 'Sky st 331'],
  //   ['Susan', 'One way 98'],
  //   ['Vicky', 'Yellow Garden 2'],
  //   ['Ben', 'Park Lane 38'],
  //   ['William', 'Central st 954'],
  //   ['Chuck', 'Main Road 989'],
  //   ['Viola', 'Sideway 1633']
  // ];
  // con_mysql.query(sql,[values],function(err,result){
  // 	if(err) throw err;
  // 	console.log(result);
  // });

  	// con_mysql.query("SELECT * FROM employee", function(err,result,fields){
  	// 	if(err) throw err;
  	// 	console.log(fields);
  	// }); 

	// var sql = "DELETE FROM employee WHERE address LIKE 'M%'";
 //  	con_mysql.query(sql, function (err, result) {
 //     	if (err) throw err;
 //     	console.log("Number of records deleted: " + result.affectedRows);
 //    });

 	

});
