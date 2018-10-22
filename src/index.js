import Veact from './lib/js/veact'

import model from './model'
import App from './base'

Veact.createApp(
  document.getElementById('root'),
  model,
  App
)