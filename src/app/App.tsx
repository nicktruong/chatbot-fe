import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from './routes';
import { Login, SignUp } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signUp} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
