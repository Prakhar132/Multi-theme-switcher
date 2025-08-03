import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import ProductCard from '../components/ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

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
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled(motion.button)<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.medium};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  background: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.layout.borderRadius};
  cursor: pointer;
  transition: ${props => props.theme.layout.transition};
  display: block;
  margin: 0 auto ${props => props.theme.spacing.xl} auto;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const ProductsGrid = styled.div<{ theme: any }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin-top: ${props => props.theme.spacing.xl};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.md};
  }
`;

const LoadingContainer = styled.div<{ theme: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.large};
  color: ${props => props.theme.colors.textSecondary};
`;

const ErrorContainer = styled.div<{ theme: any }>`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  font-family: ${props => props.theme.typography.fontFamily};
  color: ${props => props.theme.colors.textSecondary};
`;

const SidebarLayout = styled.div<{ theme: any }>`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: ${props => props.theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.md};
  }
`;

const Sidebar = styled.div<{ theme: any }>`
  background: ${props => props.theme.colors.surface};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.layout.borderRadius};
  height: fit-content;
  position: sticky;
  top: 100px;
  
  @media (max-width: 768px) {
    position: static;
    margin-bottom: ${props => props.theme.spacing.lg};
    padding: ${props => props.theme.spacing.md};
  }
`;

const SidebarTitle = styled.h3<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.large};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const CategoryList = styled.ul<{ theme: any }>`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CategoryItem = styled.li<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.medium};
  color: ${props => props.theme.colors.textSecondary};
  padding: ${props => props.theme.spacing.sm} 0;
  cursor: pointer;
  transition: ${props => props.theme.layout.transition};
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const Home: React.FC = () => {
  const { theme, currentTheme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  const renderContent = () => {
    if (loading) {
      return (
        <LoadingContainer theme={theme}>
          Loading products...
        </LoadingContainer>
      );
    }

    if (error) {
      return (
        <ErrorContainer theme={theme}>
          <h2>Error loading products</h2>
          <p>{error}</p>
        </ErrorContainer>
      );
    }

    if (currentTheme === 'theme2') {
      // Dark theme with sidebar layout
      return (
        <SidebarLayout theme={theme}>
          <Sidebar theme={theme}>
            <SidebarTitle theme={theme}>Categories</SidebarTitle>
            <CategoryList theme={theme}>
              {categories.map(category => (
                <CategoryItem
                  key={category}
                  theme={theme}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    color: selectedCategory === category ? theme.colors.accent : theme.colors.textSecondary
                  }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </CategoryItem>
              ))}
            </CategoryList>
          </Sidebar>
          <div>
            <ProductsGrid theme={theme}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} theme={theme} />
              ))}
            </ProductsGrid>
          </div>
        </SidebarLayout>
      );
    }

    // Default grid layout for other themes
    return (
      <ProductsGrid theme={theme}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} theme={theme} />
        ))}
      </ProductsGrid>
    );
  };

  return (
    <PageContainer theme={theme}>
      <Content theme={theme}>
        <Title
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to MultiTheme Store
        </Title>
        
        <Description
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover amazing products with our beautiful theme switcher. 
          Each theme offers a unique experience with different layouts, colors, and typography.
        </Description>
        
        <Button
          theme={theme}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Products
        </Button>
        
        {renderContent()}
      </Content>
    </PageContainer>
  );
};

export default Home; 