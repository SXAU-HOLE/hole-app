import { DeleteHoleRequest } from '@/apis/hole'
import { ActionsSheet, SheetItem } from '@/components/ActionsSheet'
import { Toast } from '@/utils/toast'
import { useCallback, useMemo, useState } from 'react'
import { Appbar } from 'react-native-paper'

interface Props {
  data: IHole
}

export function HoleActionSheet({ data }: Props) {
  const [isOpne, setIsOpen] = useState(false)

  const sheetList: SheetItem[] = useMemo(
    () => [
      { title: '删除', onPress: () => deleteFunc(data.id) },
      { title: '举报', onPress: () => Toast.info({ text1: '功能正在开发中' }) },
    ],
    [],
  )

  const deleteFunc = async (id: string) => {
    // TODO 删除后刷新列表
    const res = await DeleteHoleRequest({ id })
    if (res) {
      Toast.success('删除成功~')
    }
  }

  const openSheet = useCallback(() => setIsOpen(true), [data])
  const closeSheet = useCallback(() => setIsOpen(false), [data])

  return (
    <>
      <Appbar.Action icon={'dots-vertical'} onPress={openSheet} size={20} />

      <ActionsSheet
        isOpen={isOpne}
        SheetList={sheetList}
        onClose={closeSheet}
      />
    </>
  )
}
