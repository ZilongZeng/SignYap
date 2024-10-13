import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity, 
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";

import { Camera, useCameraPermission, useCameraDevice } from "react-native-vision-camera";

const alphabet: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const letterAssets: Record<string, any> = {
  A: require("../../assets/aslLetters/A.png"),
  B: require("../../assets/aslLetters/B.png"),
  C: require("../../assets/aslLetters/C.png"),
  D: require("../../assets/aslLetters/D.png"),
  E: require("../../assets/aslLetters/E.png"),
  F: require("../../assets/aslLetters/F.png"),
  G: require("../../assets/aslLetters/G.png"),
  H: require("../../assets/aslLetters/H.png"),
  I: require("../../assets/aslLetters/I.png"),
  J: require("../../assets/aslLetters/J.png"),
  K: require("../../assets/aslLetters/K.png"),
  L: require("../../assets/aslLetters/L.png"),
  M: require("../../assets/aslLetters/M.png"),
  N: require("../../assets/aslLetters/N.png"),
  O: require("../../assets/aslLetters/O.png"),
  P: require("../../assets/aslLetters/P.png"),
  Q: require("../../assets/aslLetters/Q.png"),
  R: require("../../assets/aslLetters/R.png"),
  S: require("../../assets/aslLetters/S.png"),
  T: require("../../assets/aslLetters/T.png"),
  U: require("../../assets/aslLetters/U.png"),
  V: require("../../assets/aslLetters/V.png"),
  W: require("../../assets/aslLetters/W.png"),
  X: require("../../assets/aslLetters/X.png"),
  Y: require("../../assets/aslLetters/Y.png"),
  Z: require("../../assets/aslLetters/Z.png"),
};

const shuffleLetters = (letters: string[]): string[] => {
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]]; // swap
  }

  return letters;
};

const CameraView = () => {
  const navigation = useNavigation();
  const [letters, setLetters] = useState<string[]>(alphabet); // remove hard-code in future
  const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0);

  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back'); // change to 'front' when testing on mobile

  useEffect(() => {
    shuffleLetters(alphabet);
  }, [])

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleNextLetter}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      ),
    });
  }, [hasPermission, navigation]);

  useEffect(() => {
    if (currentLetterIndex >= letters.length - 1) {
      const newLetters = shuffleLetters(alphabet);
      setLetters(newLetters);
      setCurrentLetterIndex(0);
    }
  }, [currentLetterIndex]);

  if (!hasPermission) {
    return <ActivityIndicator />;
  }

  if (!device) {
    return <Text>Camera device not found</Text>;
  }

  const handleNextLetter = () => {
    if (currentLetterIndex >= letters.length - 1) {
      const newLetters = shuffleLetters(alphabet);
      setLetters(newLetters);
      setCurrentLetterIndex(0);
    } else {
      setCurrentLetterIndex((prevIndex) => prevIndex + 1);
    }
  };

  const currentLetter = letters[currentLetterIndex].toUpperCase();
  const currentLetterImage = letterAssets[currentLetter];

  return (
    <View style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
      <View style={styles.overlayContainer}>
        {currentLetterImage && (
          <Image source={currentLetterImage} style={styles.letterImage} />
        )}
        <Text style={styles.subtitleText}>
          Follow along to get the next letter
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlayContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
  },
  letterText: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#4b2e83",
    borderRadius: 15,
    textAlign: "center",
    paddingHorizontal: 35,
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  letterImage: {
    height: 175,
    width: 175,
    borderRadius: 15,
    marginBottom: 20,
  },
  skipButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default CameraView;