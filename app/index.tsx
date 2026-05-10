// App.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("elementary221b@gmail.co");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.plusVertical}></View>
        <View style={styles.plusHorizontal}></View>
      </View>

      <Text style={styles.heading}>Sign In</Text>

      <Text style={styles.subHeading}>
        Let’s experience the joy of telecare AI.
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password..."
          secureTextEntry
          style={styles.passwordInput}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In →</Text>
      </TouchableOpacity>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>f</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>G</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>◎</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.signupText}>
        Don’t have an account?{" "}
        <Text style={styles.greenText}>Sign Up.</Text>
      </Text>

      <Text style={styles.forgotText}>Forgot your password?</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 25,
    justifyContent: "center",
  },

  logoContainer: {
    alignSelf: "center",
    marginBottom: 25,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  plusVertical: {
    position: "absolute",
    width: 14,
    height: 40,
    backgroundColor: "#8CD11B",
    borderRadius: 10,
  },

  plusHorizontal: {
    position: "absolute",
    width: 40,
    height: 14,
    backgroundColor: "#8CD11B",
    borderRadius: 10,
  },

  heading: {
    fontSize: 34,
    fontWeight: "700",
    textAlign: "center",
    color: "#222",
  },

  subHeading: {
    textAlign: "center",
    color: "gray",
    marginTop: 10,
    marginBottom: 40,
    fontSize: 14,
  },

  inputContainer: {
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "600",
    color: "#222",
  },

  input: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#8CD11B",
    borderRadius: 15,
    paddingHorizontal: 18,
    paddingVertical: 15,
    fontSize: 15,
  },

  passwordInput: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 18,
    paddingVertical: 15,
    fontSize: 15,
  },

  button: {
    backgroundColor: "#8CD11B",
    paddingVertical: 17,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },

  socialButton: {
    width: 55,
    height: 55,
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  socialText: {
    fontSize: 22,
    fontWeight: "600",
  },

  signupText: {
    textAlign: "center",
    marginTop: 35,
    color: "#333",
    fontSize: 14,
  },

  greenText: {
    color: "#8CD11B",
    fontWeight: "600",
  },

  forgotText: {
    textAlign: "center",
    marginTop: 12,
    color: "#8CD11B",
    fontSize: 14,
  },
});