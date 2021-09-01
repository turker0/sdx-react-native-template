import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthStack, GuestStack} from '.';

const Root = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Root.Navigator>
      <Root.Screen name={'Guest'} component={GuestStack} />
      <Root.Screen name={'Auth'} component={AuthStack} />
    </Root.Navigator>
  );
};

export default RootStack;
