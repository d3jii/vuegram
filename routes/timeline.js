function timeline() {

	ig.use({client_secret: '93f523ce97124222b3776dedc3007aeb' });

	ig.user_self_feed([options,] function(err, medias, pagination, remaining, limit) {});
}