import React from 'react';

function About() {

    return (
        <section className="container">
            <h2 class="top-title">Bojan Golic</h2>
            <hr></hr>
            <div className="d-flex">
                <img class="mb-5" id="avatar" src="/docs/Bojan.jpg" alt="Bojan Golic" />
                <div>
                    <p>
                        Hello, I'm Bojan, I live in Virginia and I'm a fullstack developer
                        I love coding, travel, and reading books.
                    </p>
                    <p>
                        I developed my technical and non-technical skills
                        work on Front and Back-end projects using REACT, NODE.JS, MERN, STATE, MYSQL, HTML, CSS, JAVA-SCRIPT and other frameworks for building real world projects
                    </p>
                    <p>
                        At the same time, I have developed and improved my professional skills as a communicator and listener,
                        as an active team member, collaborator, and mentor. This has allowed me to gain experience and have
                        the opportunity to work, contribute and learn remotely with programmers and teams around the world
                        seamlessly thus making me a Global Citizen.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;
