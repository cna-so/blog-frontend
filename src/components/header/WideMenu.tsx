import React, {FC, useState} from 'react';
import Link from "next/link";
import {CiSearch} from "react-icons/ci";

interface IWideMenu {
    items: {
        title: string
        link: string
    }[]
}

const WideMenu: FC<IWideMenu> = ({items}) => {

    return (
        <ul className="flex  items-center gap-4">
            {items.map((item, index) => (
                <li key={index}>
                    <Link href={item.link} className="font-bold text-lg hover:color-blue-200">
                        {item.title}
                    </Link>
                </li>
            ))}
            <div className={"rounded-xl font-bold bg-gray-800 py-1 px-5 flex items-center gap-2 cursor-pointer"}>
                <CiSearch fontSize={21}/>
                <span>Search</span>
            </div>
            <Link href={"/auth"} className={"bg-accent-color py-1 px-5 rounded-xl font-bold"}>
                Join
            </Link>
        </ul>
    );
};

export default WideMenu;