import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';
import PropTypes from  'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import play from '../assets/static/play-icon.png';
import plus from '../assets/static/plus-icon.png';
import remove from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration } = props;
  const handleSetFavorite = () => {
    props.setFavorite({ id, cover, title, year, contentRating, duration})
  }
  const handleDeleteFavrite = (itemId) => {
    props.deleteFavorite(itemId)
  }
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title}  />
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src={play} alt="Play Icon" />
          {!props.myList &&
            <img
              className="carousel-item__details--img"
              src={plus}
              alt="Plus Icon"
              onClick={handleSetFavorite}
            />
          }
          {props.myList &&
            <img
              src={remove}
              className="carousel-item__details--img"
              alt="Remove Icon"
              onClick={()=> handleDeleteFavrite(id) }
            />
          }
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  )
}

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);