export type blogProps = {
  title: string;
  image: string;
  date: string;
  url: string;
  available: boolean;
};
import thumb from "../../public/blogImg.png"

export const blogDetails = [
  {
    title: "React.js Fundamentals: Building Blocks of Modern Web Development",
    image:
      thumb,
    date: "APR 2024",
    url: "https://medium.com/@amleshwar.pa/react-js-fundamentals-building-blocks-of-modern-web-development-1a1fec2a663f",
    available: true,
  },
];
