import { StatusBar } from 'expo-status-bar'
import React from 'react'
import BoldText from "@/screens/TestScreen";
import { StyledView } from '@/components/Styled';
export default function App() {
  return (
    <StyledView className="flex-1 bg-white">
      <BoldText></BoldText>
      <StatusBar style="auto" />
    </StyledView>
  )
}
