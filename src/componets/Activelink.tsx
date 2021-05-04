import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface propsLink extends LinkProps {
    children: ReactElement,
    shouldMatchExactHref?: boolean
}

export function Activelink({
    shouldMatchExactHref=false,
    children,
    ...rest}: propsLink){
    const {asPath} = useRouter()
    
    let isActive = false;
    
    if (shouldMatchExactHref && 
        (asPath == rest.href || asPath == rest.as)){
        isActive = true;
    }

    if(!shouldMatchExactHref && 
    (asPath.startsWith(String(rest.href)) ||
    asPath.startsWith(String(rest.as))
)){
        isActive = true;
    }
    
    return(
       <Link {...rest}>
        {cloneElement(children, {
          color: isActive ? 'pink.400' : 'gray.50'
        })}
       </Link>
   )
}