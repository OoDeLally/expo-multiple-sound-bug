import { Audio } from 'expo-av';
import React, { useEffect, useRef } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import DefaultButtonSound from './default-button.mp3';

export default function App() {
  const soundRef = useRef<Audio.Sound>();

  useEffect(() => {
    Audio.Sound.createAsync(DefaultButtonSound).then(({ sound }) => soundRef.current = sound);
    return () => {
      if (soundRef.current) {
      soundRef.current.unloadAsync();
      }
    }
  }, [])

  const handlePlaySound = async () => {
    if (soundRef.current) {
      console.log('play');
      await soundRef.current.replayAsync();
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Play sound" onPress={handlePlaySound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
