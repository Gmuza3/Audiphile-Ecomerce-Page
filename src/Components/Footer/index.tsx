import style from './style.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import desktopImg from '../../../public/assets/shared/desktop/image-best-gear.jpg'
import tabletImg from '../../../public/assets/shared/tablet/image-best-gear.jpg'
import mobileImg from "../../../public/assets/shared/mobile/image-best-gear.jpg"

const Footer = () => {
    const location = useLocation();
    const showInfoZone = [
        '/',
        '/products/category',
        '/product'
    ].some(path => location.pathname.startsWith(path));
    const checkoutShow = !(location.pathname === "/products/checkout" || location.pathname === "/profile" || location.pathname === "/update-user");

    return (
        <div className={style['footer']}>
            {showInfoZone && checkoutShow && (
                <div className={style['info-zone']}>
                    <div className={style['info-zone-leftSide']}>
                        <h3>Bringing you the <span className={style.highlight}>best</span> audio gear</h3>
                        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                    </div>
                    <div className={style['info-zone-rightSide']}>
                        <img src={desktopImg} alt="Image" className={style['desktop-img']} />
                        <img src={tabletImg} alt="Image" className={style['tablet-img']} />
                        <img src={mobileImg} alt="Image" className={style['mobile-img']} />
                    </div>
                </div>
            )}
            <div className={style['footer-zone']}>
                <div className={style['upSideFooter']}>
                    <div className={style.footerLogoZone}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="143" height="25" viewBox="0 0 143 25" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M57.9755 4.10884V0H53.2131V4.10884H57.9755ZM41.8721 20.3997C43.5076 20.3997 44.9648 19.8429 46.1074 18.8803L46.5635 19.9241H50.1425V0.792094L45.3611 0.792093V6.38308C44.3548 5.75732 43.1686 5.40721 41.8721 5.40721C37.5634 5.40721 34.4943 8.52769 34.4943 12.896C34.4943 17.2644 37.5634 20.3997 41.8721 20.3997ZM7.36265 20.3849C8.99354 20.3849 10.4497 19.8476 11.5995 18.9152L12.0137 19.9093H15.7527V5.85311L12.1479 5.85285L11.6531 6.93986C10.4936 5.98222 9.01642 5.42934 7.36265 5.42934C3.06909 5.42934 0 8.52769 0 12.8809C0 17.2493 3.06909 20.3849 7.36265 20.3849ZM8.00933 16.098C6.19773 16.098 4.86614 14.7278 4.86614 12.8921C4.86614 11.0677 6.18681 9.69748 8.00933 9.69748C9.82094 9.69748 11.1525 11.0677 11.1525 12.8921C11.1525 14.7278 9.82094 16.098 8.00933 16.098ZM32.4542 13.8899C32.4542 17.823 29.6916 20.3849 25.544 20.3849C21.396 20.3849 18.6184 17.823 18.6184 13.8899V5.86794H23.4549V13.6793C23.4549 15.163 24.2516 16.0355 25.544 16.0355C26.836 16.0355 27.6177 15.1482 27.6177 13.6793V5.86794H32.4542V13.8899ZM39.3758 12.8963C39.3758 14.7317 40.7074 16.1128 42.519 16.1128C44.3306 16.1128 45.6622 14.7317 45.6622 12.8963C45.6622 11.0607 44.3306 9.67952 42.519 9.67952C40.7074 9.67952 39.3758 11.0607 39.3758 12.8963ZM58.0127 5.86768V19.9239H53.1762V5.86768H58.0127ZM68.1095 20.3849C72.6727 20.3849 75.9821 17.2384 75.9821 12.896C75.9821 8.53888 72.6727 5.40747 68.1095 5.40747C63.5315 5.40747 60.237 8.53888 60.237 12.896C60.237 17.2384 63.5315 20.3849 68.1095 20.3849ZM65.0812 12.8963C65.0812 14.7546 66.346 16.0355 68.1095 16.0358C69.873 16.0358 71.1378 14.7548 71.1378 12.8966C71.1378 11.0492 69.873 9.75709 68.1095 9.75709C66.346 9.75709 65.0812 11.038 65.0812 12.8963ZM82.9978 25V19.4663C83.9888 20.0655 85.1511 20.3997 86.4208 20.3997C90.7144 20.3997 93.7835 17.2753 93.7835 12.896C93.7835 8.51676 90.7144 5.40721 86.4208 5.40721C84.7523 5.40721 83.2662 5.98508 82.1114 6.98463L81.5056 5.86794H78.2165V25H82.9978ZM82.6307 12.8958C82.6307 14.7424 83.9623 16.1126 85.7739 16.1126C87.5743 16.1126 88.9171 14.7424 88.9171 12.8958C88.9171 11.0492 87.5855 9.679 85.7739 9.679C83.9623 9.679 82.6307 11.0492 82.6307 12.8958ZM100.839 19.9241V12.4181C100.839 10.6143 101.751 9.57462 103.215 9.57462C104.477 9.57462 105.046 10.4011 105.046 12.0222V19.9241H109.882V11.4597C109.882 7.81629 107.811 5.45225 104.587 5.45225C103.188 5.45225 101.873 5.95931 100.839 6.79279V0.792093H96.0023V19.9241H100.839ZM117.574 0V4.10884H112.811V0H117.574ZM117.611 5.86768H112.774V19.9239H117.611V5.86768ZM125.489 0.792093V19.9241H120.653V0.792093H125.489ZM135.34 20.3851C138.863 20.3851 141.704 18.3808 142.692 15.1729H137.879C137.414 15.9957 136.47 16.4911 135.34 16.4911C133.813 16.4911 132.79 15.6573 132.474 14.045H142.9C142.963 13.6103 143 13.1868 143 12.7633C143 8.63988 139.866 5.40747 135.34 5.40747C130.933 5.40747 127.714 8.57611 127.714 12.8854C127.714 17.1795 130.959 20.3851 135.34 20.3851ZM132.559 11.3639H138.236C137.811 9.95908 136.8 9.20109 135.34 9.20109C133.931 9.20109 132.951 9.96767 132.559 11.3639Z" fill="white" />
                        </svg>
                    </div>
                    <ul className={style.footNavBar}>
                            <li><NavLink to={"/"} className={style.active}>home</NavLink></li>
                            <li><NavLink to={"/products/category/headphones"} className={style.active}>headphones</NavLink></li>
                            <li><NavLink to={"/products/category/speakers"} className={style.active}>speakers</NavLink></li>
                            <li><NavLink to={"/products/category/earphones"} className={style.active}>earphones</NavLink></li>
                    </ul>
                </div>
                <div className={style['downSideFooter']}>
                    <span>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</span>
                    <div className={style['inner-container']}>
                        <p>Copyright 2021. All Rights Reserved</p>
                        <ul className={style.footSvgBar}>
                                <li>
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" fill="#FFF" fillRule="nonzero" />
                                    </svg>
                                </li>
                                <li>
                                    <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" fill="#FFF" fillRule="nonzero" />
                                    </svg>
                                </li>
                                <li>
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="#FFF" fillRule="nonzero" />
                                    </svg>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
