import * as React from 'react'
import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  Divider,
  Button,
} from '@chakra-ui/react'

import Card from './Card'

function CartContainer({ data, total, itemTotal }) {
  return (
    <HStack p="8" alignItems="flex-start">
      <Box boxShadow="xl" p="6" w="60%" borderRadius="md" mr="2rem" bg="white">
        <Stack>
          <Heading size="lg">Cart ({itemTotal} item)</Heading>
          {data?.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              size={product.size}
              color={product.color}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </Stack>
      </Box>

      <Box bg="white" boxShadow="xl" borderRadius="md" p="6" w="25%" h="18rem">
        <Stack spacing="3">
          <Heading size="lg" mb="4">
            The total of
          </Heading>
          <Flex justifyContent="space-between">
            <Text color="gray.600">Temporary amount</Text>
            <Text color="gray.600">${total}</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text color="gray.600">Shipping</Text>
            <Text color="gray.600">Free </Text>
          </Flex>
          <Divider />
          <Flex justifyContent="space-between">
            <Text color="gray.600">The total of </Text>
            <Text color="gray.600">${total} </Text>
          </Flex>
        </Stack>
        <Button
          bg="blue.500"
          w="100%"
          mt="4"
          _hover={{
            bg: 'blue.600',
          }}
        >
          Go to checkout
        </Button>
      </Box>
    </HStack>
  )
}

export default CartContainer
