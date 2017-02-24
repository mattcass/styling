import React from 'react'
import ContentContainer from '../components/contentContainer'

export default () => (
  <main id="main">
    <div className="page__main">
      <header className="header">
        <div className="container">
          <h2>Forms</h2>
        </div>
      </header>
      <ContentContainer
        title="Base Input"
        meta="Examples of standard text inputs. Labels typically surround inputs and any associated label text or error text to ensure that all information associated with an input is announced by a screen reader.">
        <label htmlFor="unique_id_here1">
          <span className="block">Text Input:</span>
          <input type="text" id="unique_id_here1" />
        </label>
      </ContentContainer>
    </div>
  </main>
)
