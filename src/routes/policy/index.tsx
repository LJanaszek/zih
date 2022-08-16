import { Link, useNavigate } from "react-router-dom";
import Box from "../../components/layout/box";
import { getHomeRoute } from "../routes";

export default function PolicyPage() {

    const navigate = useNavigate();

    return <>
        <Box>
            <h2>Polityka Prywatności</h2>

            <p>
                TBA
            </p>

            <nav className="button-list" aria-label="Porwót">
                <Link className="button" to={getHomeRoute()} onClick={() => navigate(-1)}>Powrót</Link>
            </nav>

        </Box>
    </>
}
