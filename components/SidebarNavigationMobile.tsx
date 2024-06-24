import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import SideNavbar from './SideNavbar'
import Logo from './Logo'
import { AlignJustify } from 'lucide-react'


const SidebarNavigationMobile = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify
                    className='cursor-pointer'
                />
            </SheetTrigger>
            <SheetContent>
                <div className='flex flex-col items-center justify-between h-full py-8'>
                    <div className='flex flex-col items-center gap-y-32'>
                        <Logo />
                        <SideNavbar                       />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default SidebarNavigationMobile