import Veact from '../../lib/veact'

import Icon from '../Icon'
import './index.scss'

export default ({ prefix, dark, children, style, className = ''}) => {
  const mergedStyle = Object.assign({
  }, style)

  return (
    <div
      className={`App-button ${className} ${dark ? 'App-button-dark' : ''}`}
      style={mergedStyle}
    >
      {
        prefix ? <Icon type={prefix} className="App-button-icon" /> : null
      }
      {children}
    </div>
  )
}

