import ImageViewer from 'react-native-image-zoom-viewer'
import { Func } from '@/shared/types'
import React from 'react'
import { Actionsheet } from 'native-base'
import { List } from 'react-native-paper'
import { saveToAlbum } from '@/shared/utils/util'
import Toast from 'react-native-toast-message'

export function ZoomImage({
  close,
  ...props
}: React.ComponentProps<typeof ImageViewer> & { close: Func }) {
  return (
    <ImageViewer
      renderHeader={() => <Toast />}
      enableSwipeDown={true}
      onCancel={close}
      onClick={close}
      onSave={saveToAlbum}
      menuContext={{
        saveToLocal: '保存到相册',
        cancel: '取消',
      }}
      menus={({ cancel, saveToLocal }) => {
        return (
          <>
            <Actionsheet isOpen={true} onClose={() => cancel()}>
              <Actionsheet.Content>
                <List.Section className={'w-full'}>
                  <List.Item title={'保存到相册'} onPress={saveToLocal} />
                  <List.Item title={'取消'} onPress={cancel} />
                </List.Section>
              </Actionsheet.Content>
            </Actionsheet>
          </>
        )
      }}
      {...props}
    />
  )
}
