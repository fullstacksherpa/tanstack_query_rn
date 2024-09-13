

export const fetchTopRatedMovies = async ({pageParam}) => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageParam}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWJkZDA2NjYxN2QwMmNhZGU4MzRiMTUxOTI2YmM0ZiIsIm5iZiI6MTcyNjE4NjU2Ni4yODI2MTksInN1YiI6IjY2ZTM4MzQ3YzgxYjI0YjNmZTIzZDE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wYbGOwA6xuNEmJi-cg0Klxv_29P1XcHpf9qeSeSvcaI'
    }
  };

  try
  {
    const res = await fetch(url, options)
    const json = await res.json()
    return json.results
  } catch (e)
  {
    console.log(`error:` + e)
  }
}

export const fetchMovie = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWJkZDA2NjYxN2QwMmNhZGU4MzRiMTUxOTI2YmM0ZiIsIm5iZiI6MTcyNjE4NjU2Ni4yODI2MTksInN1YiI6IjY2ZTM4MzQ3YzgxYjI0YjNmZTIzZDE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wYbGOwA6xuNEmJi-cg0Klxv_29P1XcHpf9qeSeSvcaI'
    }
  };

  try
  {
    const res = await fetch(url, options)
    const json = await res.json()
    return json
  } catch (e)
  {
    console.log(`error:` + e)
  }
}
