import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLLMInference,
  selectInferenceResult,
  BotOpen,
  isbotOpen,
} from "../redux/features/llmslice";

import { motion } from "framer-motion";
import { Divider, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { AiFillRobot } from "react-icons/ai";
import { RiRobot2Fill } from "react-icons/ri";
import axios from "axios";
import { toast } from "react-toastify";

const StaggeredDropDown = () => {
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);
  const [pdfFile, setPdfFile] = useState(null);
  const dispatch = useDispatch();
  const inferenceResult = useSelector(selectInferenceResult);
  const isBotOpen = useSelector(isbotOpen);

  const toggleBot = () => {
    dispatch(BotOpen.actions.togglebot());
  };

  const setOpen = () => {
    dispatch(BotOpen.actions.setBot({ payload: true }));
  };

  const setClose = () => {
    dispatch(BotOpen.actions.setBot({ payload: false }));
  };

  const sendMessage = () => {
    if (!msg) {
      toast.error("Message cannot be empty");
      return;
    }
    setMsgList([...msgList, { msg, type: "user" }]);
    setMsg("");
    console.log("me",msg);
    dispatch(fetchLLMInference(msg));
  };



  useEffect(() => {
    if (inferenceResult) {
      setMsgList([...msgList, { msg: inferenceResult, type: "bot" }]);
    }
  }, [useSelector(selectInferenceResult)]);

  return (
    <div className="flex items-center justify-center">
      <motion.div animate={isBotOpen ? "open" : "closed"} className="relative">
        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "bottom", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute bottom-[120%] left-[50%] w-[20rem] overflow-hidden"
        >
          <div className="w-full h-full flex flex-col gap-2">
           
            <Option
              setOpen={setOpen}
              Icon={
                <AiFillRobot
                  style={{
                    fontSize: 25,
                    color: "black",
                  }}
                />
              }
              text="Chat Bot"
            />
            <Divider />
            <div className="h-[300px]">
              <div className="flex flex-col gap-2 h-full overflow-y-auto">
                {msgList.map((msg, idx) => (
                  // <div key={idx} className={`flex bg-slate-100 items-center gap-2 max-w-[70%] break-words flex-wrap h-auto border-2 p-2 font-bold whitespace-nowrap rounded-md text-slate-700 ${msg.type === 'user' ? 'self-end' : 'self-start'}`}>
                  //     <span>{msg.msg}</span>
                  // </div>
                  <div
                    key={idx}
                    className={`${
                      msg.type === "user" ? "self-end" : "self-start"
                    } w-[70%]`}
                  >
                    <div className="w-full text center border rounded-xl flex flex-col items-start justify-center p-2.5 break-words">
                      <div
                        className={`${
                          msg.type === "user"
                            ? "text-blue-700"
                            : "text-slate-700"
                        } font-bold text-xs`}
                      >
                        {msg.type === "user" ? "You" : "Chatbot"}
                      </div>
                      <div className="w-full">{msg.msg}</div>
                      <div className="text-xs self-end font-light">
                        {/* {val.time}   */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Divider />
            <motion.li
              variants={itemVariants}
              // onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-2 w-full p-2 font-bold whitespace-nowrap rounded-md text-slate-700 "
            >
              <TextField
                variant="outlined"
                label="Type a message"
                fullWidth
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
              <motion.span variants={actionIconVariants}>
                <IconButton
                  onClick={() => {
                    sendMessage();
                  }}
                >
                  <SendIcon
                    style={{
                      fontSize: 25,
                      color: "black",
                    }}
                  />
                </IconButton>
              </motion.span>
            </motion.li>
          </div>
        </motion.ul>
        <button
          onClick={toggleBot}
          className="flex items-center gap-2 w-16 h-16 justify-center p-4 rounded-full text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
        >
          <motion.span variants={iconVariants}>
            {/* <SmartToyIcon /> */}
            <RiRobot2Fill
              style={{
                fontSize: 30,
                color: "white",
              }}
            />
          </motion.span>
        </button>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      // onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 font-bold whitespace-nowrap rounded-md text-slate-700 "
    >
      <motion.span variants={actionIconVariants}>{Icon}</motion.span>
      <span className="text-xl">{text}</span>
    </motion.li>
  );
};

const Option2 = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center justify-between gap-2 w-full p-2 font-bold whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <span className="text-xl">{text}</span>
      <motion.span variants={actionIconVariants}>{Icon}</motion.span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
