import Veact from '../../lib/js/veact'

import './index.scss'

export default ({ app }) => {
  const { model } = app

  const Info = ({ item, className }) => (
    <div className={className}>
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
