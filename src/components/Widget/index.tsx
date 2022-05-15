import React, { useEffect, useRef, useState } from "react";

import { TouchableOpacity } from "react-native";
import { theme } from "../../theme";
import { styles } from "./style";
import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import { Options } from "../Options";
import { Success } from "../Success";
import { Form } from "../Form";

import { feedbackTypes } from "../../utils/feedbackTypes";

export type FeedbackType = keyof typeof feedbackTypes;

export function Widget() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const bottomSheet = useRef<BottomSheet>(null);

  function handlerOpen() {
    bottomSheet.current?.expand();
  }

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={handlerOpen}
      >
        <ChatTeardropDots 
          size={37}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheet}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >

      {
        feedbackSent ?
          <Success onSendAnotherFeedback={handleRestartFeedback} />
          :
          <>
            {
              feedbackType ?
                <Form 
                  feedbackType={feedbackType}
                  onFeedbackCanceled={handleRestartFeedback}
                  onFeedbackSent={handleFeedbackSent}
                />
                :
                <Options onFeedbackTypeChanged={setFeedbackType}/>
            }
          </>
      }
      </BottomSheet>
    </>
  )
}