import { Text, Link as Linkrota } from "@chakra-ui/react";
import Link from "next/link";





export function Logo(){
    return(
       
       <Link href="/dashboard"  >
        <Text 
        fontSize={["2xl", "3xl"]}
        fontWeignt="bold"
        letterSpacing="tight"
        w="64"
        >
            Dashgo<Text as="span" marginLeft="1" color="pink.500">.</Text>
        </Text>
        
        </Link>
        
    )
}