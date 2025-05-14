import React from 'react';
import { View, Text, Button } from 'react-native';
import BlueButton from '../components/BlueButton';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#94C9A9' }}>
      <Text>Welcome to MoodMixer 🎧</Text>
      <BlueButton title="Generate Playlist" onPress={() => navigation.navigate('Result')} />
    </View>
  );
}
