const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path = '/') => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
};

export const resolveHref = (href: string) =>
  /^(?:https?:|mailto:|tel:|#)/.test(href) ? href : withBase(href);
