import {useSelector,useDispatch} from "react-redux";
import {fetchCart,addOrder} from "../Redux/action";
import {useEffect} from "react"
import {Box,Heading,Stack,Image,Text, useColorModeValue,Button} from  "@chakra-ui/react"
import {DeleteIcon} from "@chakra-ui/icons"
import {deleteProductCart} from "../Redux/action"
import Checkout from "./Checkout";
import Navbar from "./Navbar";
function Cart() {
   const cart = useSelector(store => store.companyData.cart);
  
   const removeProduct=(id)=>{
    dispatch(deleteProductCart(id))
     console.log("rem",id)
   }

    const dispatch = useDispatch();
    useEffect(()=>{
   if(cart?.length===0){
    dispatch(fetchCart())
   }
    },[cart?.length,dispatch])

    const checkoutHandler = ()=>{
      dispatch(addOrder(cart))
    }
  return (
    <Box>
        <Navbar/>
        <Heading as="h2" size="xl" textAlign="center">Cart</Heading>
        {cart.length && cart.map(product =>{
          return <CartItem key={product.id} img={product.img} title={product.Title} description={product.Decription} removeProduct={removeProduct} id={product.id} price={product.Price}/>
        })}
    
      <Checkout cart={cart} checkoutHandler={checkoutHandler}/>  
        
    </Box>
  
  )
}

function CartItem(props){
return(
  
  <Box  border={"1px solid black"} rounded="lg" width={"fit-content"}  margin="auto">
    <Stack direction={{base:"column",md:"row"}} justifyContent="center" alignItems="center" >
    <Box height={"300px"} width={"300px"} >
      <Image src={props.img}/>
    </Box>
    <Box height={"300px"} width={"300px"} >
      <Stack p={4}>
      <Heading as="h3" size="lg">{props.title}</Heading>
      <Text>{props.description}</Text>
      <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {props.price}
            </Text>
            <Button variant={"solid"} leftIcon={<DeleteIcon/>} onClick={() => props.removeProduct(props.id)}>Remove</Button>
      </Stack>
    </Box>
    </Stack>
   
  </Box>
)
}
export default Cart