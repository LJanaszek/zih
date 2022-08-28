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
            <h2>ekran 3.3 - fabuła po zadaniu 3 </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ipsa ab aliquam ullam. Tempora excepturi facilis consequuntur cum quos consectetur quidem impedit nesciunt amet illo exercitationem voluptate, suscipit voluptatibus iste.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ipsa ab aliquam ullam. Tempora excepturi facilis consequuntur cum quos consectetur quidem impedit nesciunt amet illo exercitationem voluptate, suscipit voluptatibus iste.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ipsa ab aliquam ullam. Tempora excepturi facilis consequuntur cum quos consectetur quidem impedit nesciunt amet illo exercitationem voluptate, suscipit voluptatibus iste.</p>
        </Box>
        <div className="button-list">
            <button className="button" onClick={onComplete}>Kontynuuj grę<i className="icon next" /></button>
        </div>
    </TextPage>
}
