import { useEffect, useState } from 'react'
import { View, Image } from 'react-native'

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

  return (
    <View
      className={'w-full '}
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
    >
      {imgs.length ? (
        imgs.map((img, index) => (
          <FullWidthImage uri={img} width={width} key={index}></FullWidthImage>
        ))
      ) : (
        <></>
      )}
    </View>
  )
}
