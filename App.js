import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddCardScreen from './src/screens/AddCardScreen';
import HomeScreen from './src/screens/HomeScreen';
import ShowCards from './src/screens/ShowCards';
import StartGame from './src/screens/StartGame';
import Informations from './src/screens/Informations';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/redux';

const Stack = createNativeStackNavigator();
const App = () => {
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="AddCard" component={AddCardScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ShowCards" component={ShowCards} />
          <Stack.Screen name="StartGame" component={StartGame} />
          <Stack.Screen name="Informations" component={Informations} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
