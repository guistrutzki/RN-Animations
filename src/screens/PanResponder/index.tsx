import React, { FC, useRef, useState } from 'react';
import { PanResponder, Animated } from 'react-native';

import { Container, EmojiText, EmojiContainer } from './styles';

const PanResponderScreen: FC = () => {
  const [pan] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const [panResponder] = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log(pan);

        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  );

  return (
    <Container>
      <EmojiContainer
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}>
        <EmojiText>🚀</EmojiText>
      </EmojiContainer>
    </Container>
  );
};

export default PanResponderScreen;
