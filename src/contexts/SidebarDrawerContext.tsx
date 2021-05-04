import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderPropa{
    children: ReactNode;
};

type  SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvi({children}:SidebarDrawerProviderPropa){
  const discolosure = useDisclosure ()
  const router = useRouter()
  useEffect(() => {
      discolosure.onClose()
  }, [router.asPath])
    return(
       <SidebarDrawerContext.Provider value={discolosure}>
                   {children}
       </SidebarDrawerContext.Provider>
        )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)