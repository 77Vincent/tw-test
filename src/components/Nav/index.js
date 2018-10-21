import Veact from '../../lib/js/veact'

import './index.scss'
import logo from '../../assets/images/logo.png'

const Nav = () => {
  const items = [
    'dashboard',
    'agent',
    'my cruise',
    'help',
  ]
  const NavItem = ({ content }) => {
    console.log(content)
    return (
      <div className="App-nav-item">{content}</div>
    )
  }

  return (
    <div className="App-nav">
      {
        items.map(item => {
          return <NavItem content={item} />
        }) 
      }
    </div>
  )
}

export default Nav 
