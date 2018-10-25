import Veact from '../../lib/veact'

import './index.scss'
import Icon from '../Icon'
import logo from '../../assets/images/logo.png'

const togglePopup = app => () => {
  app.dispatch(model => ({ isUserPopup: !model.isUserPopup }))
}

export default ({ app }) => {
  return (
    <header className="App-header">
      <div className="container">
        <img className="App-header-logo" src={logo} />

        <div className="App-header-user-wrap" onClick={togglePopup(app)} >
          <div className="App-header-user" style={{ backgroundImage: `url(${app.model.user.avatar})` }}></div>
          <Icon style={{ marginLeft: '10px' }} color="#aaa" size="14" type="down-open" />
        </div>

        <div className="App-header-popup" style={{ visibility: app.model.isUserPopup ? 'visible' : 'hidden' }}>
          <div className="App-header-popup-button">
            <Icon type="id-card-o" /> Profile
          </div>

          <div className="App-header-popup-button">
            <Icon type="export" /> Sign Out
          </div>
        </div>
      </div>
    </header>
  )
}
