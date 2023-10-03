import React from 'react'
import { StyledView, StyledText, StyledButton } from '@/components/Styled'
import { StyleSheet } from 'react-native'
import * as COLORS from '@/constants/COLOR'
import Icon from 'react-native-vector-icons/Feather'
type prop = {
  content: string
}
export default function Card(props:prop) {
  return (
    <StyledView className=" flex-column justify-center pl-5 mb-8 pr-5">
      <StyledView className="w-full rounded-lg shadow-lg" style={styles.card}>
        <StyledView className="px-6 py-4 flex flex-row justify-center items-center">
          <Icon name="info" size={36} color={COLORS.TEXT_COLOR} />
          <StyledText className="pl-1" style={styles.text}>
            {props.content}
          </StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  )
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.SECONDARY_COLOR,
  },
  text: {
    color: COLORS.TEXT_COLOR,
  },
})
