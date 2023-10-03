import React from "react";

import {StyledText, StyledView} from "@/components/Styled";
import SearchBar from "@/components/SearchBar/SearchBar";
import SearchBarv2 from "@/components/SearchBar/SearchBarv2";
import Footer from "@/components/Footer";
import LoginScreen from "./LoginScreen";
export default function BoldText() {
    return(
        <StyledView>
            
            {/* <SearchBar /> */}
            <LoginScreen />
            <Footer />
            {/* <SearchBarv2 /> */}
        </StyledView>
    )
}