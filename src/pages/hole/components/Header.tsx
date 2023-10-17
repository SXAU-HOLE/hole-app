import {Appbar, Text} from "react-native-paper";
import {View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export function HoleHeader() {
    const navigator = useNavigation()

    return (
        <Appbar.Header className={'bg-transparent fixed flex justify-between'}>
            <View className={'flex flex-row items-center'}>
                <Text variant={"headlineMedium"} className={'text-primary'} onPress={() => navigator.navigate('latest')}>时间轴</Text>
                <Text className={'text-2xl text-primary mx-2'}>/</Text>
                <Text variant={'headlineSmall'} className={'text-surface'} onPress={() => navigator.navigate('hot')}>随机漫步</Text>
            </View>
            <Appbar.Action icon="magnify" onPress={() => {
            }}/>
        </Appbar.Header>
    )
}

