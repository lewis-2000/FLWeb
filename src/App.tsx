import React from 'react';
import './App.css'
// import Page from './components/Page'
import TemplateConfig from './components/admin/TemplateConfig';
import './flengine/templateRegistry'

const App: React.FC = () => {
  return (
    <div>
      {/* <h1>Group 1:</h1>
      <Page groupId="group1" />

      <h1>Group 2:</h1>
      <Page groupId="group2" /> */}

      {/* <Page groupId='base-01' /> */}
      {/* <Page groupId='base-02' /> */}
      <TemplateConfig />

    </div>
  );
};

export default App;