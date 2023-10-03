import React from "react";
import {StyledView,StyledText} from "@/components/Styled";

export default function Footer() {
    return(
        <StyledView className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <StyledView className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <StyledText className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 hole-app. All Rights Reserved</StyledText>
            </StyledView>
        </StyledView>
    )
}