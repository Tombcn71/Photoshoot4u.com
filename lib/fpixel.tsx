export const FB_PIXEL_ID = "625546493283016";

declare global {
  interface Window {
    fbq: Function;
    _fbq: any;
  }
}

export const pageview = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

// Initialize Facebook Pixel
export const init = () => {
  if (typeof window !== "undefined") {
    // Initialize fbq if it doesn't exist
    if (!window.fbq) {
      window.fbq = function () {
        // @ts-ignore
        window.fbq.callMethod
          ? window.fbq.callMethod.apply(window.fbq, arguments)
          : window.fbq.queue.push(arguments);
      };
    }

    if (!window._fbq) {
      window._fbq = window.fbq;
    }

    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = "2.0";
    window.fbq.queue = [];

    // Load the pixel script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";

    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    window.fbq("init", FB_PIXEL_ID);

    // Track initial pageview
    pageview();
  }
};
