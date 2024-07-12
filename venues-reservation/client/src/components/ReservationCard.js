import React, { useEffect, useState } from 'react';
import { format, differenceInBusinessDays } from 'date-fns';
import axios from 'axios';

const ReservationCard = ({ reservation, flag, setFlag }) => {
  const [venue, setVenue] = useState(null);
  const cantCancel =
    differenceInBusinessDays(reservation.date, new Date()) < 10;

  console.log(reservation);

  useEffect(() => {
    const getVenue = async () => {
      const responseVenue = await axios.get(
        `http://localhost:8000/api/venues/${reservation.venue._id}`
      );
      setVenue(responseVenue.data);
    };

    getVenue();
  }, [reservation.venue]);

  const handleCancel = async () => {
    await axios.delete(
      `http://localhost:8000/api/reservations/${reservation._id}`
    );
    setFlag(!flag);
  };

  return (
    <div className='box'>
      <h3 className='title'>{venue?.name}</h3>
      <div className='price'>
        <span className='currency'>$</span>
        <span className='amount'>{venue?.price}</span>
      </div>
      <ul>
        <li>
          <i className='fas fa-calendar'></i>
          {format(reservation?.date, 'dd.MM.yyyy')} {reservation?.slot}
        </li>
      </ul>

      <button
        type='button'
        className='cancel-button'
        disabled={cantCancel}
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  );
};

export default ReservationCard;