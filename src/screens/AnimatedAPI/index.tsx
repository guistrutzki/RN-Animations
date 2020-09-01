import React, { FC, useState, useEffect } from 'react';
import { Animated } from 'react-native';

import { Container, EmojiText, EmojiContainer } from './styles';

const AnimatedAPI: FC = () => {
  // * Criar o estado ou referencia inicial do valor utilizando o Animated.Value()
  const [emojiPosY] = useState(new Animated.Value(0));
  const [emojiPosX] = useState(new Animated.Value(0));
  const [emojiScale] = useState(new Animated.Value(1));
  const [emojiOpacity] = useState(new Animated.Value(1));

  /**
   * * Exemplo de interpolate
   */
  // const interpolateOpacity = emojiPosX.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: [0, 1]
  // });

  // * Passando os valores da animação para o estilo do elemento
  const animationsStyle = {
    transform: [
      { translateY: emojiPosY },
      { translateX: emojiPosX },
      { scaleX: emojiScale },
      { scaleY: emojiScale }
    ],
    opacity: emojiOpacity
  };

  /**
   * * Animação de timing
   */

  const animation = Animated.timing(emojiPosY, {
    toValue: 200,
    duration: 2000,
    useNativeDriver: true
  });

  /**
   * * Animações em sequência
   */

  // const animation = Animated.sequence([
  //   Animated.timing(emojiPosY, {
  //     toValue: 300,
  //     duration: 1000,
  //     useNativeDriver: true
  //   }),

  //   Animated.timing(emojiPosX, {
  //     toValue: 100,
  //     duration: 1000,
  //     useNativeDriver: true
  //   }),

  //   Animated.timing(emojiScale, {
  //     toValue: 1.5,
  //     duration: 1000,
  //     useNativeDriver: true
  //   })
  // ]);

  /**
   * * Animações em pararelo
   */

  // const animation = Animated.parallel([
  //   Animated.timing(emojiPosY, {
  //     toValue: 300,
  //     duration: 2000,
  //     useNativeDriver: true
  //   }),

  //   Animated.timing(emojiPosX, {
  //     toValue: 100,
  //     duration: 2000,
  //     useNativeDriver: true
  //   }),

  //   Animated.timing(emojiOpacity, {
  //     toValue: 1,
  //     duration: 2000,
  //     useNativeDriver: true
  //   })
  // ]);

  /**
   * * Animações spring
   */

  // const animation = Animated.parallel([
  //   Animated.spring(emojiPosY, {
  //     toValue: 300,
  //     friction: 1,
  //     tension: 120,
  //     useNativeDriver: true
  //   }),

  //   Animated.timing(emojiOpacity, {
  //     toValue: 1,
  //     duration: 2000,
  //     useNativeDriver: true
  //   })
  // ]);

  /**
   * * Animações decay
   */

  // const animation = Animated.decay(emojiPosY, {
  // velocity: 0.7,
  //   deceleration: 0.997,
  //   useNativeDriver: true
  // });

  useEffect(() => {
    animation.start();
  }, []);

  return (
    <Container>
      <EmojiContainer style={animationsStyle}>
        <EmojiText>💩</EmojiText>
      </EmojiContainer>
    </Container>
  );
};

export default AnimatedAPI;
