'use client';
import { Menu, Phone } from 'lucide-react';
import Link from 'next/link';

interface TopnavProps {
    onMobileMenuClick?: () => void;
}

const Topnav = ({ onMobileMenuClick }: TopnavProps) => {
    return (
        <div className="bg-[#50B6EA] border-b border-[rgba(2,73,121,.2)] w-full">
            <div className="inner inner-header flex flex-row items-center justify-between min-h-[4.4rem] p-0">

                {/* Left: logo + phone */}
                <div className="flex items-center gap-[1.6rem]">
                    <Link href="/" aria-label="Pipe Monkeys">
                        <img src="/logos/logo-94.svg" alt="Pipe Monkeys" className="block h-[3.2rem]" />
                    </Link>
                    <a
                        href="tel:7187491830"
                        className="hidden lg:flex items-center gap-2 text-[#024979] text-[1.4rem] font-light tracking-[.05rem] no-underline transition-colors duration-[350ms] hover:text-[#013560]"
                    >
                        <Phone size={14} strokeWidth={2} />
                        <span>(718) 749-1830 — Same-Day Service Available</span>
                    </a>
                </div>

                {/* Right: Contact Now button + mobile menu */}
                <div className="flex items-center gap-[1rem]">
                    <Link
                        href="/contact-us"
                        className="hidden lg:inline-flex items-center px-[1.6rem] py-[0.7rem] bg-[#024979] text-white text-[1.3rem] font-semibold rounded-[3px] no-underline transition-colors duration-[350ms] hover:bg-[#D6000B]"
                    >
                        Contact Now
                    </Link>
                    <button
                        onClick={onMobileMenuClick}
                        className="lg:hidden flex items-center justify-center bg-transparent border-0 cursor-pointer text-[#024979] p-[0.4rem]"
                        aria-label="Menu"
                    >
                        <Menu size={30} strokeWidth={2.5} />
                        <em className="sr-only not-italic">Menu icon</em>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Topnav;
