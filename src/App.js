import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './Pages/Home/Home/Home';
import { theme } from './theme/theme';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

function App() {
  return (
    <>
      {/* <ExploreComponents /> */}
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
