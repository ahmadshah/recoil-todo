import React from 'react';
import { RecoilRoot } from 'recoil';
import { Layout } from 'antd';
import { TodoList } from './components';

const { Content, Header } = Layout;

const App = () => {
  return (
    <RecoilRoot>
      <Layout>
        <Header>Todo</Header>
        <Content>
          <TodoList />
        </Content>
      </Layout>
    </RecoilRoot>
  );
};

export default App;
