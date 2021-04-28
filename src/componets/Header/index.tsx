import {Flex,} from '@chakra-ui/react'
import { Logo } from '../Header/logo'
import { NoticationsNav } from '../Header/NotificatiomNav'
import { Profile } from '../Header/profile'
import { Search } from '../Header/SearchBox'
export function Header(){
    return(
        <Flex
        as="header"
        w="100%"
        maxWidth={1400}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        align="center"
        >
        <Logo />
        
        <Search />

        <Flex
        align ="center"
        ml="auto"
        >
          <NoticationsNav />
             
             <Profile />

        </Flex>
        
        </Flex>
    )
}