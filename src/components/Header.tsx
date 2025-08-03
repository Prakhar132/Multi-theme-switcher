import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header<{ theme: any }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.theme.colors.surface};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.layout.boxShadow};
  transition: ${props => props.theme.layout.transition};
`;

const HeaderContent = styled.div<{ theme: any }>`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.large};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  transition: ${props => props.theme.layout.transition};
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const Nav = styled.nav<{ theme: any }>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
`;

const NavLink = styled(Link)<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.medium};
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.layout.borderRadius};
  transition: ${props => props.theme.layout.transition};
  
  &:hover {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.accent};
  }
`;

const ThemeSelect = styled.select<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.medium};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: ${props => props.theme.layout.transition};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.accent}20;
  }
`;

const MobileMenu = styled.div<{ theme: any }>`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.sm};
    align-items: flex-end;
  }
`;

const DesktopNav = styled.div<{ theme: any }>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.div<{ theme: any }>`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.sm};
    margin-top: ${props => props.theme.spacing.md};
  }
`;

const MobileNavLink = styled(Link)<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.small};
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  padding: ${props => props.theme.spacing.xs} 0;
  transition: ${props => props.theme.layout.transition};
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const Header: React.FC = () => {
  const { theme, currentTheme, setTheme } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as any);
  };

  return (
    <HeaderContainer theme={theme}>
      <HeaderContent theme={theme}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo to="/" theme={theme}>
            MultiTheme
          </Logo>
        </motion.div>

        <DesktopNav theme={theme}>
          <NavLink to="/" theme={theme}>Home</NavLink>
          <NavLink to="/about" theme={theme}>About</NavLink>
          <NavLink to="/contact" theme={theme}>Contact</NavLink>
          
          <ThemeSelect
            value={currentTheme}
            onChange={handleThemeChange}
            theme={theme}
          >
            <option value="theme1">Theme 1 - Minimalist</option>
            <option value="theme2">Theme 2 - Dark Mode</option>
            <option value="theme3">Theme 3 - Colorful</option>
          </ThemeSelect>
        </DesktopNav>

        <MobileMenu theme={theme}>
          <ThemeSelect
            value={currentTheme}
            onChange={handleThemeChange}
            theme={theme}
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </ThemeSelect>
          
          <MobileNav theme={theme}>
            <MobileNavLink to="/" theme={theme}>Home</MobileNavLink>
            <MobileNavLink to="/about" theme={theme}>About</MobileNavLink>
            <MobileNavLink to="/contact" theme={theme}>Contact</MobileNavLink>
          </MobileNav>
        </MobileMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 