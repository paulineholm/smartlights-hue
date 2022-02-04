import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Nav from '../nav/Nav';
const Layout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <Nav />
      </>
     );
}
export default Layout;