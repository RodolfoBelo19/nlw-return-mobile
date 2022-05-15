import React, { 
  Text, 
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator
}  from "react-native";
import { theme } from "../../theme";
import { style } from "./style";

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
}

export function Button({ isLoading, ...rest } : Props) {
  return (
    <TouchableOpacity 
      style={style.container}
      {...rest}
    >
      {
        isLoading 
          ? 
          <ActivityIndicator
            color={theme.colors.text_on_brand_color}
          />
          :
          <Text style={style.title}>
            Enviar Feedback
          </Text>
      }
    </TouchableOpacity>
  )
}