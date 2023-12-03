import { StyleSheet, Text, View } from "react-native";
import AppleOAuth from "../src/components/auth/AppleOAuth";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Locked In</Text>
        <Text style={styles.subtitle}>Time to focus.</Text>
      </View>
      <View style={styles.authContainer}>
        <AppleOAuth />
        <AppleOAuth />
        <AppleOAuth />
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
    backgroundColor: "#F3FF82",
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  authContainer: {
    flex: 1,
    backgroundColor: "#fff",
    rowGap: 24,
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
