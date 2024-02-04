import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <SafeAreaView>
        <View>
            
        </View>
        <View>
          <Image
            source={{ uri: "../assets/question-mark.png" }}
            style={styles.banner}
          />
        </View>

        <View>
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}
            placeholder="Name"
            //   keyboardType="numeric"
          />
        </View>
        <View> 
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Question")}
          >
            {/* onPress={onPress} */}
            <Text>Start</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  button: {
     alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "100%",
    borderRadius: 20,
  },
  input: {
    alignItems: "center",
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    borderColor: "#DDDDDD",
    // padding: 10,
    // width: "100%",

    borderRadius: 20, 
  },
});
