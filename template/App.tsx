/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'mobx-react';
import {RootStack} from './src/navigation/stacks';

const App = () => {
  return (
    <Provider>
      {/* ROOT DOM */}
      <RootStack />
      {/* OTHER PORTALS GO HERE https://github.com/gorhom/react-native-portal */}
    </Provider>
  );
};

export default App;
