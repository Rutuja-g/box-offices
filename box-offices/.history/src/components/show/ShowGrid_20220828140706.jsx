import React from 'react';
import ShowCard from './ShowCard';

import IMAGE_NOT_FOUND from '../../images/not-found.png'

function ShowGrid({ data }) {
  return (
    <div>
      {img src={IMAGE_NOT_FOUND} />
      data.map(({ show }) => (
        <ShowCard key={show.id} id={show.id} name={show.name} image={show.image ? show.image.medium :} />
      ))}
    </div>
  );
}

export default ShowGrid;
