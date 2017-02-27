import React from 'react';

export default ( props ) => (

  <section id={props.id} className="sg__section">

    <header className="sg__section__header">
      <div className="sg__section__header__content">
        <h2 className="sg__section__header__content__title">
          <span className="sg__section__header__content__title__text">
            {props.title}
          </span>

          {/*
            TODO:

            This should be a "copy quick link" control, so that a user
            can click on this element and copy the URL to their clipboard.
          */}
          <a href="#unique_id" className="sg__section__header__content__title__bookmark">
            <span className="sr-only">
              Quick Link:
            </span>
            <span aria-hidden="true">#</span>{props.id}
          </a>
        </h2>
        {/*
          Descriptions should contain the markup for a single,
          or multiple paragraphs, lists, whatever. That's why there
          is no containing <p> here, as we don't want to limit descriptions
          to a single paragraph.
         */}
        <div className="sg__section__header__content__intro-desc">
          {props.desc}
        </div>
      </div>
    </header>


    {/*
      TODO:

      Ability to loop through and create multiple __view & children
      instances depending on how many examples are needed for this
      particular contentSection.
     */}


    <div className="sg__section__primary-content">

      <div className="sg__section__primary-content__view">

        <div className="sg__section__primary-content__view__subtitle">
          {props.subtitle}
        </div>
        <div className="sg__section__primary-content__view__actions">
          <button type="button">
            View HTML
            <span className="sr-only">
              for {props.subtitle}
            </span>
          </button>
          <button type="button">
            View CSS
            <span className="sr-only">
              for {props.subtitle}
            </span>
          </button>
        </div>

        <div className="sg__section__primary-content__view__instance">
          {props.children}
        </div>

      </div>

    </div>

  </section>

);
