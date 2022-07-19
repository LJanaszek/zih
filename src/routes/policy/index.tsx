import { Link, useNavigate } from "react-router-dom";
import Box from "../../components/layout/box";
import { getRulesPageRoute } from "../routes";

export default function PolicyPage() {

    const navigate = useNavigate();

    return <>
        <Box>
            <h2>Polityka Prywatności</h2>

            <p>
                TBA
            </p>

            <nav className="button-list" aria-label="Porwót">
                <Link className="button" to={getRulesPageRoute()} onClick={() => navigate(-1)}>Powrót</Link>
            </nav>

        </Box>
    </>
}
