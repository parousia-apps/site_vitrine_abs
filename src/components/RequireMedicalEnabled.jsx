import { Navigate, useLocation } from "react-router-dom";
import { MEDICAL_ENABLED } from "../config.js";

export default function RequireMedicalEnabled({ children }) {
    const loc = useLocation();
    if (!MEDICAL_ENABLED) {
        // Redirection front → /numerique
        return <Navigate to="/numerique" replace state={{ from: loc }} />;
    }
    return children;
}
