import {View} from "react-native";
import {Text, useTheme} from "react-native-paper";

interface Props {
    text?: string
    hasNextPage: boolean
}

export function LoadMore({hasNextPage, text}: Props) {
    const theme = useTheme()

    return (
        <View className={'w-screen px-5 flex flex-row items-center py-10 justify-center'}>
            {
                hasNextPage ? (
                        <Text>Loading</Text>
                    ) :
                    (
                        <Text style={{color: theme.colors.surfaceVariant}}>
                            {text ? text : '没有更多了哦'}
                        </Text>
                    )
            }
        </View>
    )
}
