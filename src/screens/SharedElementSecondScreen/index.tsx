import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import { Container, Image } from './styles';

import dogImage from '../../assets/dog.jpg';

const SharedElementSecondScreen: FC = () => {
  return (
    <Container>
      <SharedElement id="image" style={StyleSheet.absoluteFill}>
        <Image source={dogImage} resizeMode="cover" />
      </SharedElement>
    </Container>
  );
};

export default SharedElementSecondScreen;
