import {Flex, Icon, IconButton, useBreakpointValue,} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from '../Header/logo'
import { NoticationsNav } from '../Header/NotificatiomNav'
import { Profile } from '../Header/profile'
import { Search } from '../Header/SearchBox'
export function Header(){

    const {onOpen} = useSidebarDrawer()
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true, 
    }) 

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
            { !isWideVersion && (
                <IconButton
                aria-label="Open navigation"
                icon={<Icon as={RiMenuLine} />}
                variant="unstyled"
                onClick={onOpen}
                mr="2"
                >

                </IconButton>
            )

            }
        <Logo />
        
        {isWideVersion && <Search />}

        <Flex
        align ="center"
        ml="auto"
        >
          <NoticationsNav />
             
             <Profile showProfileData={isWideVersion} />

        </Flex>
        
        </Flex>
    )
}