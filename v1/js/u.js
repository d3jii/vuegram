function sortBy(posts, arg){
	if(arg == "comments"){
		if(vugramData.toggleStatusLikes == true){
			posts.sort(function(a, b){
			 return a.comments.count - b.comments.count;
			});
			vugramData.toggleStatusLikes = false;
		}
		
	}

	if(arg == "likes"){
		posts.sort(function(a, b){
			 return a.likes.count - b.likes.count;
		});
	}

	return posts;
}

vuegramMethods.sortBy = sortBy;
vugramData.toggleStatusComments = true;
vugramData.toggleStatusLikes = true;

