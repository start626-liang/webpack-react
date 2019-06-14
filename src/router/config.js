import Bus from '../views/react-router/bus'
import Sandwiches from '../views/react-router/sandwiches'
import A from '../views/css-module/aa'
import Tacos from '../views/react-router/tacos'
import NoMatch from '../views/no-match/index'
const routes = [
  {
    path: '/',
    activeOnlyWhenExact: true,
    component: Sandwiches
  },
  {
    path: '/tacos',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: A
      }
    ]
  },
  {
    path: '/',
    component: NoMatch
  }
]

export default routes