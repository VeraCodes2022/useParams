import React from 'react'

const Angular = () => {
  return (
    <div className="content">
    <section>
        <h3 className="title">Introduction to Angular concepts</h3>
        <p className="parag">
          Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.
        </p>
        <p className="parag">
          The architecture of an Angular application relies on certain fundamental concepts. The basic building blocks of the Angular framework are Angular components that are organized into NgModules. NgModules collect related code into functional sets; an Angular application is defined by a set of NgModules. An application always has at least a root module that enables bootstrapping, and typically has many more feature modules.
        </p>
        <p className="parag">
          An application's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.
        </p>
    </section>
    <button className="btn">Apply Now</button>
  </div>
  )
}

export default Angular;