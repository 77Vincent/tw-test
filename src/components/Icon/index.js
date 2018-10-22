import Veact from '../../lib/js/veact'

import iconSearch from '../../assets/images/icon-search.png'
import './index.scss'

const typeIndex = {
  search: iconSearch,
}

const sizeIndex = { s: 15, m: 20, l: 25 }

export default ({ type = 'search', size = 'm', opacity = 1 }) => {
  return (
    <div
      className="App-icon"
      style={{
        opacity,
        width: `${sizeIndex[size]}px`,
      }}
    >
      <img src={typeIndex[type]}/>
    </div>
  )
}

