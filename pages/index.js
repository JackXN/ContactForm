import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link href="/dist/output.css" rel="stylesheet"/>
</Head>
   <div className='bg-green-500'>
<h1 className='text-3xl'>test</h1>
   </div>
   </>
  )
}
