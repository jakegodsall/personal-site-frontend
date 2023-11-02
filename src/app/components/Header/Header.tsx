"use client";

import HamburgerButton from "../UI/HamburgerButton";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex items-center justify-between px-[2rem] py-[2.4rem] text-[1.8rem]">
            <p>Jake Godsall</p>
            <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}
