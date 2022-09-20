import { Container } from '@chakra-ui/react'
import React from 'react'
import Head, { MetaProps } from './Head'
import Header from './header'
import Footer from './footer'

interface LayoutProps {
  children: React.ReactNode
  customMeta?: MetaProps
}

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <Header />
      <main>
        <Container
          maxWidth="container.xl"
          py={'10'}
          minH={'calc(100vh - 291px)'}
        >
          {children}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Layout
