import React, { FC, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { Container, Card, Button, ButtonText } from './styles';
import useSpringTransition from './useSpringTransition';

const { width } = Dimensions.get('screen');

const cards = [1, 2, 3];

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
  }
});

export const mix = (value: number, x: number, y: number): number => {
  'worklet';
  return x + value * (y - x);
};

const origin = { x: -(width / 2 - 8 * 2), y: 0 };

const Transtions: FC = () => {
  const [toggled, setToggle] = useState(false);
  const transition = useSpringTransition(toggled);

  return (
    <Container>
      {cards.map((card, index) => {
        const style = useAnimatedStyle(() => {
          const rotate = (index - 1) * mix(transition.value, 0, Math.PI / 6);
          const translateY = (index - 1) * mix(transition.value, 0, 150);
          return {
            transform: [
              { translateX: origin.x },
              {
                rotate: `${rotate}rad`
              },
              { translateX: -origin.x }
              // { translateY }
            ]
          };
        });

        return (
          <Animated.View key={card} style={[styles.overlay, style]}>
            <Card color={index} />
          </Animated.View>
        );
      })}
      <Button
        onPress={(): void => setToggle((prev) => !prev)}
        activeOpacity={0.9}>
        <ButtonText>{toggled ? 'Reset' : 'Start'}</ButtonText>
      </Button>
    </Container>
  );
};

export default Transtions;
