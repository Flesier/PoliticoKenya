import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to PoliticoKenya</Text>
      <Button
        title="Go to News"
        onPress={() => navigation.navigate('News')}
      />
      <Button
        title="Go to Social Media"
        onPress={() => navigation.navigate('Social Media')}
      />
    </View>
  );
}

export default HomeScreen;
