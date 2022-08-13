import React from 'react'

const MyReact = () => {
  return (
    <div className="content">
    <section>
        <h3 className="title">React V6</h3>
        <p className="parag">
          <strong>Declarative:</strong> React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
        </p>
        <p className="parag">
         <strong>Component-Based:</strong> Build encapsulated components that manage their state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
        </p>
        <p className="parag">
          <strong>Learn Once,</strong>Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.
        </p>
    </section>
    <button className="btn">Apply Now</button>
  </div>
  )
}

export default MyReact;