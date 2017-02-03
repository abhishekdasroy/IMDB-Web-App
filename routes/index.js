
var moviesJSON = require('../movies.json');

//home

exports.home = function(req,res){

	var movies = moviesJSON.movies;

	

res.render("home",{

	title : "IMDB",
	movies : movies,



});//End of render



};//End of get

// movie_single

exports.movie_single =function(req,res){
 
 var movie_number = req.params.movie_number;

 var movies = moviesJSON.movies;

if(movie_number >= 1 && movie_number <= 6 )
{
 var movie = movies[movie_number-1];

 var title = movie.title;

 var main_characters = movie.main_characters;

res.render("movie_single",{
		movies : movies,
		title:title,
		movie:movie,
		main_characters:main_characters

});//End of render

}
else
{
	res.render('notFound',{
		movies:movies,
		title:"This is not the page you are looking for"
	});
}

};//End of get

//notFound
exports.notFound =function(req,res){

var movies = moviesJSON.movies;

res.render('notFound',{
		movies:movies,
		title:"This is not the page you are looking for"
	});



};//End of get