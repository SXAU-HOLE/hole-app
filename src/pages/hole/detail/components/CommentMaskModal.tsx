import { Modal } from 'native-base'
import { useCommentContext } from '@/shared/context/CommentContext'
import { CommentInputForm } from '@/pages/hole/detail/components/CommentInputForm'
import { View } from 'react-native'

export function CommentMaskModal() {
  const { showInput, closeInput } = useCommentContext()

  return (
    <Modal isOpen={showInput} onClose={closeInput} animationPreset={'slide'}>
      <View className={'absolute left-0 right-0 bottom-0'}>
        <CommentInputForm></CommentInputForm>
      </View>
    </Modal>
  )
}
