import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import AnimatedAPIScreen from '../screens/AnimatedAPI';

const App = createStackNavigator();

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
          title: 'Animated API',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18
          }
        }}
      />
    </App.Navigator>
  );
};

export default AppRoutes;