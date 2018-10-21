import Veact from '../../lib/js/veact'

import './index.scss'

export default ({ app }) => {
  const { model } = app

  const switchSearchType = key => () => {
    app.dispatch(model => ({
      ...model,
      currentSearchType: key,
    }))
  }

  return (
    <div className="App-search">
      {
        Object.keys(model.types).map(key => (
          <div
            onClick={switchSearchType(key)}
            className={`App-search-type ${model.currentSearchType === key ? 'active' : ''}`}>
            {key}
          </div>
        ))
      }
    </div>
  )
}
