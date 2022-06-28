import React from 'react'
import { Link } from 'react-router-dom';

export default function Coding() {
  return (
    <div>
        <h1>Coding</h1>
        <p>I'm currently researching compound word embeddings at the University of Alberta. 
            Outside of work, I enjoy spending my time exploring different areas of Computer Science and expanding my knowledge.</p>
        <h1>
            Tools of the trade:
        </h1>
        <ul>
            <li>Data Science
                <p>tflearn, pandas, numpy, scikit-learn, data visualization</p>
            </li>
            <li>Game Development
                <p>Unity, Godot, LOVE2D</p>
            </li>
            <li>Web Development
                <p>React, Flask, SCSS, Node</p>
            </li>
        </ul>
        <h2>Languages</h2>
        <p>Python, Javascript, C, C++, C#</p>
        <h1>Projects</h1>
        {/* insert some project cards here */}
        {/* study planner
        blog
        shopping site */}
    </div>
  );
}
