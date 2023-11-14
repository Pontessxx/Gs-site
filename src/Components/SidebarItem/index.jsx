// SidebarItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const SidebarItem = ({ Icon, to, Text, onClick }) => {
  const handleItemClick = () => {
    if (onClick) {
      onClick(); // Chama a função fornecida por `onClick`
    }
  };
  return (
    <Link to={to}  onClick={handleItemClick}>
        <Container>
        
            <Icon />
            {Text}
        
        </Container>
    </Link>
  );
};

export default SidebarItem;
