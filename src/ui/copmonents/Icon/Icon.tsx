import React from "react";
import styles from './Icon.module.scss';

import { Icon as IconifyIcon } from "@iconify/react";
import { IconMap } from "./Icon.map";
import type { IconPath, IconSize } from "./icon.types";
import type { CSSVars, TextColors } from "../types";
import clsx from "clsx";

const getIconByPath = (path: IconPath): string | undefined => {
    if (typeof path !== "string") {
        console.warn("Invalid icon path (not a string):", path);
        return undefined;
    }
    return path
      .split(".")
      .reduce<unknown>((acc, key) => {
        if (acc && typeof acc === "object") {
          return (acc as Record<string, unknown>)[key];
        }
        return undefined;
      }, IconMap) as string | undefined;
};

export interface IconProps {
  name: IconPath;
  size?: IconSize;
  color?: TextColors;
  style?: React.CSSProperties;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = "inherit",
  color = 'primary',
  style,
  className,
}) => {
  const resolvedIcon = getIconByPath(name);

  const classes = clsx(styles.iconWrapper, className);

  const inlineStyle: CSSVars = {
    ...style,
    '--color-icon': `var(--text-${color})`,
    '--fs-icon': size === 'inherit' ? 'inherit' : `var(--fs-${size})`,
  }

  return resolvedIcon ? (
    <IconifyIcon
      icon={resolvedIcon}
      style={inlineStyle}
      className={classes}
    />
  ) : <></>;
};

export default Icon;