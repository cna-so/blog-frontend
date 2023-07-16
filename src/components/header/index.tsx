import React from 'react';
import WideMenu from "@/components/header/WideMenu";
import Link from "next/link";

const Header = () => {
    return (
        <header className={"flex justify-between items-center py-4"}>
            <Link href={"/"} className={"font-bold"}>CLOG</Link>
            <div className="hidden md:block"><WideMenu items={menuItems}/></div>
        </header>
    );
};

const menuItems = [
    {title: "Home", link: "/"},
    {title: "Categories", link: "/categories"},
]

export default Header;