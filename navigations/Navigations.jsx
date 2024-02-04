import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Question from "../screens/Question";

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Welcome" }}
      />

      <Stack.Screen name="Question" component={Question}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigations;

const styles = StyleSheet.create({});
