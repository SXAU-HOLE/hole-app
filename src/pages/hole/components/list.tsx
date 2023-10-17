import {FlatList, StatusBar, View} from 'react-native'
import React, {useState} from 'react'
import {useTheme} from 'react-native-paper'
import Page from '@/components/Page'
import {HoleInfo} from './HoleInfo'
import {LoadMore} from "@/components/LoadMore";
import {MyRefreshControl} from "@/components/RefreshControl";
import {UseInfiniteQueryResult} from "@tanstack/react-query";
import {flatInfiniteQueryData} from "@/utils/utils";

type HoleListProps = UseInfiniteQueryResult

const HoleList = ({isSuccess, data, hasNextPage, fetchNextPage}: HoleListProps) => {
    const theme = useTheme()

    const [refreshing, setRefreshing] = useState(false)
    const {data: flatData, isEmpty} = flatInfiniteQueryData(data)

    const onRefresh = async () => {
        if(!hasNextPage) return

        await fetchNextPage()
        setRefreshing(false)
    }

    return (
        <Page>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={theme.colors.background}
            />

            <View>
                {isSuccess && (
                    <FlatList
                        data={flatData}
                        ListFooterComponent={() => (
                            <LoadMore text={'没有更多帖子了哦'} hasNextPage={false}></LoadMore>
                        )}
                        renderItem={({item}) => {
                           return item.map((e: any) => (
                                <HoleInfo data={e} key={e.id} />
                           ))
                        }}
                        refreshing={true}
                        refreshControl={<MyRefreshControl refreshing={refreshing}/>}
                        onEndReachedThreshold={0.1}
                        onEndReached={onRefresh}
                    ></FlatList>
                )}
            </View>
        </Page>
    )
}

export default HoleList
