var projects = require('../projects.json');
var grid = false;

/*
 * GET home page.
 */

exports.view = function(req, res){
		projects.grid = false;
  	res.render('index', projects);
};

exports.viewGrid = function(req, res){
		projects.grid = true;
		res.render('index', projects);
}