import { apiToken, host, language } from './confing';

export async function getGenres() {
  const res = await fetch(host + `/genre/movie/list?language=${language}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: apiToken
    }
  });

  return await res.json();
}

export async function getMovies(filter) {
  const { genres, year, rating_from, rating_to, sort_by, page } = filter;
  const res = await fetch(
    host +
      `/discover/movie?language=${language}&with_genres=${genres}&primary_release_year=${year}&vote_average.gte=${rating_from}&vote_average.lte=${rating_to}&sort_by=${sort_by}&page=${page}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiToken
      }
    }
  );

  return await res.json();
}

export async function getMovie(id) {
  const res = await fetch(host + `/movie/${id}?language=${language}&append_to_response=videos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: apiToken
    }
  });

  return await res.json();
}
