import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigations from "./navigations/Navigations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Question from "./screens/Question";
 

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
     {/* <Text>Open up App.js to start working on your app!</Text>   */}
      <NavigationContainer>
        {/* <Navigations /> */}
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome" }}
          />

          <Stack.Screen name="Question" component={Question}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    // backgroundColor: "#fff",
    //  alignItems: "center",
    // justifyContent: "center",
  },
});
