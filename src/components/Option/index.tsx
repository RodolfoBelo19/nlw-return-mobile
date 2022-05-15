import React from "react";
import { 
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  Text
 } from "react-native";
import { style } from "./style";

interface Props extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export function Option({ title, image, ...rest } : Props) {
  return (
    <TouchableOpacity 
      style={style.container}
      {...rest}
    >
      <Image 
        source={image}
        style={style.image}
      />

      <Text
        style={style.title}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}