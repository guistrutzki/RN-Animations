import React, { FC } from 'react';
import LottieView from 'lottie-react-native';

import graphLottie from '../../assets/graph.json';
// import lottieFile from '../../assets/favorite-location.json';

import { Container } from './styles';

const LottieScreen: FC = () => {
  return (
    <Container>
      <LottieView
        source={graphLottie}
        autoPlay
        loop
        style={{ transform: [{ scale: 1.2 }] }}
      />
    </Container>
  );
};

export default LottieScreen;
