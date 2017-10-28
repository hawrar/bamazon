// var for required npm packages.

var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: 'root',
    password: '',
    database: 'bamazon'
});
var amount;
var userId;
var price;
var sql = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";

connection.connect();


//Console logging the results

connection.query('SELECT * FROM products', function(error, results, fields) {
    if (error) throw error;
    console.log("\nitem_id | product_name | department_name | price | stock_quantity");
    for (var i = 0; i < results.length; i++) {
        console.log(
            results[i].item_id + " | " +
            results[i].product_name + " | " +
            results[i].department_name + " | " +
            results[i].price + " | " +
            results[i].stock_quantity + " | "
        )
    };
});

// Taking in customer choices

var runSearch = function(answer) {
    inquirer.prompt({
        name: "productId",
        message: "Please enter the ID of the product you would like to buy."
    }).then(function(answer) {
        var userId = answer.productId;
        connection.query("select * from products where item_id = '" + answer.productId + "'", function(err, res) {
            if (err) throw err;
            amount = res[0].stock_quantity;
            price = res[0].price;
            productSearch();
        })

        //Taking in customer quantity


        var productSearch = function() {
            inquirer.prompt({
                name: "amountOfProduct",
                message: "How many units of the product would you like to buy?"
            }).then(function(answer) {
                var customerPurchase = answer.amountOfProduct;
                var amountToUpdate = amount - customerPurchase;
                if (customerPurchase > amount) {
                    console.log("Insufficient quantity!");
                }else{
                    console.log("Your invoice amount will be $" + customerPurchase * price); 
                    connection.query(sql, [amountToUpdate, userId]); 
                        
                }
                connection.end();
            });
        };
    });
};

runSearch();