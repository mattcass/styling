import React from 'react'
import ContentContainer from '../components/contentContainer'

export default () => (
  <main id="main">
    <div className="page__main">
      <header className="header">
        <div className="container">
          <h2>Typography</h2>
        </div>
      </header>
      <ContentContainer
        title="Headings"
        meta="Heading elements are used to outline a document's topic hierarchy and should be used purposefully and not simply for changing font sizes. Headings may require type scale or other styling classes to be applied to them, so they may retain their semantic importance, but match the visual expectations of a design.">
        <ul className="list-clean">
          <li><h1>Level Heading 1</h1></li>
          <li><h2>Level Heading 2</h2></li>
          <li><h3>Level Heading 3</h3></li>
          <li><h4>Level Heading 4</h4></li>
          <li><h5>Level Heading 5</h5></li>
          <li><h6>Level Heading 6</h6></li>
        </ul>
      </ContentContainer>
    </div>
  </main>
)
