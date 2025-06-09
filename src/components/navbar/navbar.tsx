import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();
    console.log(location);
    const navLinks = [
        { name: 'Revenue trends', path: '/' },
        { name: 'Sales by region', path: '/sales-by-region' },
        { name: 'Product performance', path: '/product-performance' },
        { name: 'Sales Rep', path: '/sales-rep-performance' },
        { name: 'Top products by revenue', path: '/top-products' },
    ];

    return (
        <nav className="bg-white shadow-md p-4">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
                <h1 className="text-2xl font-bold text-blue-600">Sales Dashboard</h1>
                <ul className="hidden md:flex space-x-6">
                    {navLinks.map((link, index) => {
                        const isActive = location.pathname === link.path;
                        return <li key={index}>
                            <Link to={link.path} className={`${isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-600'
                                } hover:text-blue-600 transition duration-200 pb-1`}>
                                {link.name}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
