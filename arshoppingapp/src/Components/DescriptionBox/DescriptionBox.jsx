import React, { useContext, useEffect, useState } from 'react'
import './DescriptionBox.css'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const DescriptionBox = () => {
  const {productId} = useParams();
    const [productinfo, setproductinfo] = useState(1); // sets it to 1 instead of undefined
    // const {product} = props; (not needed)
    const {addToCart} = useContext(ShopContext);
    const [image, setimage] = useState(null);

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`http://localhost:3001/product/${productId}`);
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const productData = await response.json(); // fetching the product information
  
          if (productData && productData.product_id) {
            setproductinfo(productData);
  
            // Convert the image array to a Blob
            const response2 = await fetch(`http://localhost:3001/getImage/${productData.product_id}`);
            const blob = await response2.blob();
            const imageUrl = URL.createObjectURL(blob);
            setimage(imageUrl);
          } else {
            console.error('Invalid product data:', productData);
            setproductinfo(null);
            setimage(null);
          }
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };
  
      // Call the function to fetch product data
      fetchProduct();
    }, [productId]);
  
    //console.log(productinfo?.image?.data);
    //console.log(image);
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
      </div>
      <div className="descriptionbox-description">
        <p>{productinfo.description}</p>
      </div>
    </div>
  )
}

export default DescriptionBox
