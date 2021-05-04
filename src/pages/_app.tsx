import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvi } from '../contexts/SidebarDrawerContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}>
    <SidebarDrawerProvi>
  <Component {...pageProps} />
  </SidebarDrawerProvi>
  </ChakraProvider>)
}

export default MyApp
