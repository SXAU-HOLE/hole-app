import {createNativeStackNavigator} from '@react-navigation/native-stack'

const HoleStack = createNativeStackNavigator()

const HoleStacks = () => {
    return (
        <HoleStack.Navigator screenOptions={{headerShown: false}}>
            {/*<HoleStack.Screen name={'latest'} component={HoleList}></HoleStack.Screen>*/}
            {/*<HoleStack.Screen name={'hot'} component={HoleHot}></HoleStack.Screen>*/}
        </HoleStack.Navigator>
    )
}

export default HoleStacks
