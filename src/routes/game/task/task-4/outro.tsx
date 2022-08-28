import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import ScrollToTop from "../../../../utils/widgets/scroll-to-top"

type Props = {
    onComplete(): void
}

export default function TaskOutro({ onComplete }: Props) {
    return <TextPage>
        <ScrollToTop />
        <Box>
            <h2>ekran 4.3 - fabuła po zadaniu 4 </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia accusamus, laboriosam exercitationem fugit est. Ipsa ad expedita, quis culpa debitis officiis, sed hic alias, atque possimus excepturi voluptatum? Possimus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia accusamus, laboriosam exercitationem fugit est. Ipsa ad expedita, quis culpa debitis officiis, sed hic alias, atque possimus excepturi voluptatum? Possimus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia accusamus, laboriosam exercitationem fugit est. Ipsa ad expedita, quis culpa debitis officiis, sed hic alias, atque possimus excepturi voluptatum? Possimus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia accusamus, laboriosam exercitationem fugit est. Ipsa ad expedita, quis culpa debitis officiis, sed hic alias, atque possimus excepturi voluptatum? Possimus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia accusamus, laboriosam exercitationem fugit est. Ipsa ad expedita, quis culpa debitis officiis, sed hic alias, atque possimus excepturi voluptatum? Possimus.</p>
        </Box>
        <div className="button-list">
            <button className="button" onClick={onComplete}>Kontynuuj grę<i className="icon next" /></button>
        </div>
    </TextPage>
}
