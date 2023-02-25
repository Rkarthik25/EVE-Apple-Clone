import React from 'react'
import { Box,Text,Grid, GridItem } from '@chakra-ui/react'
const StatsHome = () => {
return <Grid templateColumns='repeat(5, 1fr)' gap={10} as="b" maxH={20} w="">
  <Box textAlign={"center"} bg='blue.500'>
    <Text>Total Users</Text>
    <Text>16</Text>
    </Box>
    <Box textAlign={"center"} bg='red.500'>
    <Text>Total Admins</Text>
    <Text>16</Text>
    </Box>
    <Box textAlign={"center"} bg='green.500'>
    <Text>Total Items</Text>
    <Text>160</Text>
    </Box>
    <Box textAlign={"center"} bg='pink.500'>
    <Text>Total Users</Text>
    <Text>16</Text>
    </Box>
    <Box textAlign={"center"} bg='yellow.500'>
    <Text>Total Users</Text>
    <Text>16</Text>
  </Box>
</Grid>

}

export default StatsHome