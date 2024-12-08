app.get('/discover', async function(req,res){
  const url = 'http://localhost:5000/discover';
  const response = await fetch(url, {
    method: 'GET',
  });
  const discoverData = await response.json();
  
  const getGenreNames = (genreIds) => {
    return genreIds.map(id => genreMap[id]).filter(name => name)
  }
  const genUrl = 'http://localhost:5000/genre';
  const genResponse  = await fetch(genUrl, {
    method: 'GET',
  });
  const genreData = await genResponse.json();
  const genreMap = {};
  genreData.forEach(genre => genreMap[genre.id] = genre.name);
 const discover = discoverData.map(movie => ({...movie, genres: getGenreNames(movie.genre_ids)
 }));
  
  res.render('discover', {discover:discover})
})