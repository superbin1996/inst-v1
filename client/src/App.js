import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PostModal, Profile } from './components/index';
import { SharedLayout } from './pages/index';
// import { Error } from './pages/index'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<SharedLayout />}> */}
        <Route path='/' element={<SharedLayout />}>
          <Route path='p/:postId' element={<PostModal />}/>
          <Route path=':profileName' element={<Profile />} />
        </Route>
          {/* <Route path='p/:profileId' element={<PostModal />} /> */}
        {/* <Route path='*' element={<Error />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;