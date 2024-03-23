import { Route } from 'react-router-dom';

interface Props {
  routes: string[];
  element: JSX.Element;
}

export const renderRoutesFromList = ({ routes, element }: Props) => {
  return routes.map(route => (
    <Route key={route} path={route} element={element} />
  ));
};
