import React from 'react';
import { image_host } from '../../../assets/functions/apiFunctions/confing';
import './MoreMovieInfo.css';

const Trailer = ({ data }) => {
  return (
    <div className="more_movie_info">
      <h3>Trailer</h3>
      <iframe
        src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
        title={data.videos.results[0].name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <hr />
      <h3>Description</h3>
      <p>{data.overview}</p>
      <hr />
      <h3>Production</h3>
      <div>
        {data.production_companies.map((company) => (
          <div>
            <img src={image_host + company.logo_path} />
            <p>{company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trailer;
