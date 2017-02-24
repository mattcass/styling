import React from 'react'
import ContentContainer from '../components/contentContainer'

export default () => (
  <main id="main">
    <div className="page__main">
      <header className="header">
        <div className="container">
          <h2>Modules</h2>
        </div>
      </header>
      <ContentContainer
        title="Module 1"
        meta="meta text here">
        An assorment of modules here
      </ContentContainer>
    </div>
  </main>
)
