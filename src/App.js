import './App.css';
import ControlPanel from './views/ControlPanel';
import SpacePanel from './views/SpacePanel';
import Layout from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom';
import "./fonts/circular-std-medium-500.ttf";
import RoomsContextProvider from './contexts/RoomsContext';
import LightContextProvider from './contexts/LightContext';


function App() {
  return (
        <RoomsContextProvider>
          <LightContextProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<ControlPanel />} />
                <Route path="/spacepanel/:roomId/:lightsId" element={<SpacePanel />} />
              </Route>
            </Routes>
          </LightContextProvider>
        </RoomsContextProvider>
  );
}

// Kig på "No match" på react router så man kan lave fejl siden


export default App;
