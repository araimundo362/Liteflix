import React from "react";
import Image from 'next/image';
import { PlusOutlined, MenuOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Avatar } from 'antd';

import { HeaderProps } from './types';
import LITEFLIX from '../../assets/LITEFLIX.svg';
import NOTIFY from '../../assets/Notificacion.svg';
import PERFIL from '../../assets/perfil.svg';
import CustomButton from "../CustomButton";
import { useMobile } from "../../hooks/useMobile";

import styles from "./Header.module.scss";


const Header: React.FC<HeaderProps> = () => {
  
  const isMobileWeb = useMobile();
  
  const navigate = () => {
    console.log('Me cliquiaste bro');
  }
  
  const customStyleButton = {
    background: 'transparent',
    color: 'white',
    border: 'none !important',
    margin: '0 7px' 
  };

  const mobileHeader = (
    <div className={ styles.header }>
      <Button className={styles.header__menuButton} icon={<PlusCircleOutlined style={{ fontSize: 30, color: "white", background: "transparent" }} />} />
      <Image src={LITEFLIX} alt="Liteflix logo" />
      <Avatar className={styles.header__avatarContainer} shape="circle" src={<Image className={styles.header__avatarContainer__avatar} src={PERFIL} alt="Profile img" />}/>
    </div>
  );

  const webHeader = (
    <div
      className={ styles.header }
    >
      <div className={styles.header__leftContainer}>
        <Image src={LITEFLIX} alt="Liteflix logo" />
        <CustomButton label="Agregar Pelicula" style={customStyleButton} type="link" ghost={false} icon={<PlusOutlined style={{ fontSize: 30}}/>} onClick={navigate}/>
      </div>
      <div className={styles.header__buttonsContainer}>
        <Button className={styles.header__menuButton} icon={<MenuOutlined style={{ fontSize: 30, color: "white", background: "transparent" }} />} />
        <Image src={NOTIFY} alt="notificacion" />
        <Avatar className={styles.header__avatarContainer} shape="circle" src={<Image className={styles.header__avatarContainer__avatar} src={PERFIL} alt="Profile img" />}/>
      </div>
    </div>
  );

  return isMobileWeb ? mobileHeader : webHeader;
}

export default Header;