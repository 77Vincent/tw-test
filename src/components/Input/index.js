import Veact from '../../lib/veact'

import Icon from '../Icon'
import './index.scss'

const toggleFocus = (app, boolean) => () => {
  app.dispatch(() => ({ searchIsFocus: boolean }))
}

export default ({ prefix, app }) => {
  const { searchIsFocus } = app.model

  return (
    <div className="App-input">
      <Icon type={prefix} opacity={0.3} style={{ visibility: searchIsFocus ? 'hidden' : 'visible' }} />
      <input
        onFocus={toggleFocus(app, true)}
      />
    </div>
  )
}
