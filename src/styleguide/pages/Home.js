import React from 'react'
import ContentContainer from '../components/contentContainer'


export default () => (
  <main id="main">
    <div className="page__main">
      <header className="header">
        <div className="container">
          <h2>Styleguide</h2>
        </div>
      </header>
      <ContentContainer
        title="Project Overview"
        meta="meta information about this content block here">
        <ul className="list-clean">
          <li><a href="https://google.com">Invision Prototype</a></li>
          <li><a href="https://google.com">BaseCamp</a></li>
          <li><a href="https://google.com">Github</a></li>
        </ul>
      </ContentContainer>
      <ContentContainer
        title="Documentation"
        meta="Beyond the style guide, we have provided the following additional sources of documentation to further explain our deliverables, as well as links to 3rd party resources. ">
        <ul className="list-clean">
          <li><a href="https://google.com">Link to Dev Documents here</a></li>
        </ul>
      </ContentContainer>
    </div>
  </main>
)
