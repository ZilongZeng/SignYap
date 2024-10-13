import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const aslImages = [
  require('../../assets/aslLetters/a.png'),
  require('../../assets/aslLetters/b.png'),
  // require('../../assets/aslLetters/c2.png'),
  // require('../../assets/aslLetters/d.png'),
  // require('../../assets/aslLetters/e.png'),
  // require('../../assets/aslLetters/f.png'),
  // require('../../assets/aslLetters/g.png'),
  // require('../../assets/aslLetters/h.png'),
  // require('../../assets/aslLetters/i.png'),
  // require('../../assets/aslLetters/j.png'),
  // require('../../assets/aslLetters/k.png'),
  // require('../../assets/aslLetters/l.png'),
  // require('../../assets/aslLetters/m.png'),
  // require('../../assets/aslLetters/n.png'),
  // require('../../assets/aslLetters/o.png'),
  // require('../../assets/aslLetters/p.png'),
  // require('../../assets/aslLetters/q.png'),
  // require('../../assets/aslLetters/r.png'),
  // require('../../assets/aslLetters/s.png'),
  // require('../../assets/aslLetters/t.png'),
  // require('../../assets/aslLetters/u.png'),
  // require('../../assets/aslLetters/v.png'),
  // require('../../assets/aslLetters/w.png'),
  // require('../../assets/aslLetters/x.png'),
  // require('../../assets/aslLetters/y.png'),
  // require('../../assets/aslLetters/z.png')
];

const SelectSignsScreen = () => {
  return (
    <LinearGradient colors={['#FFFFFF', '#F5E9FE']}
                    style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Select ASL Signs</Text>
        <FlatList
          data={aslImages}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} />
          )}
          keyExtractor={(item, index) => index.toString()} // Use index as key for simplicity
          numColumns={3} // Number of columns in the grid
          contentContainerStyle={styles.imageContainer}
          style={styles.flatList}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20, // Space between title and images
  },
  flatList: {
    marginTop: 40,
  },
  imageContainer: {
    alignItems: 'center', // Center the images
  },
  image: {
    width: 100, // Set width of images
    height: 100, // Set height of images
    margin: 5, // Space between images
  },
});

export default SelectSignsScreen;