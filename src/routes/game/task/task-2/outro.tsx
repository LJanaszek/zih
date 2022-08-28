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
            <h2>ekran 2.3 - fabuła po zadaniu 2 </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas harum minus pariatur quis eaque enim, ullam soluta, cum fuga eveniet tempora maiores hic provident iusto sunt impedit. Ullam, accusantium recusandae.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas harum minus pariatur quis eaque enim, ullam soluta, cum fuga eveniet tempora maiores hic provident iusto sunt impedit. Ullam, accusantium recusandae.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas harum minus pariatur quis eaque enim, ullam soluta, cum fuga eveniet tempora maiores hic provident iusto sunt impedit. Ullam, accusantium recusandae.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas harum minus pariatur quis eaque enim, ullam soluta, cum fuga eveniet tempora maiores hic provident iusto sunt impedit. Ullam, accusantium recusandae.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas harum minus pariatur quis eaque enim, ullam soluta, cum fuga eveniet tempora maiores hic provident iusto sunt impedit. Ullam, accusantium recusandae.</p>
        </Box>
        <div className="button-list">
            <button className="button" onClick={onComplete}>Kontynuuj grę<i className="icon next" /></button>
        </div>
    </TextPage>
}
