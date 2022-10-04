import logo from './logo.svg';
import './App.css';
import BaseLayout from './navigations/BaseLayout';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <BaseLayout />
      </Layout>
    </div>
  );
}

export default App;
