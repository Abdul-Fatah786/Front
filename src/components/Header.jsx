import { Search, ShoppingCart, Heart, MapPin, Package, User } from 'lucide-react'
import { Link } from 'react-router-dom';
import "../index.css"

export default function Header() {
    return (
        <header className="w-full">
            {/* Top bar */}
            <div className="bg-gray-100 py-2 px-4 text-sm">
                <div className="container mx-auto flex justify-between items-center">
                    <span>Welcome to Worldwide Electronics Store</span>
                    <div className="flex space-x-4">
                        <Link to="/store-locator" className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            Store Locator
                        </Link>
                        <Link to="/track-order" className="flex items-center">
                            <Package className="w-4 h-4 mr-1" />
                            Track Your Order
                        </Link>
                        <Link to="/shop" className="flex items-center">
                            <ShoppingCart className="w-4 h-4 mr-1" />
                            Shop
                        </Link>
                        <Link to="/account" className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            My Account
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main header */}
            <div className="container mx-auto py-4 px-4 flex justify-between items-center">
                <Link to="/" className="text-3xl font-bold">
                    electro<span className="text-yellow-400">.</span>
                </Link>
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-yellow-400">Home</Link>
                    <Link to="/about" className="hover:text-yellow-400">About Us</Link>
                    <Link to="/blog" className="hover:text-yellow-400">Blog</Link>
                    <Link to="/pages" className="hover:text-yellow-400">Pages</Link>
                    <Link to="/features" className="hover:text-yellow-400">Features</Link>
                    <Link to="/contact" className="hover:text-yellow-400">Contact Us</Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <div className="hidden md:block">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                            </svg>
                            <div className="ml-2">
                                <div className="text-sm font-semibold">Support</div>
                                <div className="text-xs">(+800) 856 800 604</div>
                                <div className="text-xs">Email: info@electro.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search bar */}
            <div className="bg-yellow-400 py-3">
                <div className="container mx-auto px-4 flex items-center">
                    <div className="relative w-48 mr-4">
                        <select className="appearance-none bg-yellow-500 text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-yellow-600 w-full">
                            <option>Shop by Department</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex-grow relative">
                        <input type="text" placeholder="Search for products" className="w-full py-2 px-4 rounded-l" />
                        <button className="absolute right-0 top-0 bottom-0 bg-gray-800 text-white px-4 rounded-r">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="flex items-center ml-4 space-x-4">
                        <button className="text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </button>
                        <button className="text-gray-800">
                            <Heart className="w-6 h-6" />
                        </button>
                        <Link to="/cart" className="flex items-center text-gray-800">
                            <ShoppingCart className="w-6 h-6 mr-2" />
                            <span className="bg-white rounded-full px-2 py-1 text-xs font-bold">$1,215.00</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-2 text-sm">
                <Link to="/" className="text-gray-600 hover:text-yellow-400">Home</Link>
                <span className="mx-2">&gt;</span>
                <span className="text-gray-800">My Account</span>
            </div>
        </header>
    )
}