import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Colors from "../Constants/Colors";
const CheckmarkButton = (props) => {
  return (
    <Ionicons
      onPress={props.onPress}
      name="md-checkmark-sharp"
      size={props.size ? props.size : 32}
      color={Colors.BLACK}
    />
  );
};

export default CheckmarkButton;

const styles = StyleSheet.create({});
