import { Image, Modal, Pressable, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import { ZoomImage } from '@/components/Image/ZoomImage'
import { useState } from 'react'
import { Func } from '@/shared/types'

interface Props {
  img: string
  open: Func
  i: number
  setIndex: Func
}

export function ImageListItem({ img, open, i, setIndex }: Props) {
  const theme = useTheme()

  return (
    <Pressable
      className={'w-[95%] h-28'}
      onPress={() => {
        open()
        setIndex(i)
      }}
    >
      <Image
        source={{ uri: `${img}` }}
        className={'w-full h-28 rounded-lg'}
        style={{
          resizeMode: 'cover',
          backgroundColor: theme.colors.onBackground,
        }}
      ></Image>
    </Pressable>
  )
}

export function ImageList({ imgs }: { imgs: string[] }) {
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)

  const open = () => {
    setVisible(true)
  }
  const close = () => {
    setVisible(false)
  }

  return (
    <>
      {imgs.length ? (
        <>
          <Modal visible={visible} transparent={true} onRequestClose={close}>
            <ZoomImage
              index={index}
              imageUrls={imgs.map((img) => ({ url: img }))}
              close={close}
            />
          </Modal>
          <View className={'w-full flex flex-row justify-between'}>
            {imgs.slice(0, 3).map((img, index) => (
              <View
                className={'w-[33%] h-28 relative'}
                style={{ width: imgs.length === 1 ? '66%' : '33%' }}
                key={index}
              >
                <ImageListItem
                  img={img}
                  open={open}
                  i={index}
                  setIndex={setIndex}
                ></ImageListItem>
                {/*{imgs.length > 3 && index === 2 && (*/}
                {/*  <View*/}
                {/*    className={*/}
                {/*      'absolute bg-gray-200 rounded-full bottom-0 right-1'*/}
                {/*    }*/}
                {/*  >*/}
                {/*    <Text>还有更多~</Text>*/}
                {/*  </View>*/}
                {/*)}*/}
              </View>
            ))}
          </View>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
