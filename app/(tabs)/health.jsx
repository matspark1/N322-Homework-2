import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function health() {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.title}>Your Health</Text>
        <Text style={styles.subTitle}>
          Check your <Text style={styles.accentColor}>workout</Text> and{" "}
          <Text style={styles.accentColor}>health</Text> stats!
        </Text>
      </View>
      <View style={styles.main}>
        <View style={styles.workoutBoxes}>
          <View style={styles.workoutBox}>
            <Image
              style={styles.img}
              source={require("../../assets/images/progressbar1.png")}
            />
            <Text style={styles.workoutBoxSubTitle}>
              <Text style={styles.accentColor}>6429</Text>/10000
            </Text>
          </View>
          <View style={styles.workoutBox}>
            <Image
              style={styles.img}
              source={require("../../assets/images/progressbar2.png")}
            />
            <Text style={styles.workoutBoxSubTitle}>
              <Text style={styles.accentColor}>7hr 02min</Text>
            </Text>
          </View>
          <View style={styles.workoutBox}>
            <Image
              style={styles.img}
              source={require("../../assets/images/progressbar3.png")}
            />
            <Text style={styles.workoutBoxSubTitle}>
              <Text style={styles.accentColor}>953</Text>/2200
            </Text>
          </View>
        </View>
        <View style={styles.workoutBoxBig}>
          <Image
            style={styles.img2}
            source={require("../../assets/images/workouts.png")}
          />
          <View style={styles.textBox}>
            <Text style={styles.workoutBoxTitle2}>Workouts This Month</Text>
            <Text style={styles.workoutBoxSubTitle2}>15/22</Text>
          </View>
        </View>
        <View style={styles.workoutBoxBig}>
          <Image
            style={styles.img2}
            source={require("../../assets/images/workouts2.png")}
          />
          <View style={styles.textBox}>
            <Text style={styles.workoutBoxTitle2}>All Time Workouts</Text>
            <Text style={styles.workoutBoxSubTitle2}>322</Text>
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
    width: 70,
    height: 70,
  },
  img2: {
    width: 100,
    height: 100,
  },
  workoutBoxes: {
    flexDirection: "row",
    borderRadius: 40,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  workoutBoxBig: {
    backgroundColor: Colors.GRAY,
    flexDirection: "row",
    height: 115,
    borderRadius: 40,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  workoutBox: {
    backgroundColor: Colors.GRAY,
    flexDirection: "column",
    height: 122,
    width: 100,
    padding: 15,
    borderRadius: 40,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  workoutBoxTitle2: {
    color: Colors.dark.background,
    fontFamily: "pop-bold",
    fontSize: 16,
  },
  workoutBoxSubTitle2: {
    color: Colors.DEV_PRIMARY,
    fontFamily: "pop-bold",
    fontSize: 20,
  },
  workoutBoxSubTitle: {
    color: Colors.dark.background,
    fontFamily: "pop-bold",
    fontSize: 12,
    top: -2,
  },
  topView: {
    height: "10%",
    marginTop: 48,
  },
  textBox: {
    marginLeft: 20,
    width: "70%",
    paddingRight: 40,
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
