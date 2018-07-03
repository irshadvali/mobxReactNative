/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Home from "./src/component/Home";
import Second from "./src/component/Second";
import { createStackNavigator } from "react-navigation";

type Props = {};
const ModalNavigator = createStackNavigator({
  Home: { screen: Home },
  Second: { screen: Second }
});
export default ModalNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
