import React from 'react';
import avatarImg from '../../../assets/avatar.jpg';
import styles from './index.module.css';

const Avatar = () => {
  return (
    <div className={styles['avatar']}>
      <img src={avatarImg}></img>
      <h1>HELLO,</h1>
      <h1>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h1>
    </div>
  );
};
export default Avatar;
