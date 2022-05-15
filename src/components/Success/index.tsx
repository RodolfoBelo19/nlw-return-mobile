import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { style } from "./style";

import { Copyright } from "../Copyright";

import successImg from "../../assets/success.png";

interface Props {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback } : Props) {
  return (
    <View style={style.container}>
      <Image
        source={successImg}
        style={style.image}
      />

      <Text
        style={style.title}
      >
        Agradeçemos o seu feedback.
      </Text>

      <TouchableOpacity
        style={style.button}
        onPress={onSendAnotherFeedback}
      >
        <Text
          style={style.buttonTitle}
        >
          Quero enviar outro feedback
        </Text>
      </TouchableOpacity>

      <Copyright/>

    </View>
  )
}