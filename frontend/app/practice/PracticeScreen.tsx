import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import Emoji from '@/components/Emoji';

const PracticeScreen = () => {
  return (
    <LinearGradient colors={["#FFFFFF", "#F5E9FE"]} style={styles.container}>
      <Text style={styles.title}>Select a practice mode</Text>

      <View style={styles.buttonContainer}>
        <Link href="../error/WIP" asChild>
          <TouchableOpacity style={styles.button}>
            <Emoji emoji="🌱" size={35} />
            <Text style={styles.buttonText}>Basic</Text>
          </TouchableOpacity>
        </Link>

        <Link href="../error/WIP" asChild>
          <TouchableOpacity style={styles.button}>
            <Emoji emoji="🌿" size={35} />
            <Text style={styles.buttonText}>Intermediate</Text>
          </TouchableOpacity>
        </Link>

        <Link href="../error/WIP" asChild>
          <TouchableOpacity style={styles.button}>
            <Emoji emoji="🌳" size={35} />
            <Text style={styles.buttonText}>Advanced</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
  },
  buttonContainer: {
    gap: 30,
  },
  button: {
    width: 350,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    padding: 15,
    color: '#000',
  },
});

export default PracticeScreen;
