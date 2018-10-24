import Veact from '../../lib/veact'

import Icon from '../Icon'
import './index.scss'

export default ({ onClick, iconStyle, prefix, dark, children, style, className = ''}) => {
  const mergedStyle = Object.assign({
  }, style)

  return (
    <div
      className={`App-button ${className} ${dark ? 'App-button-dark' : ''}`}
      style={mergedStyle}
      onClick={onClick}
    >
      {
        prefix ? <Icon type={prefix} style={iconStyle} className="App-button-icon" /> : null
      }
      {children}
    </div>
  )
}

