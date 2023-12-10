import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = (props) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`http://localhost:3001/getImage/${props.id}`);
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [props.id]);

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <img src={imageSrc} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          £{props.new_price}
        </div>
        <div className="item-price-old">
          £{props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
