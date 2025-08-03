import React, { useState } from 'react';
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
  max-width: 800px;
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
`;

const Form = styled(motion.form)<{ theme: any }>`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.layout.boxShadow};
`;

const FormGroup = styled.div<{ theme: any }>`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Label = styled.label<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.medium};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text};
  display: block;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const Input = styled.input<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.medium};
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  transition: ${props => props.theme.layout.transition};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.accent}20;
  }
`;

const TextArea = styled.textarea<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.medium};
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  resize: vertical;
  min-height: 120px;
  transition: ${props => props.theme.layout.transition};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.accent}20;
  }
`;

const SubmitButton = styled(motion.button)<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.medium};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  background: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.layout.borderRadius};
  cursor: pointer;
  transition: ${props => props.theme.layout.transition};
  width: 100%;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: ${props => props.theme.colors.textSecondary};
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled(motion.div)<{ theme: any }>`
  background: ${props => props.theme.colors.accent}20;
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.lg};
  font-family: ${props => props.theme.typography.fontFamily};
  color: ${props => props.theme.colors.accent};
  text-align: center;
`;

const ContactInfo = styled.div<{ theme: any }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin-top: ${props => props.theme.spacing.xl};
`;

const InfoCard = styled(motion.div)<{ theme: any }>`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.layout.borderRadius};
  padding: ${props => props.theme.spacing.lg};
  text-align: center;
  box-shadow: ${props => props.theme.layout.boxShadow};
`;

const InfoTitle = styled.h3<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.large};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const InfoText = styled.p<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.medium};
  color: ${props => props.theme.colors.textSecondary};
`;

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1000);
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
          Contact Us
        </Title>
        
        <Description
          theme={theme}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get in touch with us. We'd love to hear from you and answer any questions you might have.
        </Description>
        
        <Form
          theme={theme}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
        >
          <FormGroup theme={theme}>
            <Label theme={theme}>Name</Label>
            <Input
              theme={theme}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          
          <FormGroup theme={theme}>
            <Label theme={theme}>Email</Label>
            <Input
              theme={theme}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          
          <FormGroup theme={theme}>
            <Label theme={theme}>Subject</Label>
            <Input
              theme={theme}
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          
          <FormGroup theme={theme}>
            <Label theme={theme}>Message</Label>
            <TextArea
              theme={theme}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          
          <SubmitButton
            theme={theme}
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
          
          {showSuccess && (
            <SuccessMessage
              theme={theme}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Thank you! Your message has been sent successfully.
            </SuccessMessage>
          )}
        </Form>
        
        <ContactInfo theme={theme}>
          <InfoCard
            theme={theme}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <InfoTitle theme={theme}>Email</InfoTitle>
            <InfoText theme={theme}>contact@multitheme.com</InfoText>
          </InfoCard>
          
          <InfoCard
            theme={theme}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <InfoTitle theme={theme}>Phone</InfoTitle>
            <InfoText theme={theme}>+1 (555) 123-4567</InfoText>
          </InfoCard>
          
          <InfoCard
            theme={theme}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.02 }}
          >
            <InfoTitle theme={theme}>Address</InfoTitle>
            <InfoText theme={theme}>123 Theme Street, Design City, DC 12345</InfoText>
          </InfoCard>
        </ContactInfo>
      </Content>
    </PageContainer>
  );
};

export default Contact; 