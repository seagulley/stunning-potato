import React from 'react'
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <>
      <div className='title'>
        <h1 className='title-text wavy'>Nice to meet you! I'm Kallie.</h1>
        <p className='title-subtext'>Research Assistant | Freelance Illustrator | Computing Science Student at the University of Alberta</p>
      </div>
      <div className='section'>
        <h2 className='callout'>
          <span className='callout-word callout-word-1'>Let's </span>
          <span className='callout-word callout-word-2'>bring </span>
          <span className='callout-word callout-word-3'>your </span>
          <span className='callout-word callout-word-4'>ideas </span>
          <span className='callout-word callout-word-5'>to </span>
          <span className='callout-word callout-word-6'>life!</span>
        </h2>
        <div className='description'>
          <p>Experienced in both coding and design. I love creating and the satisfaction that comes with bringing ideas to life.</p>
          <p>Outside of school and work, I spend my time skateboarding, playing video games, and writing music!</p>
        </div>
      </div>
      
    </>
  );
}
