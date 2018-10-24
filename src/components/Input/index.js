import Veact from '../../lib/veact'

import Icon from '../Icon'
import './index.scss'

const toggleFocus = (app, boolean) => () => {
  // app.dispatch(() => ({ searchIsFocus: boolean }))
}

export default ({ prefix, app, placeholder, className }) => {
  const { searchIsFocus } = app.model

  return (
    <div className={`App-input ${className}`}>
      {
        prefix 
        ? <Icon type={prefix} opacity={0.3} style={{ visibility: searchIsFocus ? 'hidden' : 'visible' }} />
        : null
      }
      <input
        placeholder={placeholder}
        onFocus={toggleFocus(app, true)}
      />
    </div>
  )
}
