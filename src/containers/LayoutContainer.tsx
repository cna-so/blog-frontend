import React, {ReactNode} from 'react';
import Header from "@/components/header";

const LayoutContainer = ({children}: { children: ReactNode }) => {
    return (
        <section className="container mx-auto px-4">
            <Header/>
            {children}
        </section>
    );
};

export default LayoutContainer;