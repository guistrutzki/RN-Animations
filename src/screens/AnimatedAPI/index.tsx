import React, { FC, useState, useEffect } from 'react';
import { Animated } from 'react-native';

import { Container, EmojiText, EmojiContainer } from './styles';

const AnimatedAPI: FC = () => {
  const [emojiPosY] = useState(new Animated.Value(0));
  const [emojiPosX] = useState(new Animated.Value(0));
  const [emojiScale] = useState(new Animated.Value(1));
  const [emojiOpacity] = useState(new Animated.Value(0));

  /**
   * * Exemplo de interpolate
   */
  // const interpolateOpacity = emojiPosX.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: [0, 1]
  // });

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

  // const animation = Animated.timing(emojiPosY, {
  //   toValue: 200,
  //   duration: 2000,
  //   useNativeDriver: true
  // });

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

  const animation = Animated.parallel([
    Animated.timing(emojiPosY, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: true
    }),

    Animated.timing(emojiPosX, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: true
    }),

    Animated.timing(emojiOpacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    })
  ]);

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
