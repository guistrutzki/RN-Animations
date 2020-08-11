import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './app.routes';

const Routes: FC = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default Routes;
