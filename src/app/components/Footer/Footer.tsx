import Link from "next/link";

export default function Footer() {
    return (
        <div className="mb-[2.5rem] flex w-full flex-col items-center">
            <ul className="mb-[3rem] flex flex-col gap-[1.4rem] text-center text-[2rem]">
                <li>
                    <Link href="https://uk.linkedin.com/in/godsalljake">
                        LinkedIn
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/jakegodsall">GitHub</Link>
                </li>
                <li>Email</li>
            </ul>
            <p className="text-center text-[2rem]">© 2023</p>
        </div>
    );
}
