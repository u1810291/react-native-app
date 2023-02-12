import { Layout, Text } from '@ui-kitten/components'
import { Menu } from './Menu/Menu'

export const MainScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'top', alignItems: 'center' }}>
    <Menu/>
  </Layout>
);
