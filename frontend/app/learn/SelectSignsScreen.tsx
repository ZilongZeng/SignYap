import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const aslImages = [
  require("../../assets/aslLetters/A.png"),
  require("../../assets/aslLetters/B.png"),
  require("../../assets/aslLetters/C.png"),
  require("../../assets/aslLetters/D.png"),
  require("../../assets/aslLetters/E.png"),
  require("../../assets/aslLetters/F.png"),
  require("../../assets/aslLetters/G.png"),
  require("../../assets/aslLetters/H.png"),
  require("../../assets/aslLetters/I.png"),
  require("../../assets/aslLetters/J.png"),
  require("../../assets/aslLetters/K.png"),
  require("../../assets/aslLetters/L.png"),
  require("../../assets/aslLetters/M.png"),
  require("../../assets/aslLetters/N.png"),
  require("../../assets/aslLetters/O.png"),
  require("../../assets/aslLetters/P.png"),
  require("../../assets/aslLetters/Q.png"),
  require("../../assets/aslLetters/R.png"),
  require("../../assets/aslLetters/S.png"),
  require("../../assets/aslLetters/T.png"),
  require("../../assets/aslLetters/U.png"),
  require("../../assets/aslLetters/V.png"),
  require("../../assets/aslLetters/W.png"),
  require("../../assets/aslLetters/X.png"),
  require("../../assets/aslLetters/Y.png"),
  require("../../assets/aslLetters/Z.png"),
];

const SelectSignsScreen = () => {
  return (
    <LinearGradient colors={['#FFFFFF', '#F5E9FE']}
                    style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Select Letter Signs</Text>
        <FlatList
          data={aslImages}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} />
          )}
          keyExtractor={(item, index) => index.toString()} 
          numColumns={3} 
          contentContainerStyle={styles.imageContainer}
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
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 100, 
    height: 100, 
    margin: 5, 
  },
});

export default SelectSignsScreen;