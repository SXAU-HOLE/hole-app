import {RefreshControl, RefreshControlProps} from "react-native";
import {useTheme} from "react-native-paper";

export function MyRefreshControl(props: RefreshControlProps) {
    const theme = useTheme()
    return (
        <RefreshControl colors={[theme.colors.primary]} {...props} />
    )
}
