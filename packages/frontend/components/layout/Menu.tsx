import React, { Dispatch, useState } from 'react'
import NextLink from 'next/link'
import { TriangleDownIcon } from '@chakra-ui/icons'

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

const MenuHome = (): JSX.Element => {
  const [section, setSection] = useState('Home')

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<TriangleDownIcon />}>
          {section}
        </MenuButton>
        <MenuList>
          <NextLink href={'/spacevault'}>
            <MenuItem onClick={() => setSection('Vault')}>Space Vault</MenuItem>
          </NextLink>
          <NextLink href={'/spacemart'}>
            <MenuItem onClick={() => setSection('Mart')}> Space Mart </MenuItem>
          </NextLink>
          <NextLink href={'/spacepool'}>
            <MenuItem onClick={() => setSection('Pool')}> Space Pool</MenuItem>
          </NextLink>
        </MenuList>
      </Menu>

      {/*<Breadcrumb separator={'::'}>*/}
      {/*  <BreadcrumbItem isCurrentPage>*/}
      {/*    <BreadcrumbLink as={NextLink} href="/">*/}
      {/*      Home*/}
      {/*    </BreadcrumbLink>*/}
      {/*  </BreadcrumbItem>*/}
      {/*  <BreadcrumbItem isCurrentPage>*/}
      {/*    <BreadcrumbLink as={NextLink} href="/spacevault">*/}
      {/*      Space Vault*/}
      {/*    </BreadcrumbLink>*/}
      {/*  </BreadcrumbItem>*/}
      {/*  <BreadcrumbItem isCurrentPage>*/}
      {/*    <BreadcrumbLink as={NextLink} href="/spacemart">*/}
      {/*      Space Mart*/}
      {/*    </BreadcrumbLink>*/}
      {/*  </BreadcrumbItem>*/}
      {/*  <BreadcrumbItem isCurrentPage>*/}
      {/*    <BreadcrumbLink as={NextLink} href="/spacepool">*/}
      {/*      Space Pool*/}
      {/*    </BreadcrumbLink>*/}
      {/*  </BreadcrumbItem>*/}
      {/*</Breadcrumb>*/}
    </>
  )
}

export default MenuHome
