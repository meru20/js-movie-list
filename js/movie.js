/**functions for movie list***/

let movieList = [
  {id: 1, title:'Inception', year: 2010, genre:'Adventure', descrpion:'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', imdbRating:8.8,
},
  {id: 2, title:'Martin', year: 1992, genre:'Comedy', descrpion:'Sassy sitcom centering on radio and television personality Martin Payne. Series focuses on his romantic relationship with girlfriend Gina, her best friend Pam and escapades with best friends Tommy and Cole.', imdbRating:7.4,
},
  {id: 3, title:'Fresh prince of bel-Air', year: 1990, genre:'Comedy', descrpion:'A streetwise, poor young man from Philadelphia is sent by his mother to live with his aunt, uncle and cousins in their Bel-Air mansion.', imdbRating:8.8,
},
  {id: 4, title:'Friends', year: 1994, genre:'Comedy', descrpion:'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.', imdbRating:8.9,
},


];
/*******2 a -Alert with title and description */
const detail = movieId => {

let movieTitle =  movieList.find(movie => movie. id === movieId).title
let movieDescription =  movieList.find(movie => movie. id === movieId).descrpion;
  alert('Movie Title :' + movieTitle +
  'Movie Description :'+ movieDescription);
 }
  detail(1);

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

const removeMovie = movieName => {
  movieList = movieList.filter((movie) => {
    return movie.title !== movieName
  })
  console.log('You have deleted one movie', movieList);


  }
removeMovie('Inception');