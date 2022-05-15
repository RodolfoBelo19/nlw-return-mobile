import React, { useState } from "react";
import { 
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

import { feedbackTypes } from "../../utils/feedbackTypes";
import { style } from "./style";
import { theme } from "../../theme";

import { FeedbackType } from "../Widget";
import { ScreenButton } from "../ScreenButton";
import { Button } from "../Button";

import { ArrowLeft } from "phosphor-react-native";
import { captureScreen } from "react-native-view-shot";
import * as FileSystem from "expo-file-system";
import { api } from "../../libs/api";

interface Props {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent } : Props) {

  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [screenshot, setScreenshot] = useState< string | null >(null);
  const [comment, setComment] = useState("")

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8
    })
      .then(uri => setScreenshot(uri))
      .catch(error => console.log(error));
  }

  function handleScreenshotRemove() {
    setScreenshot(null);
  }

  async function handleSendFeedback() {
    if(isSendingFeedback) {
      return;
    }

    setIsSendingFeedback(true);
    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' });

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment
      });

      onFeedbackSent();

    } catch(error) {
      console.log(error);
      setIsSendingFeedback(false);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity
          onPress={onFeedbackCanceled}
        >
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={style.titleContainer}>
          <Image
            source={feedbackTypeInfo.image}
            style={style.image}
          />
          <Text style={style.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        style={style.input}
        placeholder="O que deu errado?"
        placeholderTextColor={theme.colors.text_secondary}
        onChangeText={setComment}
      />

      <View style={style.footer}>
        <ScreenButton 
          onRemoveShot={handleScreenshotRemove}
          onTakeShot={handleScreenshot}
          screenshot={screenshot}
        />

        <Button
          onPress={handleSendFeedback}
          isLoading={isSendingFeedback}
        />
      </View>
    </View>
  )
}