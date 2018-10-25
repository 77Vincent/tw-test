import Veact from '../../lib/veact'

import Icon from '../Icon'
import Input from '../Input'
import Button from '../Button'
import './index.scss'

const osIndex = {
  windows: { name: 'windows', color: '#00b4cf' },
  debian: { name: 'lastfm', color: 'red' },
  redhat: { name: 'chrome', color: '#ff9a2a' },
  ubuntu: { name: 'drupal', color: '#435466' },
}

const iconColor = '#777'

const addResource = (app, session) => () => {
  const result = []
  for (let input of session.addingResource.split(',')) {
    for (let item of app.model.browserIndex) {
      if (input.trim() === item.name.toLowerCase()) {
        result.push(item.id)
      }
    }
  }
  session.browsers.push(...result)
  app.dispatch(model => {
    const newSessions = model.sessions.map(v => {
      if (v.id === session.id) {
        return session
      } else {
        return v
      }
    })
    return { sessions: newSessions }
  })
  closePopup(app)()
}

const addBrowser = (app, session) => () => {
  app.dispatch(model => {
    const newSessions = model.sessions.map(v => {
      if (v.id === session.id) {
        v.isEditing = true
        return v
      } else {
        v.isEditing = false
        return v
      }
    })
    return { sessions: newSessions }
  })
}

const closePopup = app => () => {
  app.dispatch(model => {
    const newSessions = model.sessions.map(v => {
      v.isEditing = false
      return v
    })
    return { sessions: newSessions }
  })
}

const deleteBrowser = (app, session, browserIndex) => () => {
  app.dispatch(model => {
    session.browsers = session.browsers.filter(v => v !== browserIndex)
    const newSessions = model.sessions.map(v => {
      if (v.id === session.id) {
        return session 
      } else {
        return v
      }
    })
    return { sessions: newSessions }
  })
}

export default ({ session, app }) => {
  return (
    <div className="App-session">
      <div
        className="App-session-popup"
        style={{ visibility: session.isEditing ? 'visible' : 'hidden' }}
      >
        <Icon onClick={closePopup(app)} type="cancel" color="#00b4cf" size="18" className="App-session-popup-cancel"/>
        <div>Separate multiple resource name with commas.</div>
        <Input
          autofocus
          className="App-session-popup-input"
          value={session.addingResource}
          onInput={(e) => {
            app.dispatch(model => {
              const newSessions = model.sessions.map(v => {
                if (v.id === session.id) {
                  v.addingResource = e.target.value
                  return v
                } else {
                  return v
                }
              })
              return { sessions: newSessions }
            })
          }}
          placeholder="e.g. Chrome, Firefox" />

        <Button onClick={addResource(app, session)} style={{ marginRight: '10px' }}>Add resources</Button>
        <Button onClick={closePopup(app)} >Cancel</Button>
      </div>

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
          <div
            className="App-session-add"
            onClick={addBrowser(app, session)}
          >
            <Icon color="#fff" type="plus"/>
          </div>
          {
            session.browsers.map(browserId => (
              <div
                className="App-session-browser"
                onClick={deleteBrowser(app, session, browserId)}
              >
                <span>{app.model.browserIndex.filter(v => v.id === browserId)[0].name}</span>
                <Icon className="App-session-delete" type="trash-1"/>
              </div>
            ))
          }
          <Button iconStyle={{ color: "#fff" }} prefix="block" className="App-session-deny"> Deny </Button>
        </div>
      </div>
    </div>
  )
}
