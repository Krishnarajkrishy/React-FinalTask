import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar"
import ThemeProvider from "./Context/ThemeContext"
import Home from "./Components/Home";
import Movie from "./Components/Movie";


const App = () => {
  return (
    <ThemeProvider>
        <BrowserRouter>
          <div className=" bg-slate-100 dark:bg-slate-800 dark:text-white">
            <div className="container mx-auto ">
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movie />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App