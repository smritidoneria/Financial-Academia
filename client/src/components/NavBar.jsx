import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import { Button, IconButton } from "@mui/material";
import logo from "../assets/logo-hck.svg";
import ExpIcon from "../assets/exp-icon.png";
import DailyModal from "./DailyModal";
import NotiModal from "./NotiModal";
import EmailIcon from "@mui/icons-material/Email";
import { Leaderboard, Logout, Person, Stream } from "@mui/icons-material";
import Api from "../api";
import { useLocation } from "react-router-dom";

const navigationUnder18 = [
  { name: "Home", href: "/home", current: false },
  { name: "Financial Habits", href: "/tasks", current: false },
  { name: "Smart Investing", href: "/stock", current: false },
  { name: "Learning", href: "/learning", current: false },
  { name: "Party", href: "/party", current: false },
  { name: "Blog", href: "/blog", current: false },
];

const navigationOver18 = [
  { name: "Home", href: "/home", current: false },
  { name: "Stock Analysis", href: "/dashboard/analysis", current: false },
  { name: "News", href: "/dashboard/news", current: false },
  { name: "Forums Discussion", href: "/dashboard/discussion", current: false },
  { name: "Resources", href: "/resources", current: false },
  { name: "Blog", href: "/blog", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const [path, setPath] = useState(window.location.pathname);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const userPfp = useSelector((state) => state.pfp.userPfp);
  const [pfp, setPfp] = useState(user?.pfp);
  const [mopen, setOpen] = useState(false);
  const [nopen, setNOpen] = useState(false);
  // const [age,setAge]=useState(19); 


  


    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      console.log("Stored user:", storedUser);
      setUser(storedUser);
    }, []);

    useEffect(() => {
      if (user) {
        console.log("User:", user);
        fetchUserData();
      }
    }, [user]);
    const fetchUserData = async () => {
      try {
        const email=user.email;
        console.log("Fetching user data...");
        const response = await Api.getUser({email});
        console.log("Raw response:", response);
        console.log("data",response.data);
    
    
        
    
        
       
        // setAge(response.data.user.age);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    
    
   // Runs when user changes
  
 




 

  // const isUnder18 = age< 18;
  // console.log("isUnder18",age);
  console.log("user",user);
  const navigation = user.age<18 ? navigationUnder18 : navigationOver18;
  console.log("navigation",navigation);

  const openNewPage = () => {
    window.open("http://localhost:9000/", "_blank");
  };

  const handleNOpen = () => setNOpen(true);
  const handleNClose = () => setNOpen(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const curr = JSON.parse(localStorage.getItem("user"));
    setPfp(curr?.pfp);
  }, [userPfp]);

  useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname]);
  console.log("location",location.pathname);
  

  return (
    <Disclosure as="nav" className="bg-[#33006F] sticky top-0 z-[999]">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-16">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-8 w-auto" src={logo} alt="Financial Academia" />
                  <span className="font-bold text-white tracking-wide ml-2 text-xl">
                    Financial Academia
                  </span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === path ? "bg-gray-900 underline font-bold" : "hover:underline",
                          "rounded-md px-3 py-2 text-sm text-white"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {mopen && <DailyModal open={mopen} handleClose={handleClose} />}
                {nopen && <NotiModal open={nopen} handleClose={handleNClose} userInfo={user} />}
                <div className="mr-4">
                  <IconButton onClick={handleClickOpen} style={{ backgroundColor: "#33006F", color: "white" }}>
                    <WhatshotOutlinedIcon />
                  </IconButton>
                </div>
                {navigation==navigationUnder18?<div className="mr-4">
                  <IconButton onClick={handleNOpen} style={{ backgroundColor: "#33006F", color: "white" }}>
                    <EmailIcon />
                  </IconButton>
                </div>:<></>}
                
                {navigation==navigationUnder18?<div className="flex items-center gap-2 mr-8 text-white">
                  <img src={ExpIcon} alt="Level" className="h-8 w-8" />
                  <span className="font-semibold tracking-wide">Level {user?.level}</span>
                </div>: <></>}
                
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={pfp || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                        alt="User Profile"
                      />
                    </Menu.Button>
                  </div>
                  <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a href="/profile" className={classNames(active ? "bg-gray bg-opacity-40" : "", "block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:font-bold")}>
                            <Person /> Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a onClick={openNewPage} className={classNames(active ? "bg-gray bg-opacity-40" : "", "block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:font-bold")}>
                            <Stream /> Stream
                          </a>
                        )}
                      </Menu.Item> */}
                      <Menu.Item>
                        {({ active }) => (
                          <a onClick={() => { localStorage.clear(); window.location.href = "/login"; }} className={classNames(active ? "bg-gray bg-opacity-40" : "", "block px-4 py-2 text-sm text-gray-700 cursor-pointer")}>
                            <Logout /> Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default NavBar;

