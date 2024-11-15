import './App.css';
import { AppDataContextProvider } from './contexts/AppDataContext';
import NewPetPage from './pages/pets/new-pet';

function App() {
  // TODO: use a router
  const settings = {};//process?.env || {};
  return (
    <div>
      <div>
        app
      </div>
      <AppDataContextProvider initData={{ settings }}>
        <NewPetPage />
      </AppDataContextProvider>
    </div>
  )
}

export default App;
