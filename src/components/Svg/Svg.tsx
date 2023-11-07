import { SvgProps } from 'react-native-svg'
import { useTheme } from 'react-native-paper'
import React from 'react'

type Props = {
  SvgComponent: React.FC<SvgProps>
  size: number
  active?: boolean
} & SvgProps

export function Svg({ SvgComponent, size, active, style, ...props }: Props) {
  const theme = useTheme()

  return (
    <SvgComponent
      width={size}
      height={size}
      style={style}
      color={active ? theme.colors.primary : theme.colors.surfaceVariant}
      {...props}
    />
  )
}
