import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
<div>
  
</div>

    <Switch>
      <Route exact path="/">
        This is home page
      </Route>
      <Route exact path="/starred">
        This is starred page
      </Route>
      <Route>This is 404 page</Route>
    </Switch>
  );
}

export default App;
