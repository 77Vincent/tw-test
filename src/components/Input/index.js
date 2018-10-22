import Veact from '../../lib/js/veact'

import Icon from '../Icon'
import './index.scss'

export default ({ prefix }) => {

  return (
    <div className="App-input">
      <Icon type={prefix} opacity={0.3}/>
      <input />
    </div>
  )
}
