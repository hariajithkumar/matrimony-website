import React, { useState } from 'react';

const FaqItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='card border-0 faq-card my-5'>
      <div className="accordion-item border-0">
        <h2 className="accordion-header" id={`heading-${title}`}>
          <button
            className={`accordion-button card-size ${isActive ? 'actives' : 'plus-btn'}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${title}`}
            aria-expanded={isActive}
            aria-controls={`collapse-${title}`}
            onClick={handleToggle}
          >
            {title}
          </button>
        </h2>
        <div
          id={`collapse-${title}`}
          className={`accordion-collapse collapse ${isActive ? 'show' : ''}`}
          aria-labelledby={`heading-${title}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body card-size">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  return (

    <>
    <div className='row'>
    <div className='col-lg-6 col-12'>
      <FaqItem title="Another Question" content="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor" />
      <FaqItem title="Yet Another Question" content="Yet another answer goes here." />
      <FaqItem title="Yet Another Question" content="Yet another answer goes here." />
    </div>
    <div className='col-lg-6 col-12'>
      {/* <FaqItem title="How to register on Tamil Matrimony?" content="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor" /> */}
      <FaqItem title="Another Question" content="Another answer goes here." />
      <FaqItem title="Yet Another Question" content="Yet another answer goes here." />
      <FaqItem title="Yet Another Question" content="Yet another answer goes here." />
    </div>
    </div>
    
    </>
    
  );
};

export default Faq;
