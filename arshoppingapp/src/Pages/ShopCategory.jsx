import React, { useEffect, useState } from 'react'
import './CSS/ShopCategory.css'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import axios from 'axios'

const ShopCategory = (props) => {
  const [shopcategory, setshopcategory] = useState([]);

  useEffect(()=>{
    const fetchproducts = async () => {
      try {
        const res = await axios(`http://localhost:3001/${props.category}`);
          setshopcategory(res.data);
          //console.log(shopcategory[0].image);
        }catch(err){
          console.log(err)
      }
    }
    fetchproducts()
    //console.log(shopcategory);
  })
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {shopcategory.map((item,i)=>(
            <div>
              <Item key={i} id={item.product_id} name={item.name} old_price={item.old_price} new_price={item.new_price} description={item.description} image={item.image}/>
            </div>
        ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
