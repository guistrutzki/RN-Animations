import React, { FC } from 'react';
import LottieView from 'lottie-react-native';

//https://lottiefiles.com/9561-loading-unicorn

// import graphLottie from '../../assets/graph.json';
// import lottieFile from '../../assets/favorite-location.json';
import unicornLottie from '../../assets/unicorn.json';

import { Container } from './styles';

const LottieScreen: FC = () => {
  return (
    <Container>
      <LottieView
        source={unicornLottie}
        autoPlay
        loop
        colorFilters={[
          {
            keypath: 'Oval',
            color: '#f0ff00'
          }
        ]}
        style={{ transform: [{ scale: 1.2 }] }}
      />
    </Container>
  );
};

export default LottieScreen;
