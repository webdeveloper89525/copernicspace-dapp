import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import SpacePoolFund from '../components/spacepool/Fund'
import SpacePoolBank from '../components/spacepool/Bank'

const SpacePool = () => {
  return (
    <>
      <Tabs isFitted variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Bank</Tab>
          <Tab>Fund</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>
              <SpacePoolBank />
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <SpacePoolFund />
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default SpacePool
