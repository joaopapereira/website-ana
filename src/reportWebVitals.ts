const reportWebVitals = (onPerfEntry?: (metric: unknown) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import('web-vitals').then((wv: any) => {
      wv.onCLS(onPerfEntry);
      wv.onINP(onPerfEntry);
      wv.onFCP(onPerfEntry);
      wv.onLCP(onPerfEntry);
      wv.onTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
