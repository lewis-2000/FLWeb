/* eslint-disable @typescript-eslint/no-explicit-any */

import { ComponentType } from "react";

export interface templateTypes {
  id: string;
  name: string;
  components: {
    component: ComponentType<any>;
    data: Record<string, any>;
    settings?: {
      styles?: Record<string, string | number>;
      [key: string]: any; // Extendable for other settings
    };
  }[];
}
