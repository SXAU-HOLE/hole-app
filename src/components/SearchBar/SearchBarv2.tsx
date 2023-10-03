import {
  StyledView,
  StyledTextInput,
  StyledTouchbleOpacity,
} from '@/components/Styled'
import Icon from 'react-native-vector-icons/FontAwesome'
function SearchBarv2() {
  return (
    <StyledView className="container h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <StyledView className="relative">
        <StyledTextInput
          className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
          placeholder="Search something..."
        />
        <StyledTouchbleOpacity className="absolute top-4 right-3">
          <Icon name="search" size={20} color="green" />
        </StyledTouchbleOpacity>
      </StyledView>
    </StyledView>
  )
}
export default SearchBarv2
