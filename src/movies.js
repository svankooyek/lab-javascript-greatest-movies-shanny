// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(directioners => directioners.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(moviesFiltered => 
        moviesFiltered.director === "Steven Spielberg" && moviesFiltered.genre.includes("Drama")).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) return 0;

    const totalScores = moviesArray.reduce(function(sum, scores) {
        return sum + (scores.score || 0)
    },0)
    const average = totalScores / moviesArray.length
    return Math.round(average * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const totalDramas = moviesArray.filter(dramas => dramas.genre.includes("Drama"))

    if(totalDramas.length === 0) return 0;
    
    const totalScoresDrama = totalDramas.reduce(function(sum, scoresdrama) {
        return sum + scoresdrama.score
    },0)
    const averagedrama = totalScoresDrama / totalDramas.length
    return Math.round(averagedrama * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const arrayOrder = [...moviesArray]
    arrayOrder.sort((a, b) => {
        if(a.year !== b.year) {
          return a.year - b.year
        }
        return a.title.localeCompare(b.title)
    })
    return arrayOrder
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const arrayTop = [...moviesArray]
    arrayTop.sort((a, b) => a.title.localeCompare(b.title))
    const titles = arrayTop.map(movie => movie.title)

    return titles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
    return moviesArray.map((movie) => {
      let hours = 0,
        minutes = 0;
      const parts = movie.duration.split(" ");
  
      if (parts[0].includes("h")) hours = +parts[0].replace("h", "");
  
      if (parts.length > 1 && parts[1].includes("min"))
        minutes = +parts[1].replace("min", "");
  
      return { ...movie, duration: hours * 60 + minutes };
    });
  }
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;
  
    const groupedByYear = moviesArray.reduce((accumulator, movie) => {
      if (!accumulator[movie.year]) {
        accumulator[movie.year] = [];
      }
  
      accumulator[movie.year].push(movie);
      return accumulator;
    }, {});
  
    const averageScores = Object.entries(groupedByYear).map(([year, values]) => {
      const avgScore =
        values.reduce((sumScore, current) => sumScore + current.score, 0) /
        values.length;
      return { year: Number(year), avgScore };
    });
  
    const maxAverageScore = averageScores.reduce((maxScore, currentScore) =>
      currentScore.avgScore > maxScore.avgScore ? currentScore : maxScore
    );
  
    return `The best year was ${maxAverageScore.year} with an average score of ${maxAverageScore.avgScore}`;
  }
