import HomeSvg from '@/assets/svg/home.svg'
import MineSvg from '@/assets/svg/mine.svg'
import { Svg } from '@/components/Svg/Svg'

interface Props {
  route: Icons
  isFocused: boolean
}

const IconsMap = {
  home: HomeSvg,
  user: MineSvg,
}

export enum Icons {
  home = 'home',
  user = 'user',
}

export function BottomTabBarIcons(props: Props) {
  return (
    <>
      <Svg
        SvgComponent={IconsMap[props.route]}
        size={24}
        active={props.isFocused}
      />
    </>
  )
}
