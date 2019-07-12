import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import CustomLayout from './containers/Layout'
import CustomLine from './components/charts/Line';
function App() {
  return (
    <div className="App">
     <CustomLayout>
<CustomLine/>
     </CustomLayout>
    </div>
  );
}

export default App;
