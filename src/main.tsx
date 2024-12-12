import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import ExamsCalendar from "./features/calendar/components/ExamsCalendar.tsx";
import LoginPage from "./pages/LoginPage.tsx";

import AuthProvider from "./contexts/AuthContext.tsx";
import UserProvider from "./contexts/UserContext.tsx";
import { Toaster } from "react-hot-toast";
import SchedulingsProvider from "./contexts/SchedulingsContext.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          children: [
            {
              index: true,
              element: <ExamsCalendar />,
            },
            {
              path: "/tests",
              element: <div>tests</div>,
            },
          ],
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/forgotPassword",
          element: <div>Forgot password</div>,
        },
        {
          path: "/resetPassword",
          element: <div>Reset password</div>,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <UserProvider>
        <SchedulingsProvider>
          <RouterProvider
            router={router}
            future={{
              v7_startTransition: true,
            }}
          />
          <Toaster
            position="top-center"
            gutter={8}
            toastOptions={{
              className: "border-2 border-primary bg-white",
              duration: 3000,
            }}
          />
        </SchedulingsProvider>
      </UserProvider>
    </AuthProvider>
  </StrictMode>,
);
