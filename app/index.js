import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import AuthScreen from "./components/AuthScreen";
import CategoryScreen from "./components/CategoryScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import { quizData } from "./data";

export default function App() {
  const [user, setUser] = useState(null); // track login
  const [stage, setStage] = useState("categories");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const startQuiz = (category, difficulty) => {
    setSelectedCategory(category);
    setSelectedDifficulty(difficulty);
    setQuestions(category.difficulties[difficulty]);
    setStage("quiz");
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setStage("result");
  };

  const restart = () => {
    setScore(0);
    setSelectedCategory(null);
    setSelectedDifficulty(null);
    setQuestions([]);
    setStage("categories");
  };

  if (!user) {
    return <AuthScreen onAuth={setUser} />;
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      {stage === "categories" && (
        <CategoryScreen data={quizData.categories} startQuiz={startQuiz} />
      )}
      {stage === "quiz" && (
        <QuizScreen
          questions={questions}
          finishQuiz={finishQuiz}
          category={selectedCategory}
          difficulty={selectedDifficulty}
        />
      )}
      {stage === "result" && (
        <ResultScreen score={score} total={questions.length} restart={restart} />
      )}
    </SafeAreaView>
  );
}
