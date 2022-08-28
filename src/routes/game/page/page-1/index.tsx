import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"

type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <Box>
            <h2>ekran 0 - wprowadzenie do fabuły gry</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nisi laborum molestias enim, quisquam excepturi et recusandae eligendi quidem deleniti quasi commodi voluptate ducimus optio modi itaque nam. Asperiores, rem.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nisi laborum molestias enim, quisquam excepturi et recusandae eligendi quidem deleniti quasi commodi voluptate ducimus optio modi itaque nam. Asperiores, rem.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nisi laborum molestias enim, quisquam excepturi et recusandae eligendi quidem deleniti quasi commodi voluptate ducimus optio modi itaque nam. Asperiores, rem.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nisi laborum molestias enim, quisquam excepturi et recusandae eligendi quidem deleniti quasi commodi voluptate ducimus optio modi itaque nam. Asperiores, rem.</p>
        </Box>
        <div className="button-list">
            <button className="button" onClick={onNext}>Przejdź do mapy<i className="icon map" /></button>
        </div>
    </TextPage>
}
