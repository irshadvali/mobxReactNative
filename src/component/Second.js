//import libraries and files
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { observer } from "mobx-react/native";
import HomeModel from "../model/HomeModel";
//Component
@observer
class Second extends Component {
  componentDidMount() {
    setTimeout(function() {
      HomeModel.setFirstName("Shaikh");
    }, 3000);
  }
  render() {
    let testText = "";
    if (
      HomeModel.dataResult &&
      HomeModel.dataResult.info &&
      HomeModel.dataResult.info.seed
    ) {
      testText = HomeModel.dataResult.info.seed;
    }
    return (
      <View style={styles.container}>
        <Text>{HomeModel.firstname}</Text>
      </View>
    );
  }
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//To make this component available to the app
export default Second;
