import { useWindowSize } from "@vueuse/core";
export function useUtils() {
  function getGridSize(): number {
    const { height, width } = useWindowSize();
    console.log(height, width);
    return Math.max(
      20,
      Math.floor(height.value / 50),
      Math.floor(width.value / 50)
    );
  }

  return { getGridSize };
}
