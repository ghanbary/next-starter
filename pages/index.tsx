import { NextPage } from "next";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="flex flex-col items-center gap-5 mt-32">
      <h1 className="text-2xl text-center font-medium">
        Advanced Starter Next.js Application
      </h1>
      <div className="grid grid-cols-2 gap-5">
        <button
          onClick={toggleTheme}
          className="active:scale-90 duration-200 py-2 px-6 rounded-md text-center shadow-md shadow-secondary/30 bg-secondary text-white"
        >
          Toggle Theme
        </button>
        <a
          href="https://github.com/soheilghanbary/next-starter"
          className="active:scale-90 duration-200 py-2 px-6 rounded-md shadow-md text-center shadow-primary/30 bg-primary text-white"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Home;
