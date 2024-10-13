import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';

import { LinearGradient } from 'expo-linear-gradient';
import Emoji from '@/components/Emoji';



const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading Fonts...</Text>;
  }

  return (
    <LinearGradient colors={['#FFFFFF', '#F5E9FE']}
                    style={styles.container}>
      <Text style={styles.title}>Ready to SignYap?</Text>
      <View style={styles.buttonContainer}> 
        <Link href="./learn/LearnScreen" asChild>
          <TouchableOpacity style={styles.button}>
            <Emoji emoji="🧠" size={65} />
            <Text style={styles.buttonText}>
              Learn
            </Text>
          </TouchableOpacity>
        </Link>
        <Link href="./practice/PracticeScreen" asChild>
          <TouchableOpacity style={styles.button}>
            <Emoji emoji="🎯" size={70} />
            <Text style={styles.buttonText}>
              Practice
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
  },
  buttonContainer: {
    gap: 55,
  },
  button: {
    aspectRatio: 1,
    width: '65%',
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    padding: 15,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 6 }, // Position of the shadow
    shadowOpacity: 0.5, // Opacity of the shadow
    shadowRadius: 7,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: '600',
    padding: 15,
    color: '#000',
  },
});

export default App;
