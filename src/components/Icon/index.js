import Veact from '../../lib/veact'

import './index.scss'

export default ({
  type = 'search',
  style,
  className = '',
  size = 16,
  color = '#000'
}) => {
  const mergedStyle = Object.assign({
    fontSize: `${size}px`,
    color,
  }, style)

  return (
    <div
      className={`App-icon ${className} icon-${type}`}
      style={mergedStyle}
    >
    </div>
  )
}

