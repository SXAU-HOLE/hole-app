import {FlatList, StatusBar, Text, View} from 'react-native'
import React from 'react'
import {useTheme} from 'react-native-paper'
import Page from '@/components/Page'
import {useQuery} from '@tanstack/react-query'
import {GetHoleListRequest} from '@/apis/hole'
import {HoleListMode} from '@/shared/enum'
import {HoleInfo} from './components/HoleInfo'
import {HoleHeader} from "@/pages/hole/components/Header";

const LoadMore = () => {
    return (
        <View>
            <Text className={'border-gray-200'}>没有更多树洞了哦</Text>
        </View>
    )
}

const HoleList = () => {
    const theme = useTheme()

    const {data, isSuccess} = useQuery({
        queryKey: ['hole'],
        queryFn: () =>
            GetHoleListRequest({limit: 10, page: 1, mode: HoleListMode.hot}),
    })

    return (
        <Page>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={theme.colors.background}
            />

            <View>
                {isSuccess && (
                    <FlatList
                        data={data?.items}
                        ListFooterComponent={LoadMore}
                        renderItem={({item}) => (
                            <HoleInfo data={item}></HoleInfo>
                        )}
                    ></FlatList>
                )}
            </View>
        </Page>
    )
}

export default HoleList
