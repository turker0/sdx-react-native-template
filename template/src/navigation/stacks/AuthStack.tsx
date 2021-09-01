import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthScreen} from '../../screens';

const Auth = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen name={'Auth'} component={AuthScreen} />
    </Auth.Navigator>
  );
};

export default AuthStack;
