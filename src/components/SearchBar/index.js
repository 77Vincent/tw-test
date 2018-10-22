import Veact from '../../lib/js/veact'

import './index.scss'

const switchSearchType = (app, key) => () => {
  app.dispatch(model => ({
    ...model,
    currentSearchType: key,
  }))
}

export default ({ app }) => {
  const { model } = app

  return (
    <div className="App-search">
      {
        Object.keys(model.types).map(key => (
          <div
            onClick={switchSearchType(app, key)}
            className={`App-search-type ${model.currentSearchType === key ? 'active' : ''}`}>
            {key}
          </div>
        ))
      }
    </div>
  )
}
