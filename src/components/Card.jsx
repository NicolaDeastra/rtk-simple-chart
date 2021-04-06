import * as React from 'react'
import {
  Box,
  Image,
  HStack,
  Stack,
  Heading,
  Input,
  IconButton,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react'
import { AddIcon, MinusIcon, CloseIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'

import { addQuantity, decreaseQuantity, removeItem } from '../lib/productSlice'

function Card({ name, color, size, price, img, quantity, id }) {
  const dispatch = useDispatch()

  return (
    <Box p="6" borderBottom="1px" borderBottomColor="gray.200">
      <HStack>
        <Image src={img} w="12.5rem" borderRadius="12" />
        <Stack px="8" h="14rem">
          <Heading size="md">{name}</Heading>
          <Text size="md" color="gray.600">
            Color : {color}
          </Text>
          <Text size="md" color="gray.600">
            Size : {size}
          </Text>
          <Button
            w="8rem"
            leftIcon={<CloseIcon />}
            colorScheme="red"
            variant="outline"
            onClick={() => dispatch(removeItem({ id }))}
          >
            Remove
          </Button>
        </Stack>
        <Flex justifyContent="space-between" direction="column" h="14rem">
          <Flex spacing="4">
            <IconButton
              bg="white"
              color="black"
              borderColor="black"
              icon={<AddIcon />}
              onClick={() => dispatch(addQuantity({ id }))}
            />
            <Input w="4rem" value={quantity} />
            <IconButton
              bg="white"
              color="black"
              borderColor="black"
              icon={<MinusIcon />}
              onClick={() => dispatch(decreaseQuantity({ id }))}
            />
          </Flex>
          <Heading size="md">${price}</Heading>
        </Flex>
      </HStack>
    </Box>
  )
}

export default Card
