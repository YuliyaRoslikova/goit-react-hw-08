import { useSelector } from 'react-redux';
import { UserMenu } from '../user-menu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import AuthNav from '../auth-nav/AuthNav';
import Navigation from '../navigation/Navigation';
import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
