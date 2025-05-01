import React from "react";
import { Platform } from "../Hooks/usegames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

export interface Props {
  platforms: Platform[];
  darkMode: boolean;
}

export const PlatformIconList = ({ platforms, darkMode }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <div className="d-flex flex-wrap gap-2">
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug] as React.ElementType;

        return (
          IconComponent && (
            <span
              key={platform.id}
              className={darkMode ? "text-white" : "text-muted"}>
              {React.createElement(IconComponent, {
                className: "me-2",
                title: platform.name,
              })}
            </span>
          )
        );
      })}
    </div>
  );
};

export default PlatformIconList;
