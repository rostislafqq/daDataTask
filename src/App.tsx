import ComboboxContainer from "./components/comboboxSearch/comboboxContainer";
import GeolocationContainer from "./components/geolocation/geolocationContainer";
import { Navigate, Route, Routes } from 'react-router-dom';
import './null.scss'

const App= () => {
  

  return (
    <Routes>
      <Route path='*' element={<Navigate to='/geolacation'/>}/>
      <Route path="/geolacation" element={<GeolocationContainer />} /> 
      <Route path="/combobox" element={<ComboboxContainer />} />
    </Routes>
  );
};

export default App;
