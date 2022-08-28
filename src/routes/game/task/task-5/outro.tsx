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
            <h2>ekran 5.3 - fabuła po zadaniu 5  </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia accusamus, laboriosam exercitationem fugit est. Ipsa ad expedita, quis culpa debitis officiis, sed hic alias, atque possimus excepturi voluptatum? Possimus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia accusamus, laboriosam exercitationem fugit est. Ipsa ad expedita, quis culpa debitis officiis, sed hic alias, atque possimus excepturi voluptatum? Possimus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia accusamus, laboriosam exercitationem fugit est. Ipsa ad expedita, quis culpa debitis officiis, sed hic alias, atque possimus excepturi voluptatum? Possimus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia accusamus, laboriosam exercitationem fugit est. Ipsa ad expedita, quis culpa debitis officiis, sed hic alias, atque possimus excepturi voluptatum? Possimus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia accusamus, laboriosam exercitationem fugit est. Ipsa ad expedita, quis culpa debitis officiis, sed hic alias, atque possimus excepturi voluptatum? Possimus.</p>
            <button className="button" onClick={onComplete}>Dalej<i className="icon next" /></button>
        </Box>
        <div className="button-list">
            <button className="button" onClick={onComplete}>Kontynuuj grę<i className="icon next" /></button>
        </div>
    </TextPage>
}
