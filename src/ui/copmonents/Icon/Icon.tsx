import React from "react";
import { Icon as IconifyIcon } from "@iconify/react";
import { IconMap } from "./Icon.map";
import type { IconPath, IconSize } from "./icon.types";
import type { TextColors } from "../types";

const getIconByPath = (path: IconPath): string | undefined => {
    if (typeof path !== "string") {
        console.warn("Invalid icon path (not a string):", path);
        return undefined;
    }
    // return path.split('.').reduce((acc: any, key) => acc?.[key], IconMap);
    return path
    .split(".")
    .reduce<unknown>((acc, key) => {
      if (acc && typeof acc === "object") {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, IconMap) as string | undefined;
};

export type IconProps = {
  name: IconPath;
  size?: IconSize;
  color?: TextColors;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = "inherit",
  color,
  className = "",
}) => {
  const resolvedIcon = getIconByPath(name);

  // : {
  //   width?: string;
  //   height?: string;
  //   fontSize?: string;
  //   color?: string;
  // } 

  const style: React.CSSProperties =
    size === "full"
      ? { width: "100%", height: "100%"}
      : { fontSize: size === "inherit" ? "1em" : `${size}px`};

  if(color) {
    style.color = `var(--text-${color})`;
  }

  return resolvedIcon ? (
    <IconifyIcon
      icon={resolvedIcon}
      style={style}
      className={className}
    />
  ) : <></>;
};

export default Icon;