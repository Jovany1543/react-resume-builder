import React from 'react';

import './index.scss';

const SectionList = ({ name, keywords }) => {
  const sectionTemplate = keywords.map((data, index) => {
    return <li key={index} dangerouslySetInnerHTML={{ __html: data }}></li>;
  });

  return (
    <div className="section-list">
      <div className="section-list__info">
        <div>
          <div className="section-list__university">{name}</div>
        </div>
      </div>
      <ul className="section-list__ul">{sectionTemplate}</ul>
    </div>
  );
};

export default SectionList;
