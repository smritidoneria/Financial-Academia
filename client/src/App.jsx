import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
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
import { useSelector } from "react-redux";
import DematDashboard from "./pages/DematDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StaggeredDropDown from "./components/ChatBot";
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
import { Dashboard } from "@mui/icons-material";
import Zerodha from "./pages/Zerodha";
import Upstox from "./pages/Upstox";
import AngelOne from "./pages/AngelOne";
import Groww from "./pages/Groww";
import { useLocation } from "react-router-dom";
import StockAnalysis from "./pages/StockAnalysis";
import Discussion from "./pages/Discussion";
import News from "./pages/News";
import './App.css';



function App() {
  const token = localStorage.getItem("token");


  const isNavBarOpen = useSelector((state) => state.ui.isNavBarOpen);
  

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
          />,
          {/* element: <Layout /> */}
          {token && <NavBar />}
          {!isNavBarOpen && (
            <>
              <Outlet />
              {token && (
                <div className="fixed bottom-12 right-36">
                  <StaggeredDropDown />
                </div>
              )}
              {token && <Footer />}
            </>
          )}
        </>
      ),
      
      // path: "/",
      // element: <Layout />, 
      children: [
        
        {
          path: "/",
          element: <Redirect />,
        },
        {
          path:"/dashboard/news",
          element: <News/>
        },
        {
          path:"/dashboard/analysis",
          element: <StockAnalysis/>
        },
        {
          path:"/dashboard/discussion",
          element: <Discussion/>
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
          element: <Zerodha/>,
        },
        {
          path: "upstox",
          element: <Upstox />,
        },
        {
          path:"angelOne",
          element: <AngelOne/>
        },
        {
          path: "/groww",
          element: <Groww />,
        },
        {
          path: "/dematchoice",
          element: <Demat/>
        },
        {
          path:'/dashboard',
          element: <DematDashboard/>
        },
        {
          path: "/learning",
          element: <Learning />,
        },
        {
          path: "/broker",
          element: <Broker/>
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
          element: <StockGame/>,
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
