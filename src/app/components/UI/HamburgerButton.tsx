import { Dispatch, SetStateAction } from "react";

interface Props {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function HamburgerButton({ isOpen, setIsOpen }: Props) {
    const handleClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div
            className="flex h-[1.5rem] w-[1.8rem] flex-col justify-between"
            onClick={handleClick}
        >
            <div
                className={
                    isOpen
                        ? "h-[0.3rem] w-full translate-y-[0.6rem] rotate-45 transform bg-black transition duration-500"
                        : "h-[0.3rem] w-full bg-black transition duration-500"
                }
            ></div>
            <div
                className={
                    isOpen
                        ? "w-ful invisible h-[0.3rem] transform duration-500"
                        : "h-[0.3rem] w-full transform bg-black duration-500"
                }
            ></div>
            <div
                className={
                    isOpen
                        ? "h-[0.3rem] w-full translate-y-[-0.6rem] rotate-[-45deg] transform bg-black  transition duration-500"
                        : "h-[0.3rem] w-full bg-black transition duration-500"
                }
            ></div>
        </div>
    );
}
