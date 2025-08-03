import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

interface ProductCardProps {
  product: Product;
  theme: any;
}

const Card = styled(motion.div)<{ theme: any }>`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.layout.boxShadow};
  transition: ${props => props.theme.layout.transition};
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px ${props => props.theme.colors.shadow};
  }
`;

const ImageContainer = styled.div<{ theme: any }>`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: ${props => props.theme.layout.borderRadius};
  margin-bottom: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.img<{ theme: any }>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: ${props => props.theme.layout.transition};
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ProductTitle = styled.h3<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.medium};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text};
  margin: 0 0 ${props => props.theme.spacing.sm} 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductPrice = styled.div<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.large};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.accent};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const ProductDescription = styled.p<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.small};
  color: ${props => props.theme.colors.textSecondary};
  margin: 0 0 ${props => props.theme.spacing.md} 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
`;

const ProductCategory = styled.span<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.small};
  color: ${props => props.theme.colors.textSecondary};
  background: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.layout.borderRadius};
  display: inline-block;
  margin-bottom: ${props => props.theme.spacing.sm};
  text-transform: capitalize;
`;

const RatingContainer = styled.div<{ theme: any }>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  margin-top: auto;
`;

const Rating = styled.span<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.small};
  color: ${props => props.theme.colors.textSecondary};
`;

const Star = styled.span<{ theme: any }>`
  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.typography.fontSize.small};
`;

const ProductCard: React.FC<ProductCardProps> = ({ product, theme }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} theme={theme}>★</Star>);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" theme={theme}>☆</Star>);
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} theme={theme}>☆</Star>);
    }
    
    return stars;
  };

  return (
    <Card
      theme={theme}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <ImageContainer theme={theme}>
        <ProductImage src={product.image} alt={product.title} theme={theme} />
      </ImageContainer>
      
      <ProductCategory theme={theme}>{product.category}</ProductCategory>
      <ProductTitle theme={theme}>{product.title}</ProductTitle>
      <ProductPrice theme={theme}>${product.price}</ProductPrice>
      <ProductDescription theme={theme}>{product.description}</ProductDescription>
      
      <RatingContainer theme={theme}>
        {renderStars(product.rating.rate)}
        <Rating theme={theme}>({product.rating.count})</Rating>
      </RatingContainer>
    </Card>
  );
};

export default ProductCard; 