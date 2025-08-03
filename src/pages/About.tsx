import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const PageContainer = styled.div<{ theme: any }>`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  padding-top: 80px;
  transition: ${props => props.theme.layout.transition};
`;

const Content = styled.div<{ theme: any }>`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
`;

const Title = styled(motion.h1)<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.xlarge};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Description = styled(motion.p)<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.medium};
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CardContainer = styled.div<{ theme: any }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin-top: ${props => props.theme.spacing.xl};
`;

const Card = styled(motion.div)<{ theme: any }>`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.layout.boxShadow};
  transition: ${props => props.theme.layout.transition};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px ${props => props.theme.colors.shadow};
  }
`;

const CardTitle = styled.h3<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.large};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const CardContent = styled.p<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.medium};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

const FeatureList = styled.ul<{ theme: any }>`
  list-style: none;
  padding: 0;
  margin: ${props => props.theme.spacing.md} 0;
`;

const FeatureItem = styled.li<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.medium};
  color: ${props => props.theme.colors.textSecondary};
  padding: ${props => props.theme.spacing.sm} 0;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  &:before {
    content: "✓";
    color: ${props => props.theme.colors.accent};
    font-weight: bold;
    margin-right: ${props => props.theme.spacing.sm};
  }
`;

const About: React.FC = () => {
  const { theme } = useTheme();

  const features = [
    "Three distinct themes with unique layouts",
    "Responsive design for all devices",
    "Theme persistence across page reloads",
    "Smooth animations and transitions",
    "API integration with external data",
    "TypeScript for type safety",
    "Styled-components for styling",
    "React Router for navigation"
  ];

  return (
    <PageContainer theme={theme}>
      <Content theme={theme}>
        <Title
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About MultiTheme App
        </Title>
        
        <Description
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A modern React application showcasing advanced theme switching capabilities. 
          Built with TypeScript, styled-components, and Framer Motion for smooth animations.
        </Description>
        
        <CardContainer theme={theme}>
          <Card
            theme={theme}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <CardTitle theme={theme}>Theme 1 - Minimalist</CardTitle>
            <CardContent theme={theme}>
              Clean and simple design with light colors, sans-serif typography, 
              and a straightforward grid layout. Perfect for professional applications.
            </CardContent>
          </Card>
          
          <Card
            theme={theme}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <CardTitle theme={theme}>Theme 2 - Dark Mode</CardTitle>
            <CardContent theme={theme}>
              Elegant dark theme with sidebar navigation, serif typography, 
              and sophisticated color palette. Ideal for content-heavy applications.
            </CardContent>
          </Card>
          
          <Card
            theme={theme}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <CardTitle theme={theme}>Theme 3 - Colorful</CardTitle>
            <CardContent theme={theme}>
              Vibrant and playful design with colorful elements, Pacifico font, 
              and card-based layout. Great for creative and engaging user experiences.
            </CardContent>
          </Card>
        </CardContainer>
        
        <Card
          theme={theme}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          style={{ marginTop: theme.spacing.xl }}
        >
          <CardTitle theme={theme}>Key Features</CardTitle>
          <FeatureList theme={theme}>
            {features.map((feature, index) => (
              <FeatureItem key={index} theme={theme}>
                {feature}
              </FeatureItem>
            ))}
          </FeatureList>
        </Card>
      </Content>
    </PageContainer>
  );
};

export default About; 