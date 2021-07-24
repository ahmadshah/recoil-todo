import React from 'react';
import { RecoilRoot } from 'recoil';
import { Layout } from 'antd';
import { TodoFilter, TodoList } from './components';
import styles from './styles/app.module.scss';

const { Content, Header } = Layout;

const App = () => {
  return (
    <RecoilRoot>
      <Layout>
        <Header>Todo</Header>
        <Content className={ styles.content_container }>
          <div>
            <TodoFilter />
          </div>
          <div className={ styles.content }>
            <TodoList />
          </div>
        </Content>
      </Layout>
    </RecoilRoot>
  );
};

export default App;
