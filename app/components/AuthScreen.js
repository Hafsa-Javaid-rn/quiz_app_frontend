// app/components/AuthScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";

export default function AuthScreen({ onAuth }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    // Dummy authentication → just go forward
    onAuth({ email: email || "guest@example.com" });
  };

  return (
    <ImageBackground
      source={require("../../assets/images/signup.jpg")} // make sure path is correct
      style={{ flex: 1, justifyContent: "center", padding: 20 }}
      resizeMode="cover"
    >
      <View style={{  padding: 20, borderRadius: 12 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20, textAlign: "center", color:"white" }}>
          {isLogin ? "Login" : "Sign Up"}
        </Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            padding: 10,
            marginBottom: 15,
            backgroundColor: "#fff",
          }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8,
            padding: 10,
            marginBottom: 15,
            backgroundColor: "#fff",
          }}
        />

        <TouchableOpacity
          style={{ backgroundColor: "#4f46e5", padding: 12, borderRadius: 8, marginBottom: 10 }}
          onPress={handleAuth}
        >
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 16, fontWeight: "600" }}>
            {isLogin ? "Login" : "Sign Up"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={{ color: "rgb(196, 179, 211)", textAlign: "center" }}>
            {isLogin ? "Don’t have an account? Sign Up" : "Already have an account? Login"}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
