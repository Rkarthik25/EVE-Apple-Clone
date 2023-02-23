import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from 'components/Navbar'
import AuthContextProvider from 'context/authContext'
import { ChakraProvider } from '@chakra-ui/react'
export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <AuthContextProvider>
    <Navbar />
    
  <Component {...pageProps} />
  </AuthContextProvider>
  </ChakraProvider>
}
