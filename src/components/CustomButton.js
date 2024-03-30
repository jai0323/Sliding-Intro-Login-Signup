import { Pressable, Text } from "react-native";
import { COLOR, SIZES } from "../constants/theme";

function CustomButton({title, onPress}) {
    return(
        <Pressable onPress={onPress}>
            <Text style={{color:'#FFFFFF', fontWeight: 500, fontSize: SIZES.h3}}>{title}</Text>
        </Pressable>
    )
}

export default CustomButton;
