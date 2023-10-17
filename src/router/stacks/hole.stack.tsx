import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {HoleDetail} from "@/pages/hole/HoleDetail";

const HoleStack = createNativeStackNavigator()

const HoleStacks = () => {
    return (
        <HoleStack.Navigator screenOptions={{
            headerShown: false,
            statusBarColor: '#fff',
            statusBarStyle: 'dark',
        }}>
            <HoleStack.Screen name={'detail'} component={HoleDetail}></HoleStack.Screen>
            {/*<HoleStack.Screen name={'hot'} component={HoleHot}></HoleStack.Screen>*/}
        </HoleStack.Navigator>
    )
}

export default HoleStacks
