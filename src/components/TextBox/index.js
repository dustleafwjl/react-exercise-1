import React from 'react';
import styles from './index.module.css';
const TextBox = (props) => {
  // eslint-disable-next-line react/prop-types
  const { year, title, content } = props;
  return (
    <div className={styles['text-box']}>
      <div className={styles['text-year']}>{year}</div>
      <div>
        <div className={styles['title']}>{title}</div>
        <div className={styles['content']}>{content}</div>
      </div>
    </div>
  );
};
export default TextBox;
