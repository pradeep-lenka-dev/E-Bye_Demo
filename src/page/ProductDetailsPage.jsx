import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { fetchProductDetails } from '../service/ProductService';

import {fetchProductDetails} from "../service/ProductService"
import { Container, Grid, SimpleGrid, Skeleton, rem ,Button } from '@mantine/core';
import { IconCurrencyRupee } from '@tabler/icons-react';
import { IconCarambola } from '@tabler/icons-react';

import "../styles/ProductDetails.css"

const PRIMARY_COL_HEIGHT = rem(300);


const ProductDetailsPage = () => {
  const { id } = useParams();
  const [productDetail, setData] = useState({
    image: '',
    name: '',
    title: '',
    description: '',
    price: '',
    rating: {
      rate: '',
      count: ''
    }
  });

  useEffect(()=>{
    // const { id } = useParams();
    const fetchProductDetail = async ()=>{
      try {
        const result = await fetchProductDetails(id)
        console.log("🚀 ~ fetchProductDetails ~ result:", result.rating.rate)
        setData(result)
      } catch (error) {
        console.log("🚀 ~ getProductData ~ error:", error)
        
      }
    }
    fetchProductDetail()
  },[])

  // Fetch product details based on id
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    // <div style={{ textAlign: 'center' }}>
    //   <h2>{productDetail.name}</h2>
    //   <img src={productDetail.image} alt={productDetail.name} style={{ maxWidth: '100%' }} />
    //   <p>{productDetail.description}</p>
    //   <p>ID: {id}</p>
    // </div>
    <div className="product-details-container">
      <div className="image-container">
        <img src={productDetail.image} alt={productDetail.name} />
        <div className="actions">
          <Button className="button" radius="xl">Add To Cart</Button>
          <Button className="button" radius="xl" variant="outline">Buy Now</Button>
        </div>
      </div>
      <div className="details-container">
        <div className='details'>

        <h2>{productDetail.title}</h2>
        <p className='rating-tag'> <span className='rating-batch'>{productDetail.rating.rate} <IconCarambola stroke={1} /></span> <span className='rating-count'>{productDetail.rating.count}Ratings</span></p>
        <h3 className='Price'><span className='price-icon'><IconCurrencyRupee stroke={2} style={{ fontSize: '40px', fontWeight: 'bold' }} /></span> <span className='price-text'>{productDetail.price}</span></h3>
        <p>{productDetail.description}</p>
        </div>
      </div>
    </div>

  );
};

export default ProductDetailsPage;
