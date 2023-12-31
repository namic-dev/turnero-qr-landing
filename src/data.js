import { getPermalink, getAsset } from "./utils/permalinks"

export const headerData = {
  links: [
    {
      text: "Info",
      href: getPermalink("/#info"),
    },
    {
      text: "Proceso",
      href: getPermalink("/#proceso"),
    },
    {
      text: "Preguntas frecuentes",
      href: getPermalink("/#preguntas_frecuentes"),
    },
  ],
  actions: [
    {
      type: "button",
      text: "Contactate",
      href: "https://namic.dev",
    },
  ],
}

export const footerData = {
  // links: [
  //   {
  //     title: "Product",
  //     links: [
  //       { text: "Features", href: "#" },
  //       { text: "Security", href: "#" },
  //       { text: "Team", href: "#" },
  //       { text: "Enterprise", href: "#" },
  //       { text: "Customer stories", href: "#" },
  //       { text: "Pricing", href: "#" },
  //       { text: "Resources", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Platform",
  //     links: [
  //       { text: "Developer API", href: "#" },
  //       { text: "Partners", href: "#" },
  //       { text: "Atom", href: "#" },
  //       { text: "Electron", href: "#" },
  //       { text: "AstroWind Desktop", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Support",
  //     links: [
  //       { text: "Docs", href: "#" },
  //       { text: "Community Forum", href: "#" },
  //       { text: "Professional Services", href: "#" },
  //       { text: "Skills", href: "#" },
  //       { text: "Status", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Company",
  //     links: [
  //       { text: "About", href: "#" },
  //       { text: "Blog", href: "#" },
  //       { text: "Careers", href: "#" },
  //       { text: "Press", href: "#" },
  //       { text: "Inclusion", href: "#" },
  //       { text: "Social Impact", href: "#" },
  //       { text: "Shop", href: "#" },
  //     ],
  //   },
  // ],
  // secondaryLinks: [
  //   { text: "Terms", href: getPermalink("/terms") },
  //   { text: "Privacy Policy", href: getPermalink("/privacy") },
  // ],
  // socialLinks: [
  //   { ariaLabel: "Twitter", icon: "tabler:brand-twitter", href: "#" },
  //   { ariaLabel: "Instagram", icon: "tabler:brand-instagram", href: "#" },
  //   { ariaLabel: "Facebook", icon: "tabler:brand-facebook", href: "#" },
  //   { ariaLabel: "RSS", icon: "tabler:rss", href: getAsset("/rss.xml") },
  //   {
  //     ariaLabel: "Github",
  //     icon: "tabler:brand-github",
  //     href: "https://github.com/onwidget/astrowind",
  //   },
  // ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-right rounded-sm"></span>
    Hecho en Mar del Plata, Argentina ·  <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://namic.dev/"> namic</a> 
  `,
}
