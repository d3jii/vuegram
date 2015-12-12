function routeHandler(app){
	function index_handler(req,res,next){
		res.render('index',{});
	}
	app.route('/').get(index_handler);
}
module.exports = routeHandler;