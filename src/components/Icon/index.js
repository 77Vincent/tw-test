import Veact from '../../lib/veact'

import './index.scss'

export default ({ type = 'search', style, className = ''}) => {
  return (
    <div
      className={`App-icon ${className} icon-${type}`}
      style={style}
    >
    </div>
  )
}

