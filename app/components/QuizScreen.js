import React, { useState } from "react";
import { View, Text, TouchableOpacity , ImageBackground} from "react-native";

export default function QuizScreen({ questions, finishQuiz, category, difficulty }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      finishQuiz(score + (option === questions[current].answer ? 1 : 0));
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/quizScreen.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
    <View style={{ flex: 1, padding: 20, justifyContent: "center"}}>
      <Text style={{ fontSize: 20, marginBottom: 5 , color:"white", fontWeight:"bold"  }}>
        {category.name} - {difficulty.toUpperCase()}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 15, color:"white", fontWeight:"bold"  }}>
        Question {current + 1} of {questions.length}
      </Text>
      <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 20, fontWeight:"bold" , color:"white"  }}>  
        {questions[current].q}
      </Text>
      {questions[current].options.map((opt, i) => (
        <TouchableOpacity
          key={i}
          style={{
            backgroundColor: "rgb(173, 178, 221)",
            padding: 12,
            marginVertical: 5,
            borderRadius: 8,
          }}
          onPress={() => handleAnswer(opt)}
        >
          <Text style={{ fontSize: 16 }}>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
    </ImageBackground>
  );
}
