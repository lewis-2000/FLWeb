/* eslint-disable @typescript-eslint/no-explicit-any */

import { ComponentType } from "react";

export interface templateTypes {
  id: string;
  name: string;
  components: {
    component: ComponentType<any>;
    data: Record<string, any>;
  }[];
}
