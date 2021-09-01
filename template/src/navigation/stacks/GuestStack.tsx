import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {GuestScreen} from '../../screens';

const Guest = createNativeStackNavigator();

const GuestStack = () => {
  return (
    <Guest.Navigator>
      <Guest.Screen name={'Guest'} component={GuestScreen} />
    </Guest.Navigator>
  );
};

export default GuestStack;
