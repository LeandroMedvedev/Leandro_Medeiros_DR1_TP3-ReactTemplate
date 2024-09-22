import { Route, Routes } from 'react-router-dom';
import {
  Home,
  Task05,
  Task06,
  Task07,
  Task08,
  Task09,
  Task10,
  Task11,
  Task12,
  Task13,
  Task14,
  Task15,
  Task16,
} from '../components';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/task-five" element={<Task05 />} />
      <Route path="/task-six" element={<Task06 />} />
      <Route path="/task-seven" element={<Task07 />} />
      <Route path="/task-eight" element={<Task08 />} />
      <Route path="/task-nine" element={<Task09 />} />
      <Route path="/task-ten" element={<Task10 />} />
      <Route path="/task-eleven" element={<Task11 />} />
      <Route path="/task-twelve" element={<Task12 />} />
      <Route path="/task-thirteen" element={<Task13 />} />
      <Route path="/task-fourteen" element={<Task14 />} />
      <Route path="/task-fifteen" element={<Task15 />} />
      <Route path="/task-sixteen" element={<Task16 />} />
    </Routes>
  );
}

export default AppRoutes;
