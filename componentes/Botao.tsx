import { Pressable, Text, StyleProp, ViewStyle, TextStyle } from "react-native";

type Props = {
    title?: string;
    onPress?: () => void;
    color?: string;
    textColor?: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
};

export default function Botao(props: Props) {
    const {
        title = "Título",
        onPress,
        color = "#4a6db9",
        textColor = "#000000",
        style,
        textStyle
    } = props;

    return (
        <Pressable
            onPress={onPress}
            style={[
                {
                    backgroundColor: color,
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    borderRadius: 18,
                },
                style
            ]}
        >
            <Text
                style={[
                    { color: textColor },
                    textStyle
                ]}
            >
                {title}
            </Text>
        </Pressable>
    );
}