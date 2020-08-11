import React from 'react';
import styles from './index.module.css';
import TextBox from '../../../components/TextBox';

const Education = () => {
  const TextData = [
    {
      year: '1990',
      title: 'I was born in Katowice',
      content:
        'lorem ipsum dolor sit amet, consectetur adlipisicing elit.Spaients, exercitationem, titam, dolores iste dolire est aut mod!',
    },
    {
      year: '1990',
      title: 'I was born in Katowice',
      content:
        'lorem ipsum dolor sit amet, consectetur adlipisicing elit.Spaients, exercitationem, titam, dolores iste dolire est aut mod!',
    },
    {
      year: '1990',
      title: 'I was born in Katowice',
      content:
        'lorem ipsum dolor sit amet, consectetur adlipisicing elit.Spaients, exercitationem, titam, dolores iste dolire est aut mod!',
    },
    {
      year: '1990',
      title: 'I was born in Katowice',
      content:
        'lorem ipsum dolor sit amet, consectetur adlipisicing elit.Spaients, exercitationem, titam, dolores iste dolire est aut mod!',
    },
  ];
  return (
    <div className={styles['education']}>
      <h1>EDUCATION</h1>
      {TextData.map((ele, index) => (
        <TextBox
          key={ele.year + index}
          year={ele.year}
          title={ele.title}
          content={ele.content}
        ></TextBox>
      ))}
    </div>
  );
};

export default Education;
