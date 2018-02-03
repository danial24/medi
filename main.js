import React from 'react';
import routes from './app/routes';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './app/components/App';


var history = browserHistory;

history.listen(location => {
  // Use setTimeout to make sure this runs after React Router's own listener
  setTimeout(() => {
    // Keep default behavior of restoring scroll position when user:
    // - clicked back button
    // - clicked on a link that programmatically calls `history.goBack()`
    // - manually changed the URL in the address bar (here we might want
    // to scroll to top, but we can't differentiate it from the others)
    if (location.action === 'POP') {
      return;
    }
    // In all other cases, scroll to top
    window.scrollTo(0, 0);
  });
});

const app = document.getElementById('app');

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, app);
