// SidebarItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const SidebarItem = ({ Icon, to, Text }) => {
  return (
    <Link to={to}>
        <Container>
        
            <Icon />
            {Text}
        
        </Container>
    </Link>
  );
};

export default SidebarItem;
