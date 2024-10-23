import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function Signin() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(tabs)");
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Welcome Back</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.txtInput}
            autoCapitalize="none"
            value={emailAddress}
            keyboardType="email-address"
            onChangeText={(email) => setEmailAddress(email)}
            mode="outlined"
            outlineColor={Colors.DEV_PRIMARY}
            activeOutlineColor={Colors.DEV_PRIMARY}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.txtInput}
            value={password}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            mode="outlined"
            outlineColor={Colors.DEV_PRIMARY}
            activeOutlineColor={Colors.DEV_PRIMARY}
          />
        </View>
        <Button
          onPress={onSignInPress}
          style={styles.button}
          labelStyle={styles.buttonText}
          contentStyle={styles.buttonContent}
        >
          Sign In
        </Button>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <Link href="/sign-up" style={styles.link}>
            <Text style={styles.linkText}>Sign Up</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    height: "70%",
  },
  title: {
    fontSize: 28,
    fontFamily: "pop-bold",
    color: Colors.DEV_PRIMARY,
    marginBottom: 36,
    textAlign: "center",
  },
  txtInput: {
    marginBottom: 16,
    backgroundColor: "white",
    height: 56,
    borderRadius: 400,
    fontFamily: "pop-med",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16,
    position: "relative",
  },
  inputLabel: {
    position: "absolute",
    top: -10,
    left: 8,
    backgroundColor: "white",
    paddingLeft: 4,
    paddingRight: 4,
    zIndex: 1,
    color: Colors.DEV_PRIMARY,
    fontSize: 14,
    fontFamily: "pop-med",
  },
  button: {
    marginTop: 10,
    backgroundColor: Colors.DEV_PRIMARY,
    borderRadius: 40,
    height: 56,
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
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 8,
  },
  signupText: {
    fontFamily: "pop-reg",
    color: "#666",
  },
  link: {
    marginLeft: 4,
  },
  linkText: {
    color: Colors.DEV_PRIMARY,
    fontFamily: "pop-med",
  },
});
