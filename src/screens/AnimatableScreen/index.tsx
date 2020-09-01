import React, { FC, useState, useRef, useEffect } from 'react';
import { FlatList, ViewProperties, ViewStyle } from 'react-native';
import { AnimatableComponent } from 'react-native-animatable';

import {
  Container,
  ViewAnimatable,
  TouchableOpacity,
  ButtonText,
  ButtonAnimated
} from './styles';

const arrayIn = [
  { color: '#e09f7d', animation: 'zoomIn' },
  { color: '#ef5d60', animation: 'zoomInDown' },
  { color: '#ec4067', animation: 'zoomInUp' },
  { color: '#a01a7d', animation: 'zoomInLeft' },
  { color: '#311847', animation: 'zoomInRight' }
];

const arrayOut = [
  { color: '#e09f7d', animation: 'zoomOut' },
  { color: '#ef5d60', animation: 'zoomOutDown' },
  { color: '#ec4067', animation: 'zoomOutUp' },
  { color: '#a01a7d', animation: 'zoomOutLeft' },
  { color: '#311847', animation: 'zoomOutRight' }
];

const AnimatableScreen: FC = () => {
  const [data, setData] = useState(arrayIn);
  const buttonRef = useRef<AnimatableComponent<ViewProperties, ViewStyle>>(
    null
  );

  useEffect(() => {
    if (buttonRef?.current?.swing) {
      buttonRef.current.swing();
    }
  }, [data]);

  return (
    <Container>
      <FlatList
        style={{ flex: 1 }}
        data={data}
        keyExtractor={(item): string => item.color}
        renderItem={({ item }): JSX.Element => (
          <ViewAnimatable color={item.color} animation={item.animation} />
        )}
      />
      <ButtonAnimated animation="swing" ref={buttonRef}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={(): void =>
            setData((currArray) =>
              currArray[0].animation === 'zoomIn' ? arrayOut : arrayIn
            )
          }
          style={{ marginBottom: 50 }}>
          <ButtonText>Alterar</ButtonText>
        </TouchableOpacity>
      </ButtonAnimated>
    </Container>
  );
};

export default AnimatableScreen;
