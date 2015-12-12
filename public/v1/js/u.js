var toggleStatusComments = true;
var toggleStatusLikes = true;
var toggleVideos = true;

function sortBy(posts, arg){
	if(arg == "comments"){
		if(toggleStatusComments == true){
			posts.sort(function(a, b){
			 return b.comments.count - a.comments.count;
			});
		}
		else{
			posts.sort(function(a, b){
			 return a.comments.count - b.comments.count;
			});
		}
		toggleStatusComments = !toggleStatusComments;
		
	}

	if(arg == "likes"){
		if(toggleStatusLikes == true){
			posts.sort(function(a, b){
			 return b.likes.count - a.likes.count;
			});
		}
		else{
			posts.sort(function(a, b){
			 return a.likes.count - b.likes.count;
			});
		}
		toggleStatusLikes = !toggleStatusLikes;
		
	}
	
	return posts;
}

function showOnlyVideos(posts){

	if(toggleVideos == true){
		posts = posts.filter(function(post){
			return post.type.match(/video/);
		});
		this.posts = posts;
	}
	else{
		this.posts = data.data;
	}
	toggleVideos = !toggleVideos;
}

vuegramMethods.showOnlyVideos = showOnlyVideos;
vuegramMethods.sortBy = sortBy;
