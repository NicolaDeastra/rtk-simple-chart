import * as React from 'react'

import { Box, Center, Heading } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

import CardContainer from '../components/CartContainer'

function CartPage() {
  const product = useSelector((state) => state.product.items)
  const itemTotal = useSelector((state) => state.product.items.length)
  const total = useSelector((state) => state.product.total)

  var roundedString = total.toFixed(2)
  var newTotal = Number(roundedString)

  return (
    <Box bg="#f6f6f6" h="100vh">
      <Center mx="auto">
        <Heading>Shopping Cart</Heading>
      </Center>
      <CardContainer itemTotal={itemTotal} data={product} total={newTotal} />
    </Box>
  )
}

export default CartPage
