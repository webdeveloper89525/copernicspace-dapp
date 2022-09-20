import { useState } from 'react'
import { Flex, MenuItem, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import Hamburger from './hamburger'
import Logo from './logo'
import Wallet from '../Wallet'
import MenuHome from '../Menu'
import SpaceMartSellButton from '../../spacemart/SellButton'

interface MenuItem {
  link?: string
  onClick?: any
}

const MenuItems: React.FC<MenuItem> = ({ children, link, onClick }) => {
  const router = useRouter()

  return (
    <Link href={link}>
      <Box
        as="a"
        fontWeight={router.pathname === link ? 'bold' : 'normal'}
        fontSize="md"
        color="black"
        onClick={onClick || undefined}
        mt={{ sm: '6', lg: '0' }}
        mr={{ sm: '0', lg: '9' }}
        _hover={{ cursor: 'pointer' }}
      >
        {children}
      </Box>
    </Link>
  )
}

const Header: React.FC = (props) => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)
  const route = useRouter()

  return (
    <Flex
      as="nav"
      position="relative"
      width="100vw"
      alignItems="center"
      justify="space-between"
      wrap="wrap"
      paddingX={{ base: 10, sm: 10, lg: 20 }}
      paddingY={{ sm: '8', lg: '10' }}
      backgroundColor="white"
      zIndex={999}
      boxShadow={{
        sm: show ? '0px 5px 4px rgba(221, 221, 221, 0.25)' : 'none'
      }}
      {...props}
    >
      <Logo />

      <Hamburger handleToggle={handleToggle} />

      <Box
        display={{
          sm: show ? 'flex' : 'none',
          lg: 'flex'
        }}
        flexDir={{ sm: 'column', lg: 'row' }}
        alignItems="center"
        width={{ sm: 'full', lg: 'auto' }}
        marginTop={{ sm: '20px', lg: '0' }}
      >
        {route.pathname === '/spacemart' && (
          <>
            <SpaceMartSellButton />
            &nbsp;&nbsp;
          </>
        )}

        <MenuHome />

        <Flex mt={{ sm: '10', lg: '0' }}>
          <Wallet />
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
