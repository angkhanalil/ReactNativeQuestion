import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

const Question = ({ route, navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState([]);
  const [next, setNext] = useState(0);
  const [back, setBack] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    getQuestion();
  }, []);

  const getQuestion = async () => {
    const url =
      "https://opentdb.com/api.php?amount=20&category=9&difficulty=medium";
    await fetch(url)
      .then(async (res) => {
        // console.log("res ", await res.json());
        const data = await res.json();
        console.log("data ", data.results[0]);
        setQuestions(data.results); 
        setQuestion(data.results[0]);
      }) 
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    console.log(
      "questions[currentIndex] ",questions[currentIndex]
    )
    setQuestion(questions[currentIndex]);
  }, [currentIndex]);
  return (
    <View style={styles.containner}>
      {question && (
        <View>
          <SafeAreaView>
            <Text style={styles.question}>Question : {question.question}</Text>
            <View>
              <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Option 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Option 2</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>

          <View style={styles.buttom}>
            <TouchableOpacity style={styles.button}   onPress={()=> setCurrentIndex(currentIndex-1)}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text
                style={styles.buttonText}
                // onPress={() => navigation.navigate("Question", questions[next])}
                onPress={()=> setCurrentIndex(currentIndex+1)}
              > 
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  containner: {
    height: "100%",
    padding: 20,
    flex: 0.5,
    width: "100%",
    justifyContent: "center",
  },
  buttom: {
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6781ec",
    padding: 10,
    width: "20%",
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  option: {
    fontSize: 18,
    margin: 5,
    color: "white",
  },
  optionButton: {
    paddingVertical: 10,
    marginVertical: 6,
    backgroundColor: "#6781ec",
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  question: {
    fontSize: 20,
    paddingBottom: 10,
  },
  parent:{

  }
});
