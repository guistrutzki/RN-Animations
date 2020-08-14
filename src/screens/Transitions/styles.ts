import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('screen');

interface CardProps {
  color: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: #080818;
`;

export const Card = styled.View<CardProps>`
  width: 100%;
  height: 200px;
  background-color: ${({ color }): string =>
    color === 0 ? 'red' : color === 1 ? 'blue' : 'yellow'};
  border-radius: 25px;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  width: ${width}px;
  height: 80px;
  background-color: #333648;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;
