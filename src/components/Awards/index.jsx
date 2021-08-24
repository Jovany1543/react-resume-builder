import React, { useContext } from 'react';
import { ResumeContext } from '@app/App';

import Section from './Section';

const Awards = (props) => {
  const data = useContext(ResumeContext);
  const { awards } = useContext(ResumeContext);
  const { title, certificates } = awards;
  return <Section title={title} list={certificates} />;
};

export default Awards;
