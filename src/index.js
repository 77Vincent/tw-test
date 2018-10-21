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
  ],
  status: {
    building: {
      title: 'building',
      count: 3,
    },
    idle: {
      title: 'idle',
      count: 5,
    },
  }
} 

Veact.createApp(document.getElementById('root'), model).mount(App)