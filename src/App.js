import React from 'react';
import { Route, withRouter} from 'react-router-dom'
import Case1 from './cases/case1';
import Case2 from './cases/case2';
import Case3 from './cases/case3';
import Case4 from './cases/case4';
import Case5 from './cases/case5';
import Case6 from './cases/case6';
import Start from './cases/start';
function App(props) {
  return (
    <div className="App">
      <Route render={()=> <Start {...props}/>} path='/' exact/>
      <Route render={()=> <Case1 {...props}/>} path='/1' exact/>
      <Route render={()=> <Case2 {...props}/>} path='/2' exact/>
      <Route render={()=> <Case3 {...props}/>} path='/3' exact/>
      <Route render={()=> <Case4 {...props}/>} path='/4' exact/>
      <Route render={()=> <Case5 {...props}/>} path='/5' exact/>
      <Route render={()=> <Case6 {...props}/>} path='/6' exact/>
    </div>
  );
}


export default withRouter(App);
