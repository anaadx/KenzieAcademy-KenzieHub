import { Toaster } from 'react-hot-toast';
import './App.css';
import GlobalStyle from "./page/styles/global";
import RoutesMain from './routes';

function App() {
  return (
    <div className="App">
    <main>
     <RoutesMain/>
    </main>
      <GlobalStyle/>
      <Toaster/>
    </div>
  );
}

export default App;
