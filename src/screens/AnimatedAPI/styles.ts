import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #080818;
  padding: 40px;
`;

export const EmojiContainer = styled(Animated.View)`
  background-color: #fff;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
`;

export const EmojiText = styled.Text`
  font-size: 80px;
`;
