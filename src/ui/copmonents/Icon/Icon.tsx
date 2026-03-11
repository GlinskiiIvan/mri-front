import React from "react";
import { Icon as IconifyIcon } from "@iconify/react";
import { IconMap } from "./Icon.map";
import type { IconColor, IconPath, IconSize } from "./icon.types";

const getIconByPath = (path: IconPath): string | undefined => {
    if (typeof path !== "string") {
        console.warn("Invalid icon path (not a string):", path);
        return undefined;
    }
    return path.split('.').reduce((acc: any, key) => acc?.[key], IconMap);
};

export type IIconProps = {
  name: IconPath;
  size?: IconSize;
  color?: IconColor;
  className?: string;
};

export const Icon: React.FC<IIconProps> = ({
  name,
  size = "16",
  color = "tertiary",
  className = "",
}) => {
  const resolvedIcon = getIconByPath(name);

  const style =
    size === "full"
      ? { width: "100%", height: "100%", color: `var(--text-${color})` }
      : { fontSize: `${size}px`, color: `var(--text-${color})` };

  return resolvedIcon ? (
    <IconifyIcon
      icon={resolvedIcon}
      style={style}
      className={className}
    />
  ) : <></>;
};

export default Icon;