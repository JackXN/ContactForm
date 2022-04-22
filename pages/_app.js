import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react';
import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#3474',
      900: 'blue',
    },
    primary: {
      'orange': '#2023933'
    }
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps}/>
    </ChakraProvider>
  )
}

export default MyApp
