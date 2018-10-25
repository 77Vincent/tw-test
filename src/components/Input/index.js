import Veact from '../../lib/veact'

import Icon from '../Icon'
import './index.scss'

const toggleFocus = (app, boolean) => () => {
  app.dispatch(() => ({ searchIsFocus: boolean }))
}

export default ({ prefix, app, placeholder, className, onChange, onInput, value, autofocus }) => {
  const { searchIsFocus } = app.model

  return (
    <div className={`App-input ${className}`}>
      {
        prefix ?
          <Icon
            type={prefix}
            opacity={0.3}
            style={{
              visibility: searchIsFocus || value.length ? 'hidden': 'visible'
            }}
          /> : null
      }
      <input
        autofocus={autofocus}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onInput={onInput}
        onFocus={toggleFocus(app, true)}
        onBlur={toggleFocus(app, false)}
      />
    </div>
  )
}
