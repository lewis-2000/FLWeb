/* eslint-disable @typescript-eslint/no-explicit-any */

interface ComponentData {
  component: string;
  data: Record<string, any>;
}

interface PageData {
  id: string;
  name: string;
  components: ComponentData[];
}

/**
 * Generates a JSON file and triggers a download in the browser.
 * @param data - The data to convert to JSON format.
 * @param fileName - The name of the downloaded file.
 */
export const generateJsonFile = (data: PageData[], fileName: string) => {
  const jsonContent = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonContent], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();

  URL.revokeObjectURL(url);
};
