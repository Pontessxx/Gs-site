import React from 'react';
import { useState } from 'react';
import { Container } from './styles';
import { FaBars } from 'react-icons/fa';
import './Navbar.scss';
import Sidebar from '../Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../../Pages/Home/Home'
const Statistics = () => <h2>Statistics</h2>;
const Users = () => <h2>Users</h2>;
const Mail = () => <h2>Mail</h2>;
const Calendar = () => <h2>Calendar</h2>;
const Employees = () => <h2>Employees</h2>;
const Reports = () => <h2>Reports</h2>;
const Settings = () => <h2>Settings</h2>;

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Router>
      <>
        <Container>
          <FaBars onClick={showSidebar} />
          {sidebar && <Sidebar active={setSidebar} />}
        </Container>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/users" element={<Users />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </>
    </Router>
  );
};

export default Navbar;
