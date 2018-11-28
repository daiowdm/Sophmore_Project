//Implements express to handle HTTP requests from the users and posts from the host server
var express = require("express");
var app = express();



/*Prof Fredericks:I am pretty sure you need to expose your root web directory to Express
	Since the Content is static: meaning that you do not need to generate these files on the fly, as their content does not change.
	However, ExpressJS does not handle static content, so ExpressJS needs to be instructed to deliver the content as static content.
	app.use(express.static("public")) delivers all static content to the user from the directory 'public'
	app.use(express.static(__dirname + '/'));*/

app.use(express.static("public"));
											
//Implementation 
var bodyParser = require("body-parser"); //Body parser to help express extract the entire body of request and post message
app.use(bodyParser.urlencoded({extended: true}));

var Chart = require('chart.js'); 
var mongoose = require("mongoose"); //mongoose communicates with MongoDB from within node.js

//Specifies the directory for the finance database
// mongoose.connect("mongodb://admin:test123@ds151463.mlab.com:51463/bliss_db"); //MLab
// mongoose.connect("mongodb://localhost/bliss_db"); //Localhost
mongoose.connect("mongodb+srv://admin:test123@cluster0-5025x.gcp.mongodb.net/bliss_db?retryWrites=true");  //mongoDB Atlas



//Creates a template for expense report entries
var homeExpenseSchema = new mongoose.Schema({
	type: String,
	description: String,
	amount: Number,
	date: {
		type: Date,
		default: Date.now(),
	},
	category: String
});

/*Implements a variable for sending info to the mongoDB database by creating
	instances of the Schema Model: expenseSchema*/
var homeBudget = mongoose.model("home_budget", homeExpenseSchema);
var businessBudget = mongoose.model("business_budget", homeExpenseSchema);

<<<<<<< HEAD

// app.set("view engine", "ejs");
//Sets .ejs as the default file extension for serving up requests
//OPTIONAL depending on what file extension we use

// app.get("/", function(req, res){
// 	res.redirect("/budget");
// });
//Serves up home.ejs

=======
//Serves up home.ejs
>>>>>>> Final Commit: v1.0
/*Requesting to view the root page. Javascript executes in a top down fashion and by default, this web page is accessed first when the user enters the url*/
app.get("/", function(req, res){
	res.render("main.ejs");
});


app.get("/homebudget", function(req, res){
<<<<<<< HEAD
    res.render("homeBudget.ejs");
});

app.get("/businessbudget", function(req, res){
    res.render("businessBudget.ejs");
});
// app.post("/homebudget", function(req, res){
// 	res.attachment("home.ejs");
// 	var newPersonalBudget = {
// 		name:req.body.FirstName,
// 		amount:req.body.Amount,
// 		category:req.body.Category
// 	} 
// 	personalBudget.create(newPersonalBudget, function(err, budget){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(budget);
// 			console.log("added to personal_budget");
// 		}
		
// 		res.redirect("/homebudget");
// 	});
// });

 
app.get("/bargraph", function(req, res){
	homeBudget.find({"date" : { "$gte" : new Date("2018-10-10T00:00:00Z"), "$lt" : new Date("2018-10-20T00:00:00Z") }}, function(err, janBudget){
=======
   homeBudget.find({}, function(err, theBudget){
		if(err){
			console.log("Database error");
			console.log(err);
		}//end if
		else{
			res.render("homeBudget.ejs", {budgets:theBudget});
		}//end else
	})//end function
});

app.get("/businessbudget", function(req, res){
	businessBudget.find({}, function(err, theBudget){
		if(err){
			console.log("Database error");
			console.log(err);
		}//end if
		else{
			res.render("businessBudget.ejs", {budgets:theBudget});
		}//end else
	})//end function
});
 
app.get("/bargraphHome", function(req, res){
	homeBudget.find({}, function(err, monthlyBudget){
>>>>>>> Final Commit: v1.0
		if(err){
			console.log("Database error");
			console.log(err);
		} else {
<<<<<<< HEAD
			console.log(janBudget);
			res.render("./Charts/chartpage_test.ejs", 
			{
				budgets: [
					janBudget,
					janBudget,
					janBudget,
					janBudget,
					janBudget,
					janBudget,
					janBudget,
					janBudget,
					janBudget,
					janBudget,
					janBudget,
					janBudget
					]
=======
			console.log(monthlyBudget);
			res.render("./barGraph_Monthly_Report.ejs", 
			{
				budgets:monthlyBudget
>>>>>>> Final Commit: v1.0
				
			});
		}
	})
});

<<<<<<< HEAD
=======
app.get("/bargraphBusiness", function(req, res){
	 businessBudget.find({}, function(err, monthlyBudget){
		if(err){
			console.log("Database error");
			console.log(err);
		} else {
			console.log(monthlyBudget);
			res.render("./barGraph_Monthly_Report.ejs", 
			{
				budgets:monthlyBudget
			});
		}
	})
});

>>>>>>> Final Commit: v1.0
app.get("/piechartHome", function(req, res){
	
	homeBudget.find({}, function(err, theBudget){
		if(err){
			console.log("Database error");
			console.log(err);
		}//end if
		else{
<<<<<<< HEAD
			res.render("./Charts/home_pie_10.ejs", {budgets:theBudget});
=======
			res.render("./home_pie_10.ejs", {budgets:theBudget});
>>>>>>> Final Commit: v1.0
		}//end else
	})//end function
});

app.get("/piechartBusiness", function(req, res){
	businessBudget.find({}, function(err, theBudget){
		if(err){
			console.log("Database error");
			console.log(err);
		}//end if
		else{
<<<<<<< HEAD
			res.render("./Charts/business_pie_11.ejs", {budgets:theBudget});
=======
			res.render("./business_pie_11.ejs", {budgets:theBudget});
>>>>>>> Final Commit: v1.0
		}//end else
	})//end function
});


app.post("/addhomebudget", function(req, res){
<<<<<<< HEAD
	var isIncome;
	var whichCategory
=======
	var thisDate = new Date();
	var isIncome;
	var whichCategory
	thisDate.setDate(req.body.Day);
	thisDate.setMonth((req.body.Month)- 1);
	thisDate.setFullYear(2018);
>>>>>>> Final Commit: v1.0
	if(req.body.IncExp == 1){
			isIncome="Income"
			whichCategory=req.body.catInc;
		} else {
			isIncome="Expense"
			whichCategory=req.body.catExp;
		}
	var newHomeBudget = {
		type:isIncome,
		name:req.body.FirstName,
		amount:req.body.Amount,
		category:whichCategory,
<<<<<<< HEAD
		description:req.body.desTxt
=======
		description:req.body.desTxt,
		date: thisDate
>>>>>>> Final Commit: v1.0
	}
	
	homeBudget.create(newHomeBudget, function(err, budget){
		if(err){
			console.log(err);
		} else {
			console.log(budget);
			console.log("added to personal_budget");
		}
		
<<<<<<< HEAD
		res.redirect("/");
=======
		res.redirect("/homeBudget");
>>>>>>> Final Commit: v1.0
	});
})

app.post("/addbusinessbudget", function(req, res){
	var isIncome;
	var whichCategory
	if(req.body.IncExp == 1){
			isIncome="Income"
			whichCategory=req.body.catInc;
		} else {
			isIncome="Expense"
			whichCategory=req.body.catExp;
		}
	var newBusinessBudget = {
		type:isIncome,
		name:req.body.FirstName,
		amount:req.body.Amount,
		category:whichCategory,
		description:req.body.desTxt
	}
	
	businessBudget.create(newBusinessBudget, function(err, budget){
		if(err){
			console.log(err);
		} else {
			console.log(budget);
			console.log("added to business_budget");
		}
		
		res.redirect("/");
	});
})


<<<<<<< HEAD
// app.get("/businessbudget", function(req, res){
//     res.render("BusinessBudgetPg.ejs");
// });


// app.get("/budget", function(req, res){
//     personalBudget.find({}, function(err, thisBudget){
//         if(err){
//             console.log("Database error");
//             console.log(err);
//         } else {
//             res.render("budget.ejs", {budgets:thisBudget})
//             //Serves up budget.ejs and collects user input
//         }
//     });
    
// 	//This is where the database information will be served up
// 	//Into graphs
// });

// app.post("/addbudget", function(req, res){
// 	var newBudget = {
// 		name:req.body.name,
// 		amount:req.body.amount,
// 		category:req.body.category
// 	} 
// 	//Constructs a JS object based on user input from
// 	if(req.body.isPersonal == "1") {
// 		personalBudget.create(newBudget, function(err, budget){
// 		if(err){
// 			console.log(err);
// 			//Handles any possible errors
// 		} else {
// 			console.log(budget);
// 			console.log("personal_budget");
// 			//Logs new database entry in terminal for housekeeping
// 		}
		
//         res.redirect("/budget");
//         //Re-directs to budget page with the new database entry
// 	});
		
// 	} else {
		
// 		businessBudget.create(newBudget, function(err, budget){
// 		if(err){
// 			console.log(err);
// 			//Handles any possible errors
// 		} else {
// 			console.log(budget);
// 			console.log("business_budget");
// 			//Logs new databse entry in terminal for housekeeping
// 		}
		
//         res.redirect("/budget");
//         //Re-directs to budget page with the new database entry
// 	});
// 	}
	
// });
=======
app.post("/deletehome/:id", function(req, res){
	homeBudget.findByIdAndRemove(req.params.id, function(err) {
		if(err) {
			console.log(err);
		} 
		else {
			res.redirect("/homebudget");
		}
	})
	console.log("here");
});

app.post("/deletebusiness/:id", function(req, res){
	businessBudget.findByIdAndRemove(req.params.id, function(err) {
		if(err) {
			console.log(err);
		} 
		else {
			res.redirect("/businessbudget");
		}
	})
	console.log("here");
});
>>>>>>> Final Commit: v1.0

app.get("*", function(req, res){
    res.redirect("/");
    //Catches any unknown gibberish and re-directs back to "/"
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening...");
<<<<<<< HEAD
    //Vooodoo magic that needs to be reviewed; can't use port 80 without
    //sudo, but mongoose gets pissy about sudo so stuck back with port
=======
>>>>>>> Final Commit: v1.0
    //8080 for now
    
});