import React from 'react';

const Footer = () => {
  return (
    <div>
      <section className='footer'>
        <div className='box-container'>
          <div className='box'>
            <h3> Find us here </h3>
            <p>You can find us on these networks</p>
            <div className='share'>
              <a href='#' rel='noopener noreferrer'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='#' rel='noopener noreferrer'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='#' rel='noopener noreferrer'>
                <i className='fab fa-instagram'></i>
              </a>
              <a href='#' rel='noopener noreferrer'>
                <i className='fab fa-linkedin'></i>
              </a>
            </div>
          </div>
          <div className='box'>
            <h3>contact us</h3>
            <p>+381 60 123 376</p>
            <a href='#' rel='noreferrer' target='_blank' className='link'>
              venues@mail.com
            </a>
          </div>
          <div className='box'>
            <h3>Location</h3>
            <p>
              BLVKA 201 <br />
              Belgrade <br />
              Serbia
            </p>
          </div>
        </div>
        <div className='credit'>
          created by <span>ANS</span> | all rights reserved!{' '}
        </div>
      </section>
    </div>
  );
};

export default Footer;