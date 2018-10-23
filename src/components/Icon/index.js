import Veact from '../../lib/js/veact'

import iconSearch from '../../assets/images/icon-search.png'
import './index.scss'

const typeIndex = {
  search: iconSearch,
}

const sizeIndex = { s: 15, m: 18, l: 24 }

export default ({ type = 'search', size = 'm', opacity = 1, style, className = ''}) => {
  const mergedStyle = Object.assign({
    opacity,
    width: `${sizeIndex[size]}px`,
  }, style)

  return (
    <div
      className={`App-icon ${className}`}
      style={mergedStyle}
    >
      <img src={typeIndex[type]}/>
    </div>
  )
}

