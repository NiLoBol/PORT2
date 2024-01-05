import "./App.css";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "./utils/motion";
import Timeswict from "./component/Timeswict";
import Textmoves from "./component/textmoves";
import Home from "./component/Home";
import Hero from "./component/Hero";
import { useSelector } from "react-redux";
function App() {

  return (
    <div className="overflow-hidden">
      <Timeswict
        component1={
          <Textmoves
            textarray={["my name is", "Jay", "Wecome to", "My Portfolio"]}
          ></Textmoves>
        }
        component2={
          <div>
            <Hero></Hero>
            <Home></Home>
          </div>
        }
        time={8} //8
      ></Timeswict>
    </div>
  );
}

export default App;
