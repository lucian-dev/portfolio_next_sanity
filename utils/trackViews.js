export const pageview = (url) => {
  window.gtag('config', process.env.NEXT_PUBLIC_ANALYTICS_ID, {
    page_path: url,
  });
};

export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};
