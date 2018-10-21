import Veact from '../../lib/js/veact'

import './index.scss'
import logo from '../../assets/images/logo.png'

const Nav = ({ app }) => {
  const { model } = app

  return (
    <div className="App-nav">
      {
        model.navigationItems.map(item => <div className="App-nav-item">{item}</div>) 
      }

      <ul className="App-nav-history">
        <div className="App-nav-history-title">History</div>
        {
          model.histories.map(item => <li className="App-nav-history-item">{item}</li>)
        }
      </ul>
    </div>
  )
}

export default Nav 
