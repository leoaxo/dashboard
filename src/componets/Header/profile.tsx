import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
    return(
        <Flex 
        align="center"
        >
         <Box mr="4" textAlign="right">
             <Text>Leonardo Xavier</Text>
             <Text color="gray.300" >leonardoaxo@gmail.com</Text>
         </Box>
         <Avatar size="md" name="Leonardo Xavier" />
        </Flex>
    );
}