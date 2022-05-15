import React from "react";
import { View, Text } from "react-native";
import { style } from "./style";

export function Copyright() {
  return (
    <View style={style.container}>
      <Text style={style.text}>
        Edição 8 - NLW 🚀
      </Text>
    </View>
  )
}