import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/main/Dashboard';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Reports from './pages/main/Reports';
import Customers from './pages/main/Customers';
import Ecommerce from './pages/main/Ecommerce';
import Products from './pages/main/Products';
import { ReportProvider } from './context/ReportContext';
import { ToastContainer } from 'react-toastify';
import { LocationProvider } from './context/BusinessLocationContext';
import { SellsProvider } from './context/SellsContext';

// PAGES
import Login from './pages/main/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/reports/:reportsParams',
        element: <Reports />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/customers',
        element: <Customers />,
      },
      {
        path: '/ecommerce',
        element: <Ecommerce />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return (
    <SellsProvider>
      <LocationProvider>
        <ReportProvider>
          <ToastContainer />
          <RouterProvider router={router} />
        </ReportProvider>
      </LocationProvider>
    </SellsProvider>
  );
}

export default App;
