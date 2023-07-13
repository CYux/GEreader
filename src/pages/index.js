import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60vh',
          fontSize: '20px',
        }}>
        <h2>🏗️Building...</h2>
        <p>
          Edit <code>pages/index.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}