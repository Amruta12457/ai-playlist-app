import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to MoodMixer 🎧</Text>
      <Button title="Generate Playlist" onPress={() => navigation.navigate('Result')} />
    </View>
  );
}
