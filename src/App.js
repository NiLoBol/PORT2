import "./App.css";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "./utils/motion";
import Timeswict from "./component/Timeswict";
import Textmoves from "./component/textmoves";
import Home from "./component/Home";
function App() {
  return (
    <div className="">
      <Timeswict
        component1={
          <Textmoves
            textarray={["my name is", "Jay", "Wecome to", "My Portfolio"]}
          ></Textmoves>
        }
        component2={
          <Home></Home>
        }
        time={0} //8
      ></Timeswict>

      <div className="min-w-full min-h-screen text-center">Test</div>
    </div>
  );
}

export default App;
