import Veact from '../../lib/veact'

import Icon from '../Icon'
import './index.scss'

const typeIndex = {
  building: 'cog-1',
  idle: 'coffee',
}

export default ({ app }) => {
  const { model } = app

  const Info = ({ item, className }) => (
    <div className={className}>
      {
        item.title === 'building' || item.title === 'idle' ?
          <div className="App-status-icon-wrap">
            <Icon
              className={`App-status-icon-${item.title}`}
              color="#fff"
              size="128"
              type={typeIndex[item.title]} />
          </div>
          : null
      }
      <div className="App-status-item-title">{item.title}</div>
      <div className="App-status-item-count">{item.count}</div>
    </div>
  )

  return (
    <div className="App-status row">
      {
        Object.keys(model.status).map(item => (
          <div className="column-4">
            <Info
              className={`App-status-item App-status-${item}`}
              item={model.status[item]} />
          </div>
        ))
      }
      <div className="column-4">
        <div className="App-status-item App-status-overall">
          {
            Object.keys(model.types).map(item => (
              <Info className="App-status-overall-item" item={model.types[item]} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
