import { ChakraProvider } from '@chakra-ui/react';
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider className={dmSans.className}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}