import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  background-color: #080818;
`;

export const CardWrapper = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.Image`
  width: ${width / 3}px;
  height: ${height / 5}px;
`;

export const Square = styled.View`
  width: ${width / 3}px;
  height: ${height / 5}px;
  background-color: purple;
`;
