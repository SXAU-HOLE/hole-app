import { useEffect, useState } from 'react'
import { Image, Modal, Pressable, View } from 'react-native'
import { ZoomImage } from '@/components/Image/ZoomImage'

interface Props {
  imgs: string[]
}

export function FullWidthImage({ uri, width }: { uri: string; width: number }) {
  const [height, setHeight] = useState(100)

  useEffect(() => {
    Image.getSize(uri, (w, h) => {
      setHeight((width * h) / w)
    })
  }, [width])

  return (
    <Image source={{ uri }} style={{ height }} className="w-full mb-1"></Image>
  )
}

export function AutoSizeImageList({ imgs }: Props) {
  const [width, setWidth] = useState(0)
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  const open = () => {
    setVisible(true)
  }
  const close = () => {
    setVisible(false)
  }

  return (
    <View
      className={'w-full '}
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
    >
      <Modal visible={visible} transparent={true} onRequestClose={close}>
        <ZoomImage
          index={index}
          imageUrls={imgs.map((img) => ({ url: img }))}
          close={close}
        />
      </Modal>
      {imgs.length ? (
        imgs.map((img, index) => (
          <Pressable
            key={index}
            onPress={() => {
              open()
              setIndex(index)
            }}
          >
            <FullWidthImage uri={img} width={width}></FullWidthImage>
          </Pressable>
        ))
      ) : (
        <></>
      )}
    </View>
  )
}
