function viewPostDetailsFunc(post){
	//
}

function updateLikersFunc(like,post){
 var un = like.username;
 var profile_picture = like.profile_picture;

 if(!this.likers[un]){
 	this.likers[un] = {count:0,images:[],profile_picture:profile_picture};
 }

 this.likers[un].count++;
 this.likers[un].images.push(post.images);
 //console.log(this.likers);

}

function updateCommentersFunc(comment,post){
	var un = comment.from.username;
	var profile_picture = comment.from.profile_picture;
	var text = comment.text;

	if(!this.commenters[un]){
		//images here is an array of image object + comment text
		this.commenters[un] = {count:0,images:[],profile_picture:profile_picture};
	}

	post.images.text = text;
	this.commenters[un].count++;
	this.commenters[un].images.push(post.images);
	
}

function updateTaggedUsersFunc(taggeduser,post){
	var un = taggeduser.user.username;
	var profile_picture = taggeduser.user.profile_picture;
	if(!this.taggedUsers[un]){
		this.taggedUsers[un] = {count:0,images:[]};
	}
	this.taggedUsers[un].count++;
	this.taggedUsers[un].images.push(post.images);
}

function updatePostTagsFunc(tag,post){
	var un = tag; 
	if(!this.tags[un]){
		this.tags[un] = {count:0,images:[]};
	}
	this.tags[un].count++;
	this.tags[un].images.push(post.images);
	console.log(this.tags);
}

vuegramMethods.viewPostDetails = viewPostDetailsFunc;
vuegramMethods.updateLikers = updateLikersFunc;
vuegramMethods.updateCommenters = updateCommentersFunc;
vuegramMethods.updateTaggedUsers = updateTaggedUsersFunc;
vuegramMethods.updatePostTags = updatePostTagsFunc;

