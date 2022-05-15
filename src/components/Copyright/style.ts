import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const style = StyleSheet.create({
    container: {
        marginTop: -10
    },
    text: {
        color: theme.colors.text_secondary,
        fontFamily: theme.fonts.medium,
        textAlign: 'center',
    }
})