import React from "react";
import {StyledView,StyledText,StyledButton} from "@/components/Styled";
import { StyleSheet } from "react-native";
import * as COLORS from '@/constants/COLOR'
import Icon from 'react-native-vector-icons/Feather';
export default function Card() {
    return(
        <StyledView className=" flex-column justify-center items-center ">
        <StyledView className="w-2/3 rounded-lg shadow-lg" style={styles.card}>
        <StyledView className="px-6 py-4  flex flex-row justify-center">
        <Icon name="info" size={23} color={COLORS.TEXT_COLOR}/>
          <StyledText className="" style={styles.text}>
            密码为注册设置的密码哦，第一次来可以点击下方的注册按钮~
          </StyledText>
        </StyledView>
      </StyledView>
      </StyledView>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.SECONDARY_COLOR
    },
    text: {
        color: COLORS.TEXT_COLOR
    }
})