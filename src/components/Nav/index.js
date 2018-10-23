import Veact from '../../lib/veact'

import Icon from '../Icon'
import './index.scss'

const iconIndex = {
  dashboard: 'gauge', 
  agent: 'sitemap', 
  myCruise: 'ship', 
  help: 'lifebuoy', 
}

export default ({ app }) => {
  const { model } = app

  return (
    <div className="App-nav">
      {
        model.navigationItems.map(item => (
          <div className="App-nav-item">
            <Icon color="#fff" size="18" style={{ marginRight: '15px' }} type={iconIndex[item.id]} />
            {item.label}
          </div>
        )) 
      }

      <ul className="App-nav-history">
        <div className="App-nav-history-title">History</div>
        {
          model.histories.map(item => <li className="App-nav-history-item"> {item} </li>)
        }
      </ul>
    </div>
  )
}
