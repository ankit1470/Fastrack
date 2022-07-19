import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Box,
  Flex,
  Image,Text
} from '@chakra-ui/react'

function Checkout(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
       <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
           onClick={onOpen}
            >
            Checkout
          </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Confirm Purchase</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
        {props.cart.map(product=>{
            return (
                <Box key={product.id}>
                 <Flex>
                    <Box>
                        <Image src={product.img} objectFit={"contain"} boxSize={"100px"} border={"1px solid black"}></Image>
                    </Box>
                    <Box maxW={"250px"} ml="1rem">
        <Text fontSize="lg">{product.Title}</Text>
                    </Box>
                 </Flex>
                </Box>
            )
        })}
        
    
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={props.checkoutHandler}>
              Confirm
            </Button>
         
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
export default Checkout