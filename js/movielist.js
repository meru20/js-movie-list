
let movieList = [
    {id: 1, title:'Inception', year: 2010, genre:'Adventure', description:'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', imdbRating:8.8,
  },
    {id: 2, title:'Martin', year: 1992, genre:'Comedy', description:'Sassy sitcom centering on radio and television personality Martin Payne. Series focuses on his romantic relationship with girlfriend Gina, her best friend Pam and escapades with best friends Tommy and Cole.', imdbRating:7.4,
  },
    {id: 3, title:'Fresh prince of bel-Air', year: 1990, genre:'Comedy', description:'A streetwise, poor young man from Philadelphia is sent by his mother to live with his aunt, uncle and cousins in their Bel-Air mansion.', imdbRating:8.8,
  },
    {id: 4, title:'Friends', year: 1994, genre:'Comedy', description:'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.', imdbRating:8.9,
  },


  ];

  const alertMovieDetails = (movieTitle) => {
      let foundMovie = movieList.find((movie ) => {
          return movie.title === movieTitle;

      });
      if (foundMovie){
        alert (`${foundMovie.title}: ${foundMovie.descrption}`);
      }
      else {
          alert ('Movie was not found :(');
      }
  }
  alertMovieDetails( 'tell me');

  // add new movie object to an array
  const addNewMovie = (movieId, movieTitle,movieYear, movieGenre, movieDescription, movieImdbRating) => {
      let newMovie ={
          id: movieId,
          title: movieTitle,
          year: movieYear,
          genre: movieGenre,
          description: movieDescription,
          imdbRating: movieImdbRating
      };

      console.log(newMovie);
      movieList.push(newMovie);
      console.log('added movie', movieList);

  };
  addNewMovie(6,'Elf',2002 , 'comedy', 'haha funny',8.5);

  // delete a movie from array

   const removeMovie = (movieId ) => {
movieList = movieList.filter( movie =>  movie.id !== movieId);
console.log(movieList);
   };

   removeMovie(2);

