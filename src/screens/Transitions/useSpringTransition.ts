import { useEffect } from 'react';

import Animated, {
  useSharedValue,
  useDerivedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';

const useSpringTransition = (
  state: boolean | number
): Animated.SharedValue<number> => {
  const value = useSharedValue(0);

  useEffect(() => {
    value.value = typeof state === 'boolean' ? (state ? 1 : 0) : state;
  }, [state, value]);

  const transition = useDerivedValue(() => {
    return withSpring(value.value);
  });

  return transition;
};

export default useSpringTransition;
