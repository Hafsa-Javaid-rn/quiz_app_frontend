import React from "react";
import { View, Text, TouchableOpacity, FlatList, ImageBackground } from "react-native";

export default function CategoryScreen({ data, startQuiz }) {
  return (
    <ImageBackground
      source={require("../../assets/images/category.jpg")}
      style={{ flex: 1, justifyContent: "center", padding: 20 }}
      resizeMode="cover"
    >
      <View style={{ flex: 1, padding: 20, borderRadius: 12, marginTop: 110 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20, color: "white" }}>
          Select Category & Difficulty
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.name}   
          renderItem={({ item }) => (
            <View style={{ marginBottom: 25 , color:"white"}}>
              <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 10, color: "white" }}>
                {item.name}
              </Text>
              {["easy", "medium", "hard"].map((level) => (
                <TouchableOpacity
                  key={level}
                  style={{
                    backgroundColor: "rgb(6, 3, 17)",
                    padding: 12,
                    marginVertical: 4,
                    borderRadius: 10,
                  }}
                  onPress={() => startQuiz(item, level)}
                >
                  <Text style={{ color: "rgb(225, 211, 228)", fontSize: 16 }}>
                    {level.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}
