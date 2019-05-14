import React from 'react'
import './store.scss';

const Store = () => (
  <main>
    <div className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img src="img/art.jpg" alt="Gallery 1" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img src="img/art.jpg" alt="Gallery 2" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img src="img/art.jpg" alt="Gallery 3" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img src="img/art.jpg" alt="Gallery 4" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img src="img/art.jpg" alt="Gallery 5" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img src="img/art.jpg" alt="Gallery 6" className="gallery__img" />
      </figure>
    </div>
  </main>
)

export default Store;