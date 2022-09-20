import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import SpaceMartBuy from '../components/spacemart/Buy'
import SpaceMartMySales from '../components/spacemart/Mysales'

const SpaceMart = () => (
  <>
    <Tabs isFitted variant="enclosed" colorScheme="green">
      <TabList bo>
        <Tab border={'medium'}>My Sales</Tab>
        <Tab>Buy</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>
            <SpaceMartMySales />
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            <SpaceMartBuy />
          </p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </>
)

export default SpaceMart
