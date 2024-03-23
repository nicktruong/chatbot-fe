import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoutes, renderRoutesFromList } from '@/utils';

import { routes } from './routes';
import { Home, Login, SignUp, Studio } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          {renderRoutesFromList({
            element: <Home />,
            routes: [routes.home, routes.chatbot, routes.chatbotDetail],
          })}
          <Route path={routes.studio} element={<Studio />} />
        </Route>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signUp} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
