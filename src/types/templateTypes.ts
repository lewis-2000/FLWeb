/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType } from "react";

export interface templateTypes {
  id: string;
  name: string;
  author?: string;
  authorUrl?: string;
  preview?: string; // Image URL
  components: {
    component: ComponentType<any>;
    data: Record<string, any>;
    settings?: {
      colors?: Record<string, string>;
      typography?: Record<string, string | number>;
      spacing?: Record<string, string | number>;
      layout?: Record<string, string | number>;
      border?: Record<string, string | number>;
      shadows?: Record<string, string>;
    };
  }[];
  metadata?: {
    description?: string;
    version?: string;
    createdAt?: string;
    updatedAt?: string;
  };
  theme?: {
    name?: string;
    variant?: string;
  };
  globalSettings?: Record<string, any>;
  customData?: Record<string, any>;
}
