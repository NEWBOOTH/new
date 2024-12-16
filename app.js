const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path'); // Import the path module
const { title } = require('process');
const { release } = require('os');
const { log } = require('console');
app.use(express.static('public'))
app.set('view engine', 'ejs');


const itemsPerPage = 800; // Number of items per page

app.get('/', async function (req, res)  {
  const url = 'http://localhost:5000/multi';
  const response = await fetch(url ,{
    method: 'GET',
  }); 
  const combinedData = await response.json();
  const currentPage = parseInt(req.query.page) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const searchTerm = req.query.search || ''; // Get search term from query parameter (or empty string if none)
  const filteredData = combinedData.filter(item =>
    searchTerm.toLowerCase() === '' ||
    item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.overview?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.genres?.some(genre => genre.name?.toLowerCase().includes(searchTerm.toLowerCase())) )
  );
  

  const paginatedData = filteredData.slice(startIndex, endIndex);
 // const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  res.render('home', { 
    combinedData: paginatedData, 
    currentPage: currentPage, 
    searchTerm: searchTerm // Pass the search term to the template
  });
});



app.get('/download/:id', function(req, res) {
  const movieId = parseInt(req.params.id);
  const movie = movieDatas.find(movie => movie.id === movieId);

  if (movie) {
    // Ensure the file path is correct
    const filePath = path.join(__dirname, 'uploads/movies', movie.file);
    res.download(filePath);
  } else {
    res.status(404).send('Movie not found.');
  }
});

// ... (other routes for series downloads, etc.)
app.get('/movie', async function(req,res){
  const searchTerm = req.query.search || '';
  
  
  const url = 'http://localhost:5000/movie';
  const response = await fetch(url, {
    method: 'GET',
  });
  const movieDatas = await response.json()
  res.render('movie',  {movieDatas:movieDatas, searchTerm:searchTerm})
  const filteredData = movieDatas.filter(item => 
    searchTerm.toLowerCase() === '' || // If no search, show all data
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
})
async function getMovieGenres(genreIds, apiKey) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`);
    if (!response.ok) {
      throw new Error(`TMDB API request failed with status ${response.status}`);
    }
    const data = await response.json();
    const allGenres = data.genres;
    return genreIds.map(id => allGenres.find(genre => genre.id === id)?.name || 'Unknown');
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
}


app.get('/movie/:movieId', async function(req, res) {
  const apiKey = '330ae4bafef6ccb937dfb210a75f0fd8';
  const movieId = parseInt(req.params.movieId);
  const searchTerm = req.query.search || '';
  const url = 'http://localhost:5000/movie';
  const response = await fetch(url, {
    method: 'GET', 
  });
  const movieDatas = await response.json();
  const movie = movieDatas.find(movie => movieId === movie.id);
 // const genreNames = await getMovieGenres(movie.genre_ids, apiKey);
  if (movie) {
    res.render('downloadPage', {movie:movie
    }); // Use movieDetails instead of downloadPage
  } else {
    res.status(404).send('Movie not found.');
  }
});




app.get('/tor/:torId', async (req, res) => {
  const movieId = req.params.id;
  try {
    const movie = await getMovieDetails(movieId); // Function to fetch movie details
    res.render('resTor', { movie });
  } catch (error) {
    console.error('Error fetching movie details:', error);
    res.status(500).send('Error fetching movie details');
  }
});


// ... (other code)

app.get('/tv', async function(req, res){
  const url = 'http://localhost:5000/series'
  const response = await fetch(url, {
    method: 'GET',
  });
  const series = await response.json()
  res.render('tv', {series: series});
});

app.get('/series/:seriesId', async function(req, res) {
  const url = 'http://localhost:5000/series'
  const response = await fetch(url, {
    method: 'GET',
  })
  const series = await response.json()

  const Rurl = 'http://localhost:5000/recomended';
  const Rresponse = await fetch(Rurl, {
    method: 'GET',
  });
  const recommendedMovies = await Rresponse.json();

  const seriesId  = parseInt(req.params.seriesId);
  const seriesData = series.find(s=> s.id === seriesId)
    res.render('downloadRes', {series:seriesData, recommendedMovies:recommendedMovies})

   
  
});
app.get('/res/series/:seriesId/:season/:episode',  async (req, res) => {
  const seriesId = parseInt(req.params.seriesId);
  const seasonNumber = parseInt(req.params.season);
  const episodeNumber = parseInt(req.params.episode);
  const url = 'http:/localhost:5000/series'
  const seriesResponse = await fetch(url, {
    method: 'GET',
  })
  const series = await seriesResponse.json();
  const seriesData = series.find(s => s.id === seriesId);
   
  const Rurl = 'http://localhost:5000/recomended';
  const Rresponse = await fetch(Rurl, {
    method: 'GET',
  });
  const recommendedMovies = await Rresponse.json();


  if (seriesData) {
      const season = seriesData.seasons.find(s => s.season === seasonNumber);
      if (season) {
          const episode = season.episodes.find(e => e.episode === episodeNumber);
          if (episode) {
              res.render('restv', {season:season, episode: episode, series: seriesData,recommendedMovies:recommendedMovies }); 
          } else {
              res.status(404).send('Episode not found.');
          }
      } else {
          res.status(404).send('Season not found.');
      }
  } else {
      res.status(404).send('Series not found.');
  }
});

// Download Series Route
app.get('/download/series/:seriesId/:season/:episode', async function(req, res){
  const url = 'http:/localhost:5000/series'
  const response = await fetch(url, {
    method: 'GET',
  })
  const series = await response.json();
  const seriesId = parseInt(req.params.seriesId);
  const season = parseInt(req.params.season);
  const episode = parseInt(req.params.episode);

  const seriesData = series.find(s => s.id === seriesId);

  if (seriesData) {
    const seasonData = seriesData.seasons.find(s => s.season === season);
    if (seasonData) {
      const episodeData = seasonData.episodes.find(e => e.episode === episode);
      if (episodeData) {
        const filePath = path.join(__dirname, 'uploads/series', episodeData.file);
        res.download(filePath);
      } else {
        res.status(404).send('Episode not found.');
      }
    } else {
      res.status(404).send('Season not found.');
    }
  } else {
    res.status(404).send('Series not found.');
  }
});

// ... (other code)

app.get('/k-series', function(req,res){
  res.render('k-series')
});

app.get('/k-movie', async function(req,res){
  const url = 'http://localhost:5000/koreaMovies';
  const response = await fetch(url, {
    method: 'GET',
  });
  const koreaMovie = await response.json();
  res.render('k-movie', {koreaMovie:koreaMovie})
})



app.listen(process.env.PORT || 3000, function(){
  console.log('port running on port 3000');
});
