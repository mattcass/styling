import React from 'react'

export default (props) => (
  <section className="content container">
    <header className="content-header">
      <h3 className="content-title">{props.title}</h3>
      <small>{props.meta}</small>
    </header>
    <div className="content-main">
      {props.children}
    </div>
  </section>
)
