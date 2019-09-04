import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeScreen from "./../container/HomeScreen";
import Child from "../container/Child";
import Teacher from "../container/Teacher";

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/child/" component={Child} />
      <Route path="/teacher/" component={Teacher} />
      {/* Where we work */}
      <Route path="/wherewework/pvpc" exact component={HomeScreen} />
      <Route path="/wherewework/bvpc" exact component={HomeScreen} />
      <Route path="/wherewework/scpc" exact component={HomeScreen} />
      <Route path="/wherewework/jacte" exact component={HomeScreen} />
      {/* getInvolved */}
      <Route path="/getInvolved" exact component={getInvolved} />
      <Route path="/News&Events" exact component={NewsAndEvents} />
      <Route path="/contactus" exact component={ContactUs} />
    </Router>
  );
}

export default AppRouter;
