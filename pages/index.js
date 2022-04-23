import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


// Components
import { Box,Text} from '@chakra-ui/react';
import ContactForm from '../components/ContactForm';




export default function Home() {
  return (
    <>
    <Box>
      <ContactForm/>
    </Box>
   </>
  )
}
