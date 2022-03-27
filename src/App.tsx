import './App.scss';
import ChartPage from './ui/page/chart-page/chart-page';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ChartDetails from './ui/page/chart-details/chart-details';
import Loading from './ui/shared-component/loading/loading';


function App() {
  const loadingState = useSelector((state: any) => state.loading);

  return (
    <div className="app-container">
      {loadingState && <Loading /> }
      <Router>
        <Routes>
            <Route path="/chart" element={<ChartPage />} />
            <Route path="/chart-details" element={<ChartDetails />} />
            <Route path="*" element={<Navigate to="/chart" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
