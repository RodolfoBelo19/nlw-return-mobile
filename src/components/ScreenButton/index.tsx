import { Camera, Trash } from "phosphor-react-native";
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { theme } from "../../theme";
import { style } from "./style";

interface Props {
  screenshot: string | null; 
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenButton({ screenshot, onTakeShot, onRemoveShot } : Props) {
  return (
    <TouchableOpacity 
      style={style.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {
        screenshot
        ?
        <View>
          <Image
            style={style.image}
            source={{ uri: screenshot}}
          />

          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={style.removeIcon}
          />
        </View>
        :
        <Camera
          size={24}
          color={theme.colors.text_primary}
          weight="bold"
        />
      }
      
    </TouchableOpacity>
  )
}