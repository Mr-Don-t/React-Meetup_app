import {Route} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';
// import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
     <Layout>
        {/* <MainNavigation/> */}
          <Route path='/' exact='true'>
                      <AllMeetupsPage/>
          </Route>
          
          <Route path='/newmeetup'>
            <NewMeetupPage/>
          </Route>

        <Route path='/Favorites'>
          <FavoritesPage/>
        </Route>
     
        </Layout>


    </div>
  );
}

export default App;
