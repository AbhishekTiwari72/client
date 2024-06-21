export const routes = {
    public: [
      { path: '/', component: 'Home' },
      { path: '/login', component: 'Login' },
      { path: '/about', component: 'About' },
      { path: '/contact', component: 'Contact' },
      { path: '/gallery', component: 'Gallery' }

    ],
    user: [
      { path: '/profile', component: 'Profile' },
      { path: '/dashboard', component: 'Dashboard' },
      { path: '/orders', component: 'Orders' },
      { path: '/settings', component: 'Settings' },
      { path: '/users', component: 'Users' }
    ],
    developer: [
      { path: '/developer', component: 'Developer' },
    ]
  };
  