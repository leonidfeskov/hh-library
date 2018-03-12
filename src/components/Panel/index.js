import React  from 'react';
import './panel.css';
import Logo from '../Logo';
import User from '../User';
import Menu from '../../containers/Menu';
import Separator from '../Separator';
import Footer from '../Footer';


export default function Panel() {
    return(
        <div className="panel">
            <div className="panel__inner">
                <Logo />
                <Separator />
                <User />
                <Separator />
                <Menu />
                <Footer />
            </div>
        </div>
    )
}
