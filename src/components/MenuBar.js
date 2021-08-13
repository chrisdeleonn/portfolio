import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { Header } = Layout

const MenuBar = () => {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100vw' }}>
            <Menu theme='dark' mode='horizontal'>
                <Menu.Item key='0'>
                    <Link to='/About'>About</Link>
                </Menu.Item>
                <Menu.Item key='1'>
                    <Link to='/Resume'>Resume</Link>
                </Menu.Item>
                <Menu.Item key='2'>
                    <Link to='/Portfolio'>Portfolio</Link>
                </Menu.Item>
            </Menu>
        </Header>
  )
}

export default MenuBar;