'use client';
import React, { useEffect, useState } from 'react'
import Themetoggler from './Themetoggler';
import Logo from './Logo';
import UpperNav from './UpperNav';
import MobileNavigation from './MobileNavigation';
import { usePathname } from 'next/navigation';

const Header = () => {

    const [header, setHeader] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [])

    return (
        <header className={`${header ? 'py-1 bg-tertiary shadow-lg dark:bg-accent'
            : 'py-6 dark:bg-transparent'
            } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-gray-100'}`}>
            <div className='container mx-auto'>

      <div className="flex items-center gap-x-12 justify-end">
                        {/* Nav */}
                        <UpperNav
                            containerStyles='hidden xl:flex gap-x-12         items-center'
                            linkStyles='relative hover:text-primary transition-all'
                            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
                        />
                        {/* Theme Toggler */}
                        <Themetoggler />

                        {/*Mobile Navigation */}
                        <div className='xl:hidden'>
                            <MobileNavigation />
                        </div>
                    </div>
            </div>
        </header>
    )
}

export default Header