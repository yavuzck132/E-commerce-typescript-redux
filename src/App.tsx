import { Provider } from 'react-redux';
import { store } from './store';
import ListPage from './pages/listPage/ListPage';

function App() {
  return (
    <Provider store={store}>
      <ListPage />
    </Provider>
  );
}

export default App;
