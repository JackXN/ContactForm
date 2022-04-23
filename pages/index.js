import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Box,Text} from '@chakra-ui/react'

export default function Home() {
  return (
    <>
    <Box>
      <Box>
        <form>
          <input type='text'/>
            <button type='submit'>
              Submit
            </button>
        </form>
      </Box>
    </Box>
   </>
  )
}
