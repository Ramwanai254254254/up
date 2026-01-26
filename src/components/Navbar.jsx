import React from 'react';
import { navLinks } from '../../constants/index.js';
import { useGSAP } from '@gsap/react'; // Ensure this custom hook is set up correctly
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    // Correct Hook usage
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
                scrub: true, // Optional: makes the transition smooth with scroll
            }
        });

        navTween.fromTo('nav', 
            { backgroundColor: 'transparent' }, // From state
            { 
                backgroundColor: '#00000050', // Added '#'
                backdropFilter: 'blur(10px)', // Corrected property name
                duration: 0.3,
                ease: 'power1.inOut'
            } // To state
        );
    });

    return (
        <nav className="fixed top-0 w-full z-50"> {/* Added positioning classes */}
            <div className="flex justify-between items-center p-4">
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logos.svg" alt="logo" className="w-8 h-8" />
                    <p className="font-bold">Khayal</p>
                </a>
                <ul className="flex gap-4">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;