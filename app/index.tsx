import { StyleSheet, Text, View } from "react-native";

import { Link } from "expo-router";
import { AppleOAuth } from "../src/components/auth/AppleOAuth";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Locked In</Text>
        <Text style={styles.subtitle}>Time to focus.</Text>
      </View>
      <View style={styles.authContainer}>
        <AppleOAuth />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 960,
    padding: 24,
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    padding: 24,
  },
  authContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 24,
    left: 0,
    right: 0,
    rowGap: 20,
    padding: 24,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
