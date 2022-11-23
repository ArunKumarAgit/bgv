import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";

export const SidebarData = [
  {
    title: "Home",
    path: "/Home",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Recruitment",
    // path: '/Recruitment',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Requirement",
        path: "requirement",
        // path: '/Recruitment/Requirement',
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "BGC",
        path: "/bgc",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "OnBoarding",
        path: "onboarding",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "admin",
    // path: "/admin",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "User",
        path: "/user",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Role",
        path: "/role",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Permission",
        path: "/permission",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Content",
        path: "/content",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Menu",
        path: "/menu",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Hr",
    path: "/hr",
    icon: <VscAccount />,
  },
  {
    title: "About Us",
    path: "/about",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
