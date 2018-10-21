import Veact from './lib/js/veact'

import App from './base'

const model = {
  navigationItems: [
    'dashboard',
    'agent',
    'my cruise',
    'help',
  ],
  histories: [
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
  ]
} 

Veact.createApp(document.getElementById('root'), model).mount(App)