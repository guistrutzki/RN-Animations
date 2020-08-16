import React, { FC } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import HomeScreen from '../screens/Home';
import AnimatedAPIScreen from '../screens/AnimatedAPI';
import PanResponderScreen from '../screens/PanResponder';
import Transitions from '../screens/Transitions';
import LottieScreen from '../screens/LottieScreen';
import SharedElementScreen from '../screens/SharedElementScreen';
import SharedElementSecondScreen from '../screens/SharedElementSecondScreen';

interface ShareElementSecondScreenRouteParams {
  data: {
    id: string;
    image: string;
  };
}
export type AppStackParams = {
  HomeScreen: undefined;
  AnimatedAPIScreen: undefined;
  PanResponderScreen: undefined;
  Transitions: undefined;
  LottieScreen: undefined;
  SharedElementScreen: undefined;
  SharedElementSecondScreen: ShareElementSecondScreenRouteParams;
};

const App = createSharedElementStackNavigator<AppStackParams>();

const AppRoutes: FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#333648',
          borderBottomWidth: 0
        },
        headerTintColor: '#fff'
      }}>
      <App.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{
          title: 'Animações',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18
          }
        }}
      />
      <App.Screen
        component={AnimatedAPIScreen}
        name="AnimatedAPIScreen"
        options={{
          title: 'Animated',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18
          }
        }}
      />
      <App.Screen
        component={PanResponderScreen}
        name="PanResponderScreen"
        options={{
          title: 'PanResponder',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18
          }
        }}
      />
      <App.Screen
        component={Transitions}
        name="Transitions"
        options={{
          title: 'Transitions',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18
          }
        }}
      />
      <App.Screen
        component={LottieScreen}
        name="LottieScreen"
        options={{
          title: 'Lottie',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18
          }
        }}
      />
      <App.Screen
        component={SharedElementScreen}
        name="SharedElementScreen"
        options={{
          title: 'Shared-element',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18
          }
        }}
      />
      <App.Screen
        component={SharedElementSecondScreen}
        name="SharedElementSecondScreen"
        sharedElements={(route, otherRoute, showing) => {
          return [{ id: 'image' }];
        }}
        options={() => ({
          headerBackTitleVisible: false,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress
              }
            };
          }
        })}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
