var url = get_ajax_url(496970788);
function init_get_callback(data){ 
	var res = data.query.results.json.data;
	new Vue({
	  el: '#vuegramapp',
	  data: {
	    posts: res
	  }
	});
}
$.get(url,init_get_callback);