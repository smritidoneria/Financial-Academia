// NoNavBarLayout.jsx
import { Outlet } from 'react-router-dom';
import Footer from './Footer'; // Import your footer if needed

const NoNavBarLayout = () => {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default NoNavBarLayout;
