import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./routes/Home.jsx";
import Medical from "./routes/Medical.jsx";
import Numerique from "./routes/Numerique.jsx";
import Contact from "./routes/Contact.jsx";
import Mentions from "./routes/Mentions.jsx";
import ProductDetail from "./routes/ProductDetail.jsx";
import RequireMedicalEnabled from "./components/RequireMedicalEnabled.jsx";
import APropos from "./routes/APropos.jsx";
import ScrollManager from "./components/ScrollManager.jsx";

export default function App() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <ScrollManager />
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/medical"
                                element={
                                    <RequireMedicalEnabled>
                                        <Medical />
                                    </RequireMedicalEnabled>
                                }
                            />
                            <Route
                                path="/medical/produits/:slug"
                                element={
                                    <RequireMedicalEnabled>
                                        <ProductDetail />
                                    </RequireMedicalEnabled>
                                }
                            />
                            <Route path="/numerique" element={<Numerique />} />
                            <Route path="/a-propos" element={<APropos />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/mentions-legales" element={<Mentions />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </HelmetProvider>
    );
}
