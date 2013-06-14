"use strict";

angularMovieApp.filter('stars', function () {

    
     return function(startCount) {
    	var ret='';
		for(var i=0; i <startCount;i++){
			ret += "\u2605";
		}
        return  ret;

    };
});


angularMovieApp.filter('poster', function () {
    return function(posterUrl) {
        if(!posterUrl){
            return "img/no-poster.jpg";
        } else {
            return posterUrl;
        }
    };
});
