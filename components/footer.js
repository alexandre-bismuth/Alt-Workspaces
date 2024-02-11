'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white p-4">
            <div className="flex items-start justify-between space-x-2 mx-40 mt-4" style={{ height: "170px" }}>
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <Image src="/logos/alt-logo.svg" alt="Alt Workspaces Logo" width={25} height={25} style={{ cursor: 'pointer' }} />
                        <div className='font-ClashSemiBold text-xl ml-3' style={{ letterSpacing: '0.5px' }}> Alt Workspaces </div>
                    </div>
                    <div className='font-InterRegular text-sm text-gray-500 mt-2'>Automate your business with us.</div>
                </div>
                <div>
                    <div className='font-InterSemiBold text-base mb-2 text-main-purple'>Links</div>
                    <Link href="/">
                        <div className='font-InterRegular text-sm block mb-1 leading-6 text-gray-500 hover:underline'>Home</div>
                    </Link>
                    <Link href="/services">
                        <div className='font-InterRegular text-sm block mb-1 leading-6 text-gray-500 hover:underline'>Services</div>
                    </Link>
                    <Link href="/products">
                        <div className='font-InterRegular text-sm block mb-1 leading-6 text-gray-500 hover:underline'>Products</div>
                    </Link>
                    <Link href="/newsletter">
                        <div className='font-InterRegular text-sm block leading-6 text-gray-500 hover:underline'>Newsletter</div>
                    </Link>
                </div>
                <div>
                    <div className='font-InterSemiBold text-base mb-2 text-main-purple'>Contact us</div>
                    <div className='font-InterRegular text-sm block mb-1 leading-6 text-gray-500 hover:underline'>
                        <a href="mailto:altworkspaces@gmail.com">altworkspaces@gmail.com</a>
                    </div>
                    <div className='font-InterRegular text-sm block leading-6 text-gray-500 hover:underline'>
                        <a href="tel:+33695446524">+33 6 95 44 65 24</a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-300 mt-4 pt-4 text-center text-xs font-InterRegular">
                © 2024 Copyright by KoVer. All rights reserved.
            </div>
        </footer>
    );
}