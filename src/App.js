
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home';
import Result from './Pages/ResultPage/Result';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Home></Home>
    },
    {
      path : 'result',
      element : <Result></Result>
    },
    {
      path : '*',
      element : <h1>Opps! 404 . Path not found</h1>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
