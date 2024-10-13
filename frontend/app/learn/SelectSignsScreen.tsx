import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SelectSignsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select ASL Signs</Text>
      {/* Add content for selecting different ASL signs here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default SelectSignsScreen;