import React, { useEffect, useState } from 'react';
import { fetchData } from '../service/ProductService';
import { Card, Image, Text, Group, Badge, Center, Button } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import Rating from '../componet/common/Rating';
import { Link } from 'react-router-dom';

import '../styles/ProductCardStyle.css'


const mockdata = [
  { label: '4 passengers', icon: IconUsers },
  { label: '100 km/h in 4 seconds', icon: IconGauge },
  { label: 'Automatic gearbox', icon: IconManualGearbox },
  { label: 'Electric', icon: IconGasStation },
];

function goToDetailsPage(id){
  console.log("id",id)
}

const ProductPage = () => {
  const [productList,setData]= useState([])

  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className="icon" stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  useEffect(()=>{
    const getProductData = async ()=>{
      try {
        const result = await fetchData("/products")
        setData(result)
      } catch (error) {
        console.log("🚀 ~ getProductData ~ error:", error)
        
      }
    }
    getProductData()
  },[])



  return (
    <div className='card-container' >
      {productList.map(product =>(
      <Link key={product.id} to={`/details/${product.id}`}> 
      <Card onClick={goToDetailsPage(product.id)} className="card" withBorder radius="md">
      <div className="imageSection">
        <Image src={product.image} alt={product.title} />
      </div>
      <div className="card-body">
        <Group position="apart" mt="md">
          <Text weight={500}>{product.title}</Text>
          {/* <Badge variant="outline">25% off</Badge> */}
        </Group>
        <Text size="sm" color="dimmed" className="ellipsis-text" mt="md">
          {product.description}
        </Text>
        <div className="rating" mt="md">
          <Rating rating={4.5} numReviews={120} />
        </div>
      </div>
      <div className="actions">
        <Button className="button" radius="xl">Buy Now</Button>
        <Button className="button" radius="xl" variant="outline">Add to Cart</Button>
      </div>
    </Card>

      </Link>

      ))}
    </div>
  );
};

export default ProductPage;
