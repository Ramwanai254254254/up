import React from "react";
import gsap from 'gsap';
import { useRef } from "react";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Hero = () => {

  useGSAP(() => {
    const heroSplit = new  SplitText('.title', {type: 'chars , words'});
      const paragraphSplit = new  SplitText('.subtitle', {type: ' lines'});

      heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

      gsap.from(heroSplit.chars, {
        yPercent: 100,
        duration: 1.8,
        stagger: 0.05,
        ease :'expo.out',

      });
      gsap.from(paragraphSplit.lines, {
        yPercent: 100,
        opacity: 0,
        delay: 1,
        duration: 1.8,
        stagger: 0.06,
        ease :'expo.out',
      });
      gsap.timeline({
        scrollTrigger: {
          trigger:'#hero',
          start:'top top',
          end:'bottom top',
          scrub: true,
        }

      })
      .to('.right-leaf', { y:+200 }, 0)
      .to('.left-leaf', { y:-200 }, 0)
  }, []);
    return (
        <>
        <section id= "hero" className= " noisy ">
  <h1 className="title">Khayal</h1>
  <img className="left-leaf" src="/images/hero-left-leaf.png" alt="left-leaf"/>
  <img className ="right-leaf" src="/images/hero-right-leaf.png" alt="right-leaf"/>
  
  
  <div className="body">
  <div className="content">
    <div className="space-y-5 hidden md:block">
      <p>cool classic</p>
        <p className="subtitle"> sip the spirit<br/> of summer </p>

  </div>
  <div className="view-cocktails">
    <p className="subtitle">Every meal is unic and sets you for your day/night</p>
    <a href="#cocktails" >View Cocktails</a>
  </div>
  </div>
  </div>
        </section>
        </>
    )
}
export default Hero;