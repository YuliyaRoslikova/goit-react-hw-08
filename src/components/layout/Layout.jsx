import { Suspense } from 'react';
import AppBar from '../app-bar/AppBar';

const Layout = ({ children }) => {
  return (
    <div className={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
