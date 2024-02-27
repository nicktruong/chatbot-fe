import { Route } from 'react-router-dom';

export const mapRoutesToPath = ({
  routes,
  element,
}: {
  routes: string[];
  element: JSX.Element;
}) => {
  return routes.map(route => (
    <Route key={route} path={route} element={element} />
  ));
};
