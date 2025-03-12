import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";

// Define colors directly in component to avoid import issues
const COLORS = {
  background: "#121212",
  primary: "#5B3DF8",
  primaryLight: "#7B5BFF",
  text: "#FFFFFF",
};

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Your search for the{"\n"}next dream job{"\n"}is over
            </Text>
            <Text style={styles.rocketIcon}>🚀</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.highlightButton]}
              activeOpacity={0.8}
              onPress={() => router.push("/(tabs)/")}
            >
              <Text style={styles.buttonText}>Start Searching →</Text>
            </TouchableOpacity>
            // In WelcomeScreen.js
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={() => router.push("/(tabs)/search")}
            >
              <Text style={styles.buttonText}>Find Gigs Nearby</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={() => router.push("/(tabs)/profile")}
            >
              <Text style={styles.buttonText}>Post a Job</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  safeArea: {
    flex: 1,
    paddingTop: 40, // For status bar
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  titleContainer: {
    marginBottom: 80,
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: COLORS.text,
    textAlign: "center",
    lineHeight: 45,
  },
  rocketIcon: {
    fontSize: 40,
    marginTop: 10,
  },
  buttonContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  highlightButton: {
    backgroundColor: COLORS.primaryLight, // Slightly lighter purple for the main button
  },
  buttonText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default WelcomeScreen;
