import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/product/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);
  console.log(product)

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
    </div>
  );
};

export default Product;
