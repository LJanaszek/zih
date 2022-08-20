import { Link } from "react-router-dom"
import Box from "../../../../components/layout/box"

type Props = {
    onComplete(): void
}

export default function TaskOutro({onComplete}: Props) {
    return <Box>
        <h2>Spojrzenie na ulicę Handlową (Po wizycie na ulicy Krokodyli)</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores esse incidunt consectetur omnis ipsum et, voluptatem, veritatis totam cum distinctio, exercitationem illo vel commodi quidem iusto praesentium quod maxime est!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores esse incidunt consectetur omnis ipsum et, voluptatem, veritatis totam cum distinctio, exercitationem illo vel commodi quidem iusto praesentium quod maxime est!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores esse incidunt consectetur omnis ipsum et, voluptatem, veritatis totam cum distinctio, exercitationem illo vel commodi quidem iusto praesentium quod maxime est!</p>
        <button className="button" onClick={onComplete}>Kontynuuj grę<i className="icon next" /></button>
    </Box>
}
