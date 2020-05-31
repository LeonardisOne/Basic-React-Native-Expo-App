import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Button,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text pressed");
  return (
    // use SafeAreaView instead of View to deal with notch
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello to React Native!</Text>
      {/* require() bundle the image together with app, increase build size*/}
      {/* <Image source={require("./assets/icon.png")} /> */}
      {/* no feedback to user when touched */}
      {/* <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}>
        <Image
          source={{
            width: 200, //require dimension for web images
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableWithoutFeedback> */}
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image
          source={{
            width: 200, //require dimension for web images
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      {/* on iOS is a text button change text color, but Android is a rectangle button so color change background color*/}
      <Button
        color="orange"
        title="Click me!"
        onPress={() => console.log("button pressed")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    // needed for text to be at center, or notch can block the text
    alignItems: "center",
    justifyContent: "center",
  },
});
