export const addMovieToWatchList = async (movieId: number) => {
  const url = 'https://api.themoviedb.org/3/account/21516471/watchlist';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWJkZDA2NjYxN2QwMmNhZGU4MzRiMTUxOTI2YmM0ZiIsIm5iZiI6MTcyNjE4NjU2Ni4yODI2MTksInN1YiI6IjY2ZTM4MzQ3YzgxYjI0YjNmZTIzZDE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wYbGOwA6xuNEmJi-cg0Klxv_29P1XcHpf9qeSeSvcaI'
    },
    body: JSON.stringify({media_type: 'movie', media_id: movieId, watchlist: true})
  };

  const res = await fetch(url, options);
  if (!res.ok)
  {
    throw new Error('failed to fetch movies')

  }
  const json = await res.json();
  return json
}