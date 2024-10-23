import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Button, onPress } from "react-native-paper";
import { useRouter } from "expo-router";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { Colors } from "@/constants/Colors";

export default function profile() {
  const { signOut } = useClerk();
  const { user } = useUser();
  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (error) {
      console.log("Signout error", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.img3}
        source={require("../../assets/images/pfp.png")}
      />
      <Text style={styles.user}>
        Hello{" "}
        <Text style={styles.accentColor}>
          {user?.emailAddresses[0].emailAddress}
        </Text>
      </Text>
      <Button
        style={styles.button}
        labelStyle={styles.buttonText}
        contentStyle={styles.buttonContent}
        onPress={handleSignOut}
      >
        Sign Out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  accentColor: {
    color: Colors.DEV_MEDIUM,
  },
  img3: {
    width: 200,
    height: 200,
    margin: 30,
  },
  user: {
    fontSize: 24,
    fontFamily: "pop-bold",
    margin: 30,
  },
  button: {
    marginTop: 10,
    backgroundColor: Colors.DEV_PRIMARY,
    borderRadius: 40,
    height: 56,
    width: 200,
  },
  buttonContent: {
    height: 56,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "pop-bold",
    textTransform: "none",
    color: "white",
  },
});
