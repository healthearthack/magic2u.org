import { useEffect } from 'react';

export function useRenderMetrics(componentName: string) {
  useEffect(() => {
    const start = performance.now();

    return () => {
      const end = performance.now();
      console.log(
        `[RenderMetric] ${componentName}: ${end - start}ms`
      );
    };
  }, [componentName]);
}

