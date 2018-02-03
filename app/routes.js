import Loadable from 'react-loadable';
import React from 'react';

var getloader = ()=>{
  return <div>Loading...</div>
}

export var childRoutesArray = [
  {
    path: "/",
    component: Loadable({
      loader: () => import('./components/container/HomeScreen'),
      loading: getloader
    })
  },
];


