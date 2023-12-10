import React, { useContext, useEffect, useState } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';
import { Link, useParams } from 'react-router-dom';

const ProductDisplay = () => {
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
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          {image && <img className='productdisplay-main-img' src={image} alt="" />} {/*checks if the image is null*/}
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{productinfo.name}</h1>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">£{productinfo.old_price}</div>
            <div className="productdisplay-right-price-new">£{productinfo.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          {productinfo.description}
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                  <div>Small</div>
                  <div>Medium</div>
                  <div>Large</div>
                  <div>XLarge</div>
                  <div>XXLarge</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(productinfo.id)}}>Add to Cart</button> <Link to={productinfo.threedimension_object}><button>View in 3D AR</button></Link> <Link to="/ar-view"><button>Virtual Try On</button></Link>
      </div>
    </div>
  )
}

export default ProductDisplay
