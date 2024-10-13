import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface EmojiProps {
  emoji: string;
  size?: number;
}

const Emoji: React.FC<EmojiProps> = ({ emoji, size }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: size }}>
        {emoji}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1.5,
    shadowRadius: 3.84,
    elevation: 5,
    paddingLeft: 10,
  },
});

export default Emoji;
