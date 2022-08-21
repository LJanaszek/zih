import Box from "../../../../components/layout/box"

type Props = {
    onComplete(): void
}

export default function TaskOutro({onComplete}: Props) {
    return <Box>
        <h2>ekran 3.3 - fabuła po zadaniu 3 </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ipsa ab aliquam ullam. Tempora excepturi facilis consequuntur cum quos consectetur quidem impedit nesciunt amet illo exercitationem voluptate, suscipit voluptatibus iste.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ipsa ab aliquam ullam. Tempora excepturi facilis consequuntur cum quos consectetur quidem impedit nesciunt amet illo exercitationem voluptate, suscipit voluptatibus iste.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ipsa ab aliquam ullam. Tempora excepturi facilis consequuntur cum quos consectetur quidem impedit nesciunt amet illo exercitationem voluptate, suscipit voluptatibus iste.</p>
        <button className="button" onClick={onComplete}>Dalej<i className="icon next" /></button>
    </Box>
}
