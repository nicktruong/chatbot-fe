import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { mapRoutesToPath } from '@/utils';

import { routes } from './routes';
import { Home, Login, SignUp } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {mapRoutesToPath({
          element: <Home />,
          routes: [routes.home, routes.chatbot, routes.chatbotDetail],
        })}

        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signUp} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
