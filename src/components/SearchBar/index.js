import Veact from '../../lib/veact'

import Icon from '../Icon'
import Input from '../Input'
import './index.scss'

const switchSearchType = (app, key) => () => {
  app.dispatch(() => ({ currentSearchType: key }))
}

const inputHandler = app => (e) => {
  app.dispatch(() => ({ searchInput: e.target.value }))
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

      <Input
        className="App-search-input"
        prefix='search'
        value={app.model.searchInput}
        onInput={inputHandler(app)}
      />

      <div className="App-search-view">
        <Icon size="18" className="App-search-view-button" type="th" />
        <Icon size="18" className="App-search-view-button" type="th-list" />
      </div>
    </div>
  )
}
