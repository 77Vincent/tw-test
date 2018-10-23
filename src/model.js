export default {
  searchIsFocus: false,
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
  },
  types: {
    all: {
      title: 'all',
      count: 8,
    },
    physical: {
      title: 'physical',
      count: 5,
    },
    virtual: {
      title: 'virtual',
      count: 3,
    },
  },
  currentSearchType: 'all',
  sessions: [{
    status: 'building',
    ip: '192.168.0.102',
    type: 'windows',
    url: 'bjstwojfd.thoughtworks.com',
    path: '/var/lib/cruise-agent',
  }, {
    status: 'idle',
    ip: '192.168.0.102',
    type: 'windows',
    url: 'bjstwojfd.thoughtworks.com',
    path: '/var/lib/cruise-agent',
  }, {
    status: 'idle',
    ip: '192.168.1.92',
    type: 'ubuntu',
    url: 'bjstwojfd.thoughtworks.com',
    path: '/var/lib/cruise-agent',
  }, {
    status: 'building',
    ip: '192.168.1.92',
    type: 'redhat',
    url: 'bjstwojfd.thoughtworks.com',
    path: '/var/lib/cruise-agent',
  }, {
    status: 'idle',
    ip: '192.168.1.92',
    type: 'debian',
    url: 'bjstwojfd.thoughtworks.com',
    path: '/var/lib/cruise-agent',
  }],
} 
