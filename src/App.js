import React from 'react';
import './App.css';
import { Adress } from './component/profile/Adress';
import Fullname from './component/profile/FullName';
import Myprofilepic from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';

function App() {
 return (
   <div className="App">
     <Myprofilepic/>
     <Fullname/>
     <Adress/>
   </div>
  );
 }

      export default App;
      



