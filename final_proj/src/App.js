import React from 'react';
import { MainPage } from './pages/main-page';
import { LoginPage } from './pages/login-page';
import { CategoryPage } from './pages/category-page';
import { LeftMenu } from './components/left-menu';
import { LeftSide, RightSide } from './pages/main-page/index.style';
import { CreateAccount } from './pages/create-account-page';
import { Router } from './routes';
import { Provider} from 'react-redux'
import { store } from './redux';


const App = () => {

  
  return (
    // <Provider store = {store}>
        <Router/>
    // </Provider>
  );
}

export default App;
