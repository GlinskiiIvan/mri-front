import type { IconMap } from "./Icon.map";

type Join<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never;

type Paths<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends string
        ? K & string
        : Join<K & string, Paths<T[K]>>;
    }[keyof T]
  : never;

export type IconSize = '16' | '20' | '24' | '40' | 'full' | 'inherit';
// export type IconColor = 'danger' | 'warning' | 'success' | 'accent' | 'primary' | 'secondary' | 'tertiary' | 'disabled' | 'inverse';
export type IconPath = Paths<typeof IconMap>;