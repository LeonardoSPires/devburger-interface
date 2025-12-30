import { Navigate, Outlet } from "react-router-dom";
import { Container } from "./styles";
import { SideNavAdmin } from "../../components/SideNavAdmin";

export function AdminLayout() {
    const { admin: isAdmin } = JSON.parse(localStorage.getItem("devburger:userData")
    );

    return isAdmin ? (
    <Container>
        <SideNavAdmin />
        <main>
            <section>
                <Outlet />
            </section>
        </main>
    </Container>
    ) : (
        <Navigate to="/login" />
    );
}