import React from 'react';
import { Text, Platform, StyleSheet, Pressable, GestureResponderEvent } from 'react-native';

export default function Button({
  onPress,
  title,
}: {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#3d5f27',
    width: '50%',
  },
  text: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
});
