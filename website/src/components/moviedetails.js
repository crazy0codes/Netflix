import React from 'react';

function MovieCards() {
  return (
    <div className='movie-card-container'>
      <div className='movie-card'>
        <img
          className='movie-img-card'
          src='https://staticg.sportskeeda.com/editor/2023/08/63291-16913969569317-1920.jpg'
          alt='movie-title'
        />
      </div>
    </div>
  )
}

const MovieDetails = () => {
  return (
    <>
      <div className='movie-container'>
        <div className="details-container">
          <img
            src="https://occ-0-6127-2186.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABeNw7JVmc_we3KqCvaQVHyp8cu3gu5iHLjHzjZpG5CnQOdumax5NpXqet7ik8EWaWHPH_tOB3bx8l57nVsVuOwxMRQoP1hJ6NRWZmNekUFfNO2m3Ku8Al4epm8E6lBwBow4TzNR35dnR1mMRwvz3wqunh5IjS1rjucR5PBjIDFU01CLJ6h5dKg.png?r=024"
            alt="movie-title"
            id="movie-title"
          />
          <p className="movieName">Extraction 2</p>
          <p style={{ width: '400px', fontWeight: 500, marginBottom: '30px' }}>
            Back from the brink of death, highly skilled commando Tyler Rake takes on another dangerous mission: saving the imprisoned family of a ruthless gangster.
          </p>
          <div>
            <button className='movie-btn'>Play</button>
            <button className='movie-btn'>info</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;