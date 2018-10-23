import Veact from '../../lib/js/veact'

import Icon from '../Icon'
import './index.scss'

export default ({ dark, children, style, className = ''}) => {
  const mergedStyle = Object.assign({
  }, style)

  return (
    <div
      className={`App-button ${className} ${dark ? 'App-button-dark' : ''}`}
      style={mergedStyle}
    >
      <Icon size="s" className="App-button-icon" />
      {children}
    </div>
  )
}

