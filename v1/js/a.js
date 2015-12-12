function viewPostDetailsFunc(post){
	//
}

function updateLikersFunc(like,post){
 var un = like.username;

 if(!this.likers[un]){
 	this.likers[un] = {count:0,images:[]};
 }

 this.likers[un].count++;
 this.likers[un].images.push(post.images);
 //console.log(this.likers);

}

function updateCommentersFunc(comment,post){
	 
}

vuegramMethods.viewPostDetails = viewPostDetailsFunc;
vuegramMethods.updateLikers = updateLikersFunc;
vuegramMethods.updateCommenters = updateCommentersFunc;

