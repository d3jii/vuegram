function get_ajax_url(userid){
	var base = "https://query.yahooapis.com/v1/public/yql?q="
	var yql = "select%20*%20from%20json%20where%20url%3D%22https%3A%2F%2Fapi.instagram.com%2Fv1%2Fusers%2F"+userid+"%2Fmedia%2Frecent%2F%3Fclient_id%3D93f523ce97124222b3776dedc3007aeb%22&format=json&diagnostics=true&callback=";
	return base+yql;	
}