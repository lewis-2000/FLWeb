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
      colors?: Record<string, string | any>;
      typography?: Record<string, string | number | any>;
      spacing?: Record<string, string | number>;
      layout?: Record<string, string | number>;
      border?: Record<string, string | number>;
      shadows?: Record<string, string>;
      [key: string]: Record<string, any> | undefined; // Add this index signature
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
