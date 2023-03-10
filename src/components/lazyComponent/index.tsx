import { FC, lazy } from 'react';

interface LazyComponentProps {
  component: string;
}

const LazyComponent: FC<LazyComponentProps> = ({ component }) => {
  const Component = lazy(() => import(`src/pages/${component}`));
  return <Component />;
};

export default LazyComponent;
