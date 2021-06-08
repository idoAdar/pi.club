import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { data } from './components/FAKEJSON';

import './App.css';

const App = () => {
  const weatherDetails = data.list.map(temp => {
    return temp;
});

  return (
    <div className={'weather-container'}>
      <Header day={weatherDetails[0]}/>
      <Nav days={weatherDetails}/>
    </div>
  );
}

export default App;
