import Veact from '../../lib/js/veact'

import Icon from '../Icon'
import './index.scss'

export default ({ prefix }) => {
  let isFocus = false

  return (
    <div className="App-input">
      <Icon type={prefix} opacity={0.3} style={{ display: isFocus ? 'none' : 'block' }} />
      <input
        onFocus={() => { isFocus = true }}
        onBlur={() => { isFocus = false }}
      />
    </div>
  )
}
