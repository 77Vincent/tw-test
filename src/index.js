import Veact from './lib/veact'

import model from './model'
import App from './base'

Veact.createApp(
  document.getElementById('root'),
  model,
  App
)