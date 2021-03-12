/**functions for movie list***/

let movieList = [
    {
      id : 1,
      title:'Interstellar',
      year:2014,
      genre:'Science fiction',
      description:'description',
      imdbRating:8.6
    },
    {
      id: 2,
      title:'Martian',
      year:2015,
      genre:'Adventure  ',
      description:'description',
      imdbRating:8.0
    },
    {
      id: 3,
      title:'Avatar',
      year:2009,
      genre:'Action',
      description:'description',
      imdbRating:7.8
    },
    {
    id: 4,
    title:'Inception',
    year:2010,
    genre:'Action',
    description:'description',
    imdbRating:8.8
    },
    {
    id: 5,
    title:'The Avengers',
    year:2012,
    genre:'Action',
    description:'description',
    imdbRating:8.0
    },
  ]
/*******2 a -Alert with title and description */

const detailMovie = movieTitle => {

let findMovie =  movieList.find(movie => movie.title === movieTitle);
if(findMovie) {
  alert(`${findMovie.title}:  ${findMovie.description}`);
}
  else {
    console.log ('Movie not found :(')
 }
}
  //detailMovie('The Avengers');

/*************3. Create new movie object and push it */



const addMovie = (id, title,year,genre,description,imdbRating) => {
  let newMovie ={
    id: id,
    title: title,
    year: year,
    genre: genre,
    description: description,
    imdbRating: imdbRating,

  }

  movieList.push(newMovie);
  console.log('You have added one movie', movieList);
}
addMovie(5,'The Intouchables',2011 , 'Biography', 'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.',8.5) ;



/*************4. remove an object based on its attribute */

const removeMovie = movieId => {
  movieList = movieList.filter(movie => movie.id !== movieId)
  console.log('You have deleted one movie', movieList);


  }
removeMovie(4);

