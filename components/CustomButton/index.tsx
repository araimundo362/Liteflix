import React from "react";
import { Button } from 'antd';

import { CustomButtonProps } from './types';

import styles from "./CustomButton.module.scss";

// icon={<PoweroffOutlined />}
const CustomButton: React.FC<CustomButtonProps> = ({label, icon, type, ghost, style, onClick}) => {
  return (
    <div
    >
      <Button className={styles.custom_button} style={style} type={type} ghost={ghost} icon={icon} onClick={onClick}>
        <p className={ styles.custom_button__label}>{label}</p>
      </Button>
    </div>
  )
}

export default CustomButton;