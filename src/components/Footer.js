import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './footer.css';
const Footer = () => {
    return (
        <div className='mt-4'>
            <footer className="footer p-10 bg-purple-600 text-white">
        <div>
            <img className='logo' src={logo} alt="" />
            <p>KPHS School Ltd.<br/>Providing reliable tech since 1994</p>
        </div> 
        <div>
            <span className="footer-title text-black">Services</span> 
            <Link className="link link-hover">Branding</Link> 
            <Link className="link link-hover">Design</Link> 
            <Link className="link link-hover">Marketing</Link> 
            <Link className="link link-hover">Advertisement</Link>
        </div> 
        <div>
            <span className="footer-title text-black">KPHS</span> 
            <Link className="link link-hover">About us</Link> 
            <Link className="link link-hover">Contact</Link> 
            <Link className="link link-hover">Jobs</Link> 
            <Link className="link link-hover">Press kit</Link>
        </div> 
        <div>
            <span className="footer-title text-black">Legal</span> 
            <Link className="link link-hover">Terms of use</Link> 
            <Link className="link link-hover">Privacy policy</Link> 
            <Link className="link link-hover">Cookie policy</Link>
        </div>
        </footer>
    </div>
    );
};

export default Footer;