import styled from 'styled-components/native';
import { Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('screen');

const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  justify-content: center;
`;

export const PosterImage = styled.Image`
  width: ${ITEM_WIDTH}px;
  height: ${ITEM_HEIGHT}px;
`;

export const PosterWrapper = styled(Animated.View)`
  position: absolute;
  left: ${-ITEM_WIDTH / 2}px;
`;
