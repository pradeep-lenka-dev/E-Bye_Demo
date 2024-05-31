import React from 'react';
import { Avatar,Card, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';

import '../styles/CartStyle.css';

const CartPage = ({ cart }) => {
  console.log("🚀 ~ CartPage ~ addtoCart:", cart)
  return (
    <div>
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <div>
          {cart.map((cartProduct, index) => (
            <Card key = {cartProduct.id} className="cards">
            <Group wrap="nowrap">
              <Avatar
                src= {cartProduct.image}
                size={94}
                radius="md"
              />
              <div>
                <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                  Software engineer
                </Text>
      
                <Text fz="lg" fw={500} className="name">
                  {cartProduct.title}
                </Text>
      
                <Group wrap="nowrap" gap={10} mt={3}>
                  <IconAt stroke={1.5} size="1rem" className="icon" />
                  <Text fz="xs" c="dimmed">
                    {cartProduct.price}
                  </Text>
                </Group>
      
                <Group wrap="nowrap" gap={10} mt={5}>
                  <IconPhoneCall stroke={1.5} size="1rem" className="icon" />
                  <Text fz="xs" c="dimmed">
                    +11 (876) 890 56 23
                  </Text>
                </Group>
              </div>
            </Group>
          </Card>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
