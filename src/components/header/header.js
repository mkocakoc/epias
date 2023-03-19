import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.css';
import workingImages from '../../assets/images/floppy-disk-solid.svg';
import profileImages from '../../assets/images/user-solid.svg';


const HeaderModule = () => (
  <div className={styles.Header}>           
          <div className='logo'>
            <a href='#' className='logo'>
              <img src='https://www.epias.com.tr/wp-content/themes/epias/images/epias-beyaz.svg' alt='logo' height={48} />
            </a>
          </div>
          <div className={styles.rightArea}>
          <div className={styles.workArea}>
            <div className={styles.icon}>
            <img src={workingImages} alt='workingArea' height={32} />
            </div>
            <div className={styles.text}>
              Çalışma Alanı 1
            </div>
          </div>
          <div className={styles.userArea}>
            <div className={styles.icon}>
            <img src={profileImages} alt='workingArea' height={32} />
            </div>
            <div className={styles.text}>
              <span className={styles.name}>Merhaba</span>
              <span className={styles.name}>Mehmet</span>
            </div>
          </div>
          </div>
      </div>
      );

      HeaderModule.propTypes = { };

      HeaderModule.defaultProps = { };

      export default HeaderModule;
