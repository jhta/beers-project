import { Button } from 'rebass'

const CustomButton = ({ children, ...rest }) => (
  <Button
    bg="transparent"
    border={[1]}
    borderColor="white"
    borderRadius={0}
    css={{
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#e8b504',
        color: 'black',
        // transform: 'scale(1.04)',
      },
    }}
    {...rest}
  >
    {children}
  </Button>
)

export default CustomButton
