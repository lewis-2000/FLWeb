import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Page from './components/Page'
import './flengine/templateRegistry'
import TemplateConfig from './components/admin/TemplateConfig';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page groupId="base-02" />} />
        <Route path="/builder" element={<TemplateConfig />} />
      </Routes>

    </div>
  );
};

export default App;
