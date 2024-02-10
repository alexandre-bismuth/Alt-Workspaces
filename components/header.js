'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import MagicButton from './magicbutton.js';

export default function Header() {
    const pathname = usePathname()
    return (
        <header className="flex items-center justify-between bg-white py-5 px-8 fixed w-full z-50">
            <Image src="/logos/alt-logo.svg" alt="Alt Workspaces Logo" width={30} height={30} style={{ cursor: 'pointer' }} />
            <div className='font-ClashSemiBold text-2xl ml-3'> Alt Workspaces </div>
            <nav className="flex-grow flex justify-center items-center">
                <Link href="/" passHref><span className={`mx-10 px-2 py-1 ${pathname === '/' ? 'text-main-purple' : ''} hover:text-main-purple cursor-pointer`}>Home</span></Link>
                <Link href="/services" passHref><span className={`mx-10 px-2 py-1 ${pathname === '/services' ? 'text-main-purple' : ''} hover:text-main-purple cursor-pointer`}>Services</span></Link>
                <Link href="/products" passHref><span className={`mx-10 px-2 py-1 ${pathname === '/products' ? 'text-main-purple' : ''} hover:text-main-purple cursor-pointer`}>Products</span></Link>
                <Link href="/portfolio" passHref><span className={`mx-10 px-2 py-1 ${pathname === '/portfolio' ? 'text-main-purple' : ''} hover:text-main-purple cursor-pointer`}>Portfolio</span></Link>
            </nav>

            <MagicButton />
        </header>
    );
}