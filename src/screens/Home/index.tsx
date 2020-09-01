import React, { FC } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import HomeCard from '../../components/HomeCard';

const screenList = [
  { title: 'Animated', routeName: 'AnimatedAPIScreen' },
  { title: 'PanResponder', routeName: 'PanResponderScreen' },
  { title: 'Transitions', routeName: 'Transitions' },
  { title: 'Lottie', routeName: 'LottieScreen' },
  { title: 'Animatable', routeName: 'AnimatableScreen' },
  { title: 'Shared-element', routeName: 'SharedElementScreen' },
  { title: 'GestureHandler', routeName: 'GestureHandlerScreen' }
];

const Home: FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="light-content" />
      <FlatList
        keyExtractor={(item): string => item.title}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContainer}
        data={screenList}
        renderItem={({ item }): JSX.Element => (
          <HomeCard
            title={item.title}
            onPress={(): void => navigation.navigate(item.routeName)}
          />
        )}
      />
    </>
  );
};

export default Home;
