import { Icon, Link as Linkrota, Text, LinkProps as ChakraLink } from "@chakra-ui/react";
import { ElementType } from "react";
import { Activelink } from "../Activelink";


interface NavLinkprops extends ChakraLink{
    icon:ElementType;
    children: string;
    href: string;
}
export function NavLink( {icon, children,href, ...rest}: NavLinkprops){
    return(
        
        <Activelink href={href} passHref>
            <Linkrota display="flex" align="center"  py="1" {...rest}>
                        <Icon as={icon} fontSize="20" />
                        <Text ml="4" fontSize="medium">{children}</Text>
            </Linkrota>
        </Activelink>
    )
} 