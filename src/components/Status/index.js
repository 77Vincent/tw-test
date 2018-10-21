import Veact from '../../lib/js/veact'

import './index.scss'

export default ({ app }) => {
  const { model } = app

  return (
    <div className="App-status">
      {
        ['building', 'idle'].map(item => (
          <div className={`App-status-item App-status-${item}`}>
            <div className="App-status-item-title">{model.status[item].title}</div>
            <div className="App-status-item-count">{model.status[item].count}</div>
          </div>
        ))
      }
    </div>
  )
}
