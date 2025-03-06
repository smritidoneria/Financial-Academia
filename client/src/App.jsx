import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BlogHome from "./pages/BlogHome";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import Party from "./pages/Party";
import TaskPages from "./pages/TaskPages";
import Monetary from "./pages/Monetary";
import FriendsPage from "./pages/FriendsPage";
import Demat from "./pages/Demat";
import Redirect from "./Redirect";
import DematDashboard from "./pages/DematDashboard";
import { ToastContainer } from "react-toastify";
import Resources from "./pages/Resources"
import "react-toastify/dist/ReactToastify.css";
import {
  Budgeting,
  BudgetingQAndA,
  Investing,
  InvestingQAndA,
  Financing,
  FinancingQAndA,
} from "./pages/Learning";
import "./App.css";
import Stock from "./pages/Stock";
import Broker from "./pages/Broker";
import Savings from "./pages/Savings";
import Learning from "./pages/Learning";
import LeaderBoard from "./pages/FriendsPage";
import StockGame from "./pages/stockgame";
import Zerodha from "./pages/Zerodha";
import Upstox from "./pages/Upstox";
import AngelOne from "./pages/AngelOne";
import Groww from "./pages/Groww";
import StockAnalysis from "./pages/StockAnalysis";
import Discussion from "./pages/Discussion";
import News from "./pages/News";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ToastContainer
            position="top-center"
            autoClose={1500}
            limit={2}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="dark"
          />
          <Layout />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Redirect />,
        },
        {
          path: "/dashboard/news",
          element: <News />,
        },
        {
          path: "/dashboard/analysis",
          element: <StockAnalysis />,
        },
        {
          path: "/dashboard/discussion",
          element: <Discussion />,
        },
        {
          path: "/resources",
          element: <Resources/>
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/zerodha",
          element: <Zerodha />,
        },
        {
          path: "upstox",
          element: <Upstox />,
        },
        {
          path: "angelOne",
          element: <AngelOne />,
        },
        {
          path: "/groww",
          element: <Groww />,
        },
        {
          path: "/dematchoice",
          element: <Demat />,
        },
        {
          path: "/dashboard",
          element: <DematDashboard />,
        },
        {
          path: "/learning",
          element: <Learning />,
        },
        {
          path: "/broker",
          element: <Broker />,
        },
        {
          path: "/blog",
          element: <BlogHome />,
        },
        {
          path: "/blog/:id",
          element: <Blog />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/party",
          element: <Party />,
        },
        {
          path: "/stock",
          element: <StockGame />,
        },
        {
          path: "/savings",
          element: <Savings />,
        },
        {
          path: "/tasks",
          element: <TaskPages />,
        },
        {
          path: "/leaderboard",
          element: <LeaderBoard />,
        },
        {
          path: "/monetary",
          element: <Monetary />,
        },
        {
          path: "/budgeting",
          element: <Budgeting />,
        },
        {
          path: "/budgeting/qanda",
          element: <BudgetingQAndA />,
        },
        {
          path: "/investing",
          element: <Investing />,
        },
        {
          path: "/investing/qanda",
          element: <InvestingQAndA />,
        },
        {
          path: "/financing",
          element: <Financing />,
        },
        {
          path: "financing/qanda",
          element: <FinancingQAndA />,
        },
      ],
    },
  ]);

  return (
    <AnimatePresence>
      <div className="h-full w-full bg-[#E6E6FA]">
        <RouterProvider router={router} />
      </div>
    </AnimatePresence>
  );
}

export default App;