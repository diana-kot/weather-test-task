import React from 'react';

import { MainLayoutInt } from '../../settings/interfaces';
import Header from '../../components/Header/Header';

export default function MainLayout({ children, gradient = false, enableHeader = true }: MainLayoutInt) {
    return (
        <div className={`wrapper wrapper-color ${gradient ? 'wrapper-gradient' : ''}`}>
            <div className="content">
                <div className="content__top">
                    {enableHeader ? <Header /> : null}
                    <main>{children}</main>
                </div>
                <footer className="page-footer"></footer>
            </div>
        </div>
    );
}
