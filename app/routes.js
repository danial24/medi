import AppPaths from './utils/AppPaths';
import Loadable from 'react-loadable';

export var childRoutesArray = [
  {
    path: AppPaths.LANDING_PATH,
    component: Loadable({
      loader: () => import('./components/container/HomeScreen'),
      loading: getloader
    })
  },
];


