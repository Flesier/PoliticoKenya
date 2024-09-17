import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import SocialMediaScreen from './screens/SocialMediaScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Social Media" component={SocialMediaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;