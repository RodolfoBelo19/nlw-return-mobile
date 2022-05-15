import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const style = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 40,
    color: theme.colors.text_on_brand_color,
    fontFamily: theme.fonts.medium
  },
  options: {
    width: '100%',
    marginBottom: 48,
    flexDirection: 'row',
    justifyContent: 'center',
  }
})