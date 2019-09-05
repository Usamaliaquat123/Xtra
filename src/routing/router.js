import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeScreen from "./../container/HomeScreen";
import Child from "../container/Child";
import Teacher from "../container/Teacher";
import GetInvolved from "../container/GetInvolved";
import NewsAndEvents from "../container/NewsAndEvents";
import ContactUs from "../container/ContactUs";

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
      <Route path="/getInvolved" exact component={GetInvolved} />
      <Route path="/News&Events" exact component={NewsAndEvents} />
      <Route path="/contactus" exact component={ContactUs} />
      {/* payments pages */}
      <Route path="/donate" exact component={NewsAndEvents} />
      <Route path="/Pay" exact component={NewsAndEvents} />
      <Route path="/paySucess" exact component={NewsAndEvents} />
      <Route path="/paymentNotSucess" exact component={NewsAndEvents} />
      
    </Router>
  );
}

export default AppRouter;
