function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  // На Vercel адрес продакшена приходит в переменной окружения автоматически
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Daniil Rai",
  role: "Frontend Developer",
  title: "Daniil Rai — Frontend Developer",
  description:
    "Frontend developer building fast, responsive web apps and websites with React, TypeScript and Tailwind CSS. Open to freelance projects and full-time roles.",
  url: resolveSiteUrl(),
  email: "rai.daniil.work@gmail.com",
  telegram: "DaniilRai",
  github: "DaniilRai13",
};
