import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MapaPage from "../pages/MapaPage/MapaPage";
import UsuarioPage from "../pages/UsuarioPage/UsuarioPage";
import ReportesPage from "../pages/ReportesPage/ReportesPage";
import PremiosPage from "../pages/PremiosPage/PremiosPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/home/",
        element: <App />,
        children: [
            {path: "", element: <MapaPage />},
            {path: "usuario", element: <UsuarioPage />},
            {path: "reportes", element: <ReportesPage />},
            {path: "premios", element: <PremiosPage />},
        ]
    }
])