import React, { FC } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('screen');

const Container = styled.TouchableOpacity`
  background-color: #383c4f;
  width: ${width * 0.9}px;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 20px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: 500;
  color: #f0f3f8;
`;

interface CardProps {
  title: string;
  onPress: () => void;
}

const HomeCard: FC<CardProps> = ({ title, onPress }) => (
  <Container onPress={onPress}>
    <Title>{title}</Title>
  </Container>
);

export default HomeCard;
