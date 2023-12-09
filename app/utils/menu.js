import { FaHome } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";

const menu = [
  {
    id: 1,
    title: "All Tasks",
    icon: <FaHome />,
    link: "/",
  },
  {
    id: 2,
    title: "Important",
    icon: <FaTasks />,
    link: "/important",
  },
  {
    id: 3,
    title: "Completed",
    icon: <MdOutlineTaskAlt />,
    link: "/completed",
  },
  {
    id: 4,
    title: "Do It Now",
    icon: <RiTodoLine />,
    link: "/incomplete",
  },
];

export default menu;
