import {StatusBar, View} from "react-native";
import {useHoleList} from "@/query/hole";
import {useTheme} from "react-native-paper";
import HoleList from "@/pages/hole/components/list";

export function HoleLatest() {
    const query = useHoleList()
    const theme = useTheme()

    return (
        <View>
            <StatusBar barStyle={'dark-content'} backgroundColor={theme.colors.background}></StatusBar>
            <HoleList {...query}></HoleList>
        </View>
    );
}

