import React from 'react';
import { Link } from 'react-router-dom';
import { Autocomplete, Group, Burger, rem ,Button} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import  '../../styles/HeaderStyle.css'
//   import classes from './HeaderMegaMenu.module.css';


// const links = [
//     { link: '/Home', label: 'Home' },
//     { link: '/products', label: 'Product' },
//     // { link: '/learn', label: 'Learn' },
//     // { link: '/community', label: 'Community' },
//   ];
const Header = () => {
    // const [opened, { toggle }] = useDisclosure(false);
    // const items = links.map((link) => (
    //     <a
    //       key={link.label}
    //       className="link"
    //       onClick={(event) => event.preventDefault()}
    //     >
    //         <Link to={link.link}>{link.label}</Link>
          
    //     </a>
    //   ));

  return (
    <header className="header">
    <div className="inner">
    <h1>Header</h1>
    </div>
  </header>
  );
};

export default Header;


