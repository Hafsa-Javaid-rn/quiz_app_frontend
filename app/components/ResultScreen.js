import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";

export default function ResultScreen({ score, total, restart }) {
  return (
    <ImageBackground
    source={require("../../assets/images/result.jpg")} 
    style={{ flex: 1, justifyContent: "center" , padding: 20 }}
    resizeMode="cover"
  >
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 48, fontWeight: "bold", color:"white" }}>Quiz Finished!</Text>
      <Text style={{ fontSize: 30, marginTop: 10 ,color:"white"}}>
        You scored {score} / {total}
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "rgb(60, 128, 82)",
          padding: 12,
          borderRadius: 10,
        }}
        onPress={restart}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Restart Quiz</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}
