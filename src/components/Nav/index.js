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

      <div className="App-nav-history">
        <div className="App-nav-history-title">History</div>
        {
          model.histories.map(item => <div>{item}</div>)
        }
      </div>
    </div>
  )
}

export default Nav 
