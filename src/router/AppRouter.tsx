import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Projects from "../components/Projects"
import ProjectPage from "../pages/ProjectPage"

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<ProjectPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter