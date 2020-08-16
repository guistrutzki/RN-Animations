import React, { FC } from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';

import { Container, Card, CardWrapper, Square } from './styles';

import dogImage from '../../assets/dog.jpg';

const SharedElementScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <CardWrapper
        onPress={() => navigation.navigate('SharedElementSecondScreen')}>
        <SharedElement id={'image'}>
          <Card source={dogImage} resizeMode="cover" />
        </SharedElement>
      </CardWrapper>
    </Container>
  );
};

export default SharedElementScreen;
