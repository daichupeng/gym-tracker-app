import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { signUpWithEmail, signInWithEmail, logoutEmail } from "../auth/emailAuth";
import { signInWithGoogle, signOutGoogle } from "../auth/googleAuth";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const user = await signUpWithEmail(email, password);
    if (user) {
      Alert.alert("Success", "User signed up successfully!");
    } else {
      Alert.alert("Error", "Could not sign up");
    }
  };

  const handleSignIn = async () => {
    const user = await signInWithEmail(email, password);
    if (user) {
      Alert.alert("Success", "Logged in successfully!");
    } else {
      Alert.alert("Error", "Login failed");
    }
  };

  const handleGoogleSignIn = async () => {
    const user = await signInWithGoogle();
    if (user) {
      Alert.alert("Success", "Logged in with Google!");
    } else {
      Alert.alert("Error", "Google Sign-In failed");
    }
  };

  const handleSignOut = async () => {
    await logoutEmail();
    await signOutGoogle();
    Alert.alert("Logged Out", "You have been signed out");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Sign Up / Login</Text>

      {/* Email/Password Authentication */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderBottomWidth: 1, marginBottom: 10, padding: 5 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderBottomWidth: 1, marginBottom: 20, padding: 5 }}
      />

      <Button title="Sign Up with Email" onPress={handleSignUp} />
      <Button title="Sign In with Email" onPress={handleSignIn} />
      
      {/* Google Authentication */}
      <Button title="Sign in with Google" onPress={handleGoogleSignIn} color="blue" />

      {/* Sign Out */}
      <Button title="Sign Out" onPress={handleSignOut} color="red" />
    </View>
  );
};

export default AuthScreen;
