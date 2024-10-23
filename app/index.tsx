import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
// import { useUser } from "@clerk/clerk-expo";

export default function index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("./../assets/images/logo.png")}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.tagLineTop}>
          Set<Text style={styles.orangeText}>Sync</Text>
        </Text>
        <Text style={styles.tagLineBottom}>The Ultimate Fitness Experience</Text>
        <Button
          style={styles.btn}
          mode="text"
          onPress={() => router.push("/(auth)/sign-in")}
        >
          <Text style={styles.whiteText}>Sign In</Text>
        </Button>
        <Button
          style={styles.btn}
          mode="text"
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text style={styles.whiteText}>Sign Up</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "pop-reg"
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: -30,
  },
  subContainer: {
    padding: 20,
    marginTop: -20,
  },
  logo: {
    width: 300,
    height: 300,
  },
  orangeText: {
    color: Colors.DEV_PRIMARY,
  },
  tagLineTop: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: 'pop-bold'
  },
  tagLineBottom: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'pop-med',
    marginTop: 10,
  },
  tagLine: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 15,
    color: Colors.GRAY,
  },
  btn: {
    backgroundColor: Colors.DEV_PRIMARY,
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 50,
    marginTop: 50,
  },
  whiteText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: 'pop-bold',
    fontSize: 16,
  },
});
