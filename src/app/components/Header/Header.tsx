"use client";

import { useState } from "react";
import Link from "next/link";

import HamburgerButton from "../UI/HamburgerButton";

export default function Header() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex items-center justify-between px-[2rem] py-[2.4rem] text-[1.8rem]">
            <p>
                <Link href="/">Jake Godsall</Link>
            </p>
            <div className="hidden sm:block">
                <nav>
                    <ul className="flex gap-x-[1rem]">
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>Projects</li>
                        <li>Courses</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
            <div className="sm:hidden">
                <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    );
}
