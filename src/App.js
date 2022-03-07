
import React from 'react';
import Navbar from './components/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Singin from "./pages/singin/singin";
import Forgot from "./pages/forgotpassword/forgotpassword";
import Change from "./pages/changepassword/changepassword";



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Router>
            <Route path="/forgot" exact render={() => <Forgot />} />
            <Route path="/change" exact render={() => <Change />} />
            <Route path="/singin" exact render={() => <Singin />} />
          </Router>
        </Routes>
      </div>

    </Router>
  );

}

export default App;