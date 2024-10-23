import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter, Link } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function Signup() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace("/(tabs)");
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign Up Today</Text>
        {!pendingVerification && (
          <>
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
              onPress={onSignUpPress}
              style={styles.button}
              labelStyle={styles.buttonText}
              contentStyle={styles.buttonContent}
            >
              Sign Up
            </Button>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Have an account?</Text>
              <Link href="/sign-in" style={styles.link}>
                <Text style={styles.linkText}>Sign In</Text>
              </Link>
            </View>
          </>
        )}
        {pendingVerification && (
          <>
            <TextInput
              style={styles.txtInput}
              value={code}
              placeholder="Code..."
              keyboardType="numeric"
              onChangeText={(code) => setCode(code)}
              mode="outlined"
              outlineColor={Colors.DEV_PRIMARY}
              activeOutlineColor={Colors.DEV_PRIMARY}
            />
            <Button
              onPress={onPressVerify}
              style={styles.button}
              labelStyle={styles.buttonText}
              contentStyle={styles.buttonContent}
            >
              Verify Email
            </Button>
          </>
        )}
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
