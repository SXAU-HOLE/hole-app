import React from "react";
import {StyledView, StyledTextInput, StyledTouchbleOpacity} from "@/components/Styled";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function SearchBar() {
    return(
        <StyledView className="relative">
            <StyledTextInput className="block w-[350] p-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="搜索" ></StyledTextInput>
            <StyledTouchbleOpacity className="text-white absolute right-2.5 bottom-1 bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                <Icon name="search" size={20} color="white"/>
            </StyledTouchbleOpacity>

        </StyledView>
    )
}