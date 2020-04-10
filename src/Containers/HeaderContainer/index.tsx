import React from 'react';
import { Layout, Menu } from 'antd';
import styles from './styles.module.scss';

const { Header } = Layout;

export default function HeaderContainer() {
  return (
    <Header className={styles.header}>
      <div className={styles['header__container']}>
        <h2 className={styles['header__logo']}>Weather</h2>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">Home</Menu.Item>
        </Menu>
      </div>
    </Header>
  );
}
