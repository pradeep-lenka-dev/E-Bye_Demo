import React from 'react';
import { Link } from 'react-router-dom';
import { Autocomplete, Group, Burger, rem ,Button} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { IconShoppingCart } from '@tabler/icons-react';
import  '../../styles/HeaderStyle.css'
//   import classes from './HeaderMegaMenu.module.css';


const links = [
    { link: '/Home', label: 'Home' },
    { link: '/products', label: 'Product' },
    // { link: '/learn', label: 'Learn' },
    // { link: '/community', label: 'Community' },
  ];
const Header = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const items = links.map((link) => (
        <li
          key={link.label}
          className="link"
          onClick={(event) => event.preventDefault()}
        >
            <Link to={link.link}>{link.label}</Link>
          
        </li>
      ));

  return (
    <header className="header">
    <div className="inner">
  

      <Group ml={50} gap={5} className="links" visibleFrom="sm">
          {/* {items} */}
          <li><Link className="links" to="/Procducts">Product</Link></li>
          <li><Link className="links" to="/Home">Home</Link></li>
        </Group>

      <Group>
        <Autocomplete
          className="search"
          placeholder="Search"
          leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
          // data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
          visibleFrom="xs"
        />
      </Group>
      <Group>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/cart"><IconShoppingCart stroke={2} />Cart</Link>
      </Group>
    </div>
  </header>
  );
};

export default Header;


