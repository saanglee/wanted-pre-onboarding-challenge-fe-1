import React from 'react';
import Layout from '../../components/Layout';
import List from '../../components/todo/List';
import LogIn from '../login/LogIn';

const Home = () => {
  return (
    <div>
      <Layout>
        <List />
      </Layout>
    </div>
  );
};

export default Home;
