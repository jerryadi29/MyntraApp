import Header from './components/Header/Header';
import ListItems from './components/main/ListItems';
import {BrowserRouter as Router } from "react-router-dom";
import { Routes,Route } from "react-router";
import  {DashBoard}  from './components/DashBoard/dashBoard.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
              <Route exact path="/" element={<DashBoard></DashBoard>}></Route>
         </Routes>
      </Router>


 
{/*    
      <Header>
      </Header>

      <ListItems></ListItems> */} 

    </div>
  );
}

export default App;
