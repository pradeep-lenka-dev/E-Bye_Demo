import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { fetchProductDetails } from '../service/ProductService';

import {fetchProductDetails} from "../service/ProductService"
import { Container, Grid, SimpleGrid, Skeleton, rem ,Button } from '@mantine/core';
import { IconCurrencyRupee } from '@tabler/icons-react';

const PRIMARY_COL_HEIGHT = rem(300);


const ProductDetailsPage = () => {
  const { id } = useParams();
  const [productDetail, setData] = useState([])

  useEffect(()=>{
    // const { id } = useParams();
    const fetchProductDetail = async ()=>{
      try {
        const result = await fetchProductDetails(id)
        console.log("🚀 ~ fetchProductDetails ~ result:", result)
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
      <Container my="md">
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
              <div>

                  <img src={productDetail.image} alt={productDetail.name} style={{ maxWidth: '100%' }} />
                  <div className="actions">
                      <Button className="button" radius="xl">Add To Cart</Button>
                      <Button className="button" radius="xl" variant="outline">Buy Now</Button>
                  </div>
              </div>
              {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} /> */}
              <Grid gutter="md">
                  <Grid.Col>
                      <h2>{productDetail.title}</h2>
                      <h3><span><IconCurrencyRupee stroke={2} /></span>{productDetail.price}</h3>
                      <p>{productDetail.description}</p>
                  </Grid.Col>
                  {/* <Grid.Col span={6}>
                      <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                  </Grid.Col>
                  <Grid.Col span={6}>
                      <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                  </Grid.Col> */}
              </Grid>
          </SimpleGrid>
      </Container>

  );
};

export default ProductDetailsPage;
