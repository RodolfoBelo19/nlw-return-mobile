import React from "react";
import { View, Text } from "react-native";
import { Copyright } from "../Copyright";
import { Option } from "../Option";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { style } from "./style";
import { FeedbackType } from "../Widget";

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChanged } : Props) {
  return (
    <View>
      <Text
        style={style.title}
      >
        Deixe seu feedback
      </Text>
      <View
        style={style.options}
      >
        {
          Object
          .entries(feedbackTypes)
          .map(([key, value]) => (
            <Option
              key={key}
              title={value.title}
              image={value.image}
              onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
            />
          ))
        }
      </View>

      <Copyright />
    </View>
  )
}