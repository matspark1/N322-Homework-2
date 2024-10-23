import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subTitle}>
          Lets get a <Text style={styles.accentColor}>workout</Text> in!
        </Text>
      </View>
      <View style={styles.main}>
        <View style={styles.workoutBoxCardio}>
          <Image
            style={styles.img}
            source={require("../../assets/images/cardio.png")}
          />
          <View style={styles.textBox}>
            <Text style={styles.workoutBoxTitle}>Cardio</Text>
            <Text style={styles.workoutBoxSubTitle}>
              Track Your Heart, Elevate Your Health
            </Text>
          </View>
        </View>
        <View style={styles.workoutBoxLifting}>
          <Image
            style={styles.img}
            source={require("../../assets/images/weightlifting.png")}
          />
          <View style={styles.textBox}>
            <Text style={styles.workoutBoxTitle}>Weight Lifting</Text>
            <Text style={styles.workoutBoxSubTitle}>
              Lift Strong, Build Your Power
            </Text>
          </View>
        </View>
        <View style={styles.workoutBoxYoga}>
          <Image
            style={styles.img}
            source={require("../../assets/images/yoga.png")}
          />
          <View style={styles.textBox}>
            <Text style={styles.workoutBoxTitle}>Yoga</Text>
            <Text style={styles.workoutBoxSubTitle}>
              Find Balance, Breathe Peace
            </Text>
          </View>
        </View>
        <View style={styles.workoutBoxBoxing}>
          <Image
            style={styles.img}
            source={require("../../assets/images/martial.png")}
          />
          <View style={styles.textBox}>
            <Text style={styles.workoutBoxTitle}>Martial Arts</Text>
            <Text style={styles.workoutBoxSubTitle}>
              Strengthen Your Body, Sharpen Your Mind
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  img: {
    width: 100,
    height: 100,
  },
  workoutBoxCardio: {
    backgroundColor: "#883CEA",
    flexDirection: "row",
    height: 115,
    borderRadius: 40,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  workoutBoxLifting: {
    backgroundColor: "#009960",
    flexDirection: "row",
    height: 115,
    borderRadius: 40,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  workoutBoxYoga: {
    backgroundColor: "#EDC236",
    flexDirection: "row",
    height: 115,
    borderRadius: 40,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  workoutBoxBoxing: {
    backgroundColor: "#2A5AC9",
    flexDirection: "row",
    height: 115,
    borderRadius: 40,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  textBox: {
    marginLeft: 20,
    width: "70%",
    paddingRight: 40,
  },
  workoutBoxTitle: {
    color: Colors.dark.text,
    fontFamily: "pop-bold",
    fontSize: 20,
  },
  workoutBoxSubTitle: {
    color: Colors.dark.text,
    fontFamily: "pop-med",
    fontSize: 14,
  },
  topView: {
    height: "10%",
    marginTop: 48,
  },
  subTitle: {
    color: Colors.dark.background,
    fontSize: 16,
    fontFamily: "pop-bold",
  },
  accentColor: {
    color: Colors.DEV_MEDIUM,
  },
  title: {
    color: Colors.dark.background,
    fontSize: 34,
    fontFamily: "pop-bold",
  },
  main: {
    height: "100%",
    marginTop: 40,
  },
});
