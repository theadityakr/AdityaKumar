import Copyright from './components/Copyright';
import Mask from './components/Mask';
import Background from './components/Background';
import Frame from './components/Frame';
import Theme from './components/Theme';
import SiteHeader from './components/SiteHeader';
import Content from './components/Content';
import { createContext, useState } from 'react';
import EnterView from './components/EnterView';
export const ThemeContext = createContext(null);

function App() {
  const [selectedComponent,setSelectedComponent] = useState(0);
  const [theme,setTheme] = useState('dark');
  const [monospaced,setMonospaced] = useState(false);


  const toggleTheme = () => {
    setTheme((curr)=> (curr === 'light' ? 'dark': 'light'));
  }

  const toggleMonospace = () => {
    setMonospaced(!monospaced);
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme,monospaced,toggleMonospace}}>
     <div  id={theme} className= {`App ${monospaced ? " monospaced" : ""}`}>
          <EnterView/>
          {/* <Background/> */}
          <Mask/>
          <Frame/>
          <Theme/>
          <SiteHeader setSelectedComponent = {setSelectedComponent}/>
          <Copyright/>
          <Content selectedComponent = {selectedComponent}/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
