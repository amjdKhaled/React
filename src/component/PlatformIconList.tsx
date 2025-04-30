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

interface Props {
  platforms: Platform[];
}

export const PlatformIconList = ({ platforms }: Props) => {
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
        const IconComponent = iconMap[platform.slug];
        return (
          IconComponent && (
            <span key={platform.id} className="text-muted">
              <IconComponent className="me-2" title={platform.name} />
            </span>
          )
        );
      })}
    </div>
  );
};
