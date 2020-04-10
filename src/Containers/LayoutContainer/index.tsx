import React from 'react';
import { Layout } from 'antd';
import ContentContainer from '../ContentContainer';
import HeaderContainer from '../HeaderContainer';
import styles from './styles.module.scss';

export default function LayoutContainer() {
  return (
    <Layout className={styles.layout}>
      <HeaderContainer />
      <ContentContainer />
    </Layout>
  );
}
