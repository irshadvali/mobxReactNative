//https://randomuser.me/api/?results=10
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import HomeModel from "../model/HomeModel";
import { observer } from "mobx-react/native";
import { getUsersApi } from "../utils/apiRequest";

//Component

@observer
class Home extends Component {
  componentDidMount() {
    getUsersApi().then(resp => {
      console.log(resp);
    });

    setTimeout(function() {
      HomeModel.setFirstName("vali");
    }, 3000);
  }

  goToNextPage = () => {
    const { navigation } = this.props.navigation;
    this.props.navigation.navigate("Second");
  };
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
        <Text>{testText}</Text>
        <Text>{HomeModel.firstname}</Text>
        <Button onPress={() => this.goToNextPage()} title="Click" />
      </View>
    );
  }
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//To make this component available to the app
export default Home;
