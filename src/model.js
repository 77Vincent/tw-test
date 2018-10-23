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
  browserIndex: [
    { id: 1, name: 'Firefox' },
    { id: 2, name: 'Safari' },
    { id: 3, name: 'Ubuntu' },
    { id: 4, name: 'Chrome' },
  ],
  sessions: [{
    status: 'building',
    ip: '192.168.0.102',
    type: 'windows',
    url: 'bjstwojfd.thoughtworks.com',
    path: '/var/lib/cruise-agent',
    browsers: [0, 1, 2, 3],
  }, {
    status: 'idle',
    ip: '192.168.0.102',
    type: 'windows',
    url: 'bjstwojfd.thoughtworks.com',
    path: '/var/lib/cruise-agent',
    browsers: [0, 1, 2],
  }, {
    status: 'idle',
    ip: '192.168.1.92',
    type: 'ubuntu',
    url: 'bjstwojfd.thoughtworks.com',
    path: '/var/lib/cruise-agent',
    browsers: [1, 2, 3],
  }, {
    status: 'building',
    ip: '192.168.1.92',
    type: 'redhat',
    url: 'bjstwojfd.thoughtworks.com',
    path: '/var/lib/cruise-agent',
    browsers: [2, 3],
  }, {
    status: 'idle',
    ip: '192.168.1.92',
    type: 'debian',
    url: 'bjstwojfd.thoughtworks.com',
    path: '/var/lib/cruise-agent',
    browsers: [1, 3, 2],
  }],
} 
