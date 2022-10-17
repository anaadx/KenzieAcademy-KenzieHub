import { Toaster } from 'react-hot-toast';
import './App.css';
import AuthProvider from './context/AuthContext';
import GlobalStyle from "./page/styles/global";
import RoutesMain from './routes';

function App() {
  return (
    <div className="App">
    <main>
      <AuthProvider>
     <RoutesMain/>
      </AuthProvider>
    </main>
      <GlobalStyle/>
      <Toaster/>
    </div>
  );
}

export default App;
