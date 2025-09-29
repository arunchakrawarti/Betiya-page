import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    const NavItem = ({ src, alt, text }) => (
        <div className="flex items-center mx-2 text-gray-700 cursor-pointer hover:text-blue-600">
            <Image
                src={src}
                height={24}
                width={24}
                alt={alt}
                className="mr-1"
            />
            <p className="text-lg font-medium">{text}</p>
        </div>
    );

    return (
        <header className="w-full p-4 overflow-x-hidden">
            <div className="flex flex-wrap justify-between items-center w-full max-w-screen-xl mx-auto px-4">
                
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Image
                        src="/img/betiyalogo.png"
                        height={94}
                        width={183}
                        alt="betiyalogo"
                    />
                </div>

                {/* Search Bar */}
                <div className="hidden lg:flex flex-grow justify-center mx-4">
                    <div className="flex items-center rounded-lg p-3 w-[25vw] max-w-lg bg-gray-100 shadow-inner">
                        <Image
                            src="/img/Searchlogo.png"
                            height={24}
                            width={24}
                            alt="Search"
                            className="h-8 w-8 text-gray-500 mr-2"
                        />
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none w-full text-lg"
                        />
                    </div>
                </div>

                {/* Navigation Items */}
                <nav className="mt-4 lg:mt-0">
                    <div className="flex flex-wrap items-center space-x-3 lg:space-x-1 justify-end">
                        {/* Main Nav Items - visible only on large screens */}
                        <div className="hidden lg:flex space-x-5">
                            <NavItem src="/img/homelogo.png" alt="home" text="होम" />
                            <NavItem src="/img/categorylogo.png" alt="category" text="Category" />
                            <NavItem src="/img/categorylogo.png" alt="article" text="Article" />
                        </div>

                        {/* Always visible Nav Items */}
                        <Link href="/Signin">
                            <NavItem src="/img/writelogo.png" alt="write" text="Login" />
                        </Link>
                        <Link href="/Profile1">
                            <NavItem src="/img/profilelogo.png" alt="profile" text="प्रोफ़ाइल" />
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
