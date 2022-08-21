import Box from "../../../../components/layout/box"

type Props = {
    onComplete(): void
}

export default function TaskOutro({onComplete}: Props) {
    return <Box>
        <h2>ekran 2.3 - fabuła po zadaniu 2 </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas harum minus pariatur quis eaque enim, ullam soluta, cum fuga eveniet tempora maiores hic provident iusto sunt impedit. Ullam, accusantium recusandae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas harum minus pariatur quis eaque enim, ullam soluta, cum fuga eveniet tempora maiores hic provident iusto sunt impedit. Ullam, accusantium recusandae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas harum minus pariatur quis eaque enim, ullam soluta, cum fuga eveniet tempora maiores hic provident iusto sunt impedit. Ullam, accusantium recusandae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas harum minus pariatur quis eaque enim, ullam soluta, cum fuga eveniet tempora maiores hic provident iusto sunt impedit. Ullam, accusantium recusandae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas harum minus pariatur quis eaque enim, ullam soluta, cum fuga eveniet tempora maiores hic provident iusto sunt impedit. Ullam, accusantium recusandae.</p>
        <button className="button" onClick={onComplete}>Dalej<i className="icon next" /></button>
    </Box>
}
