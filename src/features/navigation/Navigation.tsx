import React from 'react';
import styles from './Navigation.module.css';
import {toggle, navState, activeEntry, MenuItems, activeMenuItem} from './nav';
import { useAppSelector, useAppDispatch } from '../../app/hooks';


export function Navigation() {
    const dispatch = useAppDispatch();
    var otherClasses = `${styles.header} d-flex flex-column`
    var buttonClass = 'bi-list'
    var navMenuState = useAppSelector(navState)
    if(navMenuState === 'open') {
        otherClasses = `${styles.header} d-flex flex-column ${styles['header-show']}`
        buttonClass = 'bi-x'
    }
    var currentActiveItem = useAppSelector(activeMenuItem)
    return (
        <section>
            <header id="header" className={otherClasses}>
                <i onClick={() => dispatch(toggle())} className={`${styles['header-toggle']} d-xl-none bi ${buttonClass}`}></i>

                <div className={`${styles['profile-img']}`}>
                <img src="assets/img/my-profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
                </div>

                <a href="index.html" className={`${styles['logo']} d-flex align-items-center justify-content-center`}>
                <h1 className="sitename">Ana Mesquita</h1>
                </a>

                <div className={`${styles["social-links"]} text-center`}>
                <a href="https://www.linkedin.com/in/anamsq" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>

                <nav id="navmenu" className={`${styles.navmenu}`}>
                <ul>
                    <li><a href="#hero" onClick={() => dispatch(activeEntry(MenuItems.Hero))} className={`${currentActiveItem === MenuItems.Hero ? styles.active: ''}`}><i className={`bi bi-house ${styles.navicon}`}></i>Home</a></li>
                    <li><a href="#about" onClick={() => dispatch(activeEntry(MenuItems.About))} className={`${currentActiveItem === MenuItems.About ? styles.active: ''}`}><i className={`bi bi-person ${styles.navicon}`}></i> About</a></li>
                    <li><a href="#resume" onClick={() => dispatch(activeEntry(MenuItems.Resume))} className={`${currentActiveItem === MenuItems.Resume ? styles.active: ''}`}><i className={`bi bi-file-earmark-text ${styles.navicon}`}></i> Resume</a></li>
                    <li><a href="#publications" onClick={() => dispatch(activeEntry(MenuItems.Publications))} className={`${currentActiveItem === MenuItems.Publications ? styles.active: ''}`}><i className={`bi bi-images ${styles.navicon}`}></i> Publications</a></li>
                    <li><a href="#services" onClick={() => dispatch(activeEntry(MenuItems.Services))} className={`${currentActiveItem === MenuItems.Services ? styles.active: ''}`}><i className={`bi bi-hdd-stack ${styles.navicon}`}></i> Services</a></li>
                    <li><a href="#contact" onClick={() => dispatch(activeEntry(MenuItems.Contact))} className={`${currentActiveItem === MenuItems.Contact ? styles.active: ''}`}><i className={`bi bi-envelope ${styles.navicon}`}></i> Contact</a></li>
                </ul>
                </nav>

            </header>
        </section>
    )
}

