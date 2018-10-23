import Veact from '../../lib/veact'

import Icon from '../Icon'
import Button from '../Button'
import './index.scss'

const osIndex = {
  windows: {
    name: 'windows',
    color: '#00b4cf',
  },
  debian: {
    name: 'lastfm',
    color: 'red',
  },
  redhat: {
    name: 'chrome',
    color: '#ff9a2a',
  },
  ubuntu: {
    name: 'drupal',
    color: '#435466',
  },
}

const iconColor = '#777'

export default ({ session, app }) => {
  return (
    <div className="App-session">
      <div className="App-session-image">
        <Icon size="48" color={osIndex[session.type].color} type={osIndex[session.type].name}/>
      </div>

      <div className="App-session-block-right">
        <div className="App-session-block-top">
          <Icon color={iconColor} type="monitor"/>
          <div className="App-session-url"> {session.url} </div>
          <div className="App-session-status-wrap">
            <div className={`App-session-status App-session-status-${session.status}`}> {session.status} </div>
          </div>

          <Icon color={iconColor} type="info-circled-alt"/>
          <div className="App-session-ip"> {session.ip} </div>

          <Icon color={iconColor} type="folder-empty"/>
          <div className="App-session-path"> {session.path} </div>
        </div>

        <div className="App-session-block-bottom">
          <div className="App-session-add">
            <Icon color="#fff" type="plus"/>
          </div>
          {
            session.browsers.map(browser => (
              <div className="App-session-browser">
                <span>{app.model.browserIndex[browser].name}</span>
                <Icon type="trash-1"/>
              </div>
            ))
          }
          <Button iconStyle={{ color: "#fff" }} prefix="block" className="App-session-deny"> Deny </Button>
        </div>
      </div>
    </div>
  )
}
