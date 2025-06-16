import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";

function App() {
  const router = createBrowserRouter([
    { path: "/", Component: LoginPage },
    { path: "/register", element: <RegisterPage /> },
    // { path: "/profile", element: <ProfilePage /> },
    // { path: "/forgot-password", element: <ForgotPassword /> },
    // { path: "/reset-password", element: <ResetPassword /> },
    // {
    //   path: "/dashboard",
    //   element: <Protectedlayout />,
    //   children: [
    //     {
    //       index: true,
    //       element: (
    //         <ErrorBoundary fallback={<div>Something went wrong</div>}>
    //           <React.Suspense fallback="loading....">
    //             <HomePage />
    //           </React.Suspense>
    //         </ErrorBoundary>
    //       ),
    //     },
    //     { path: ":id", element: <SinglePage /> },
    //     { path: "*", element: <DashboardNotFound /> },
    //   ],
    // },
    // { path: "/*", element: <NotFoundPage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
