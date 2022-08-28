import styled from "styled-components";
import Box from "../../../../components/layout/box";
import ScrollToMe from "../../../../utils/widgets/scroll-to-me";
import end from "./end.jpg";
import PageFooter from '../../../../components/layout/footer';
import TextPage from "../../../../components/layout/text-page";
import ScrollToTop from "../../../../utils/widgets/scroll-to-top";
;

type Props = {
    onNext(): void
}

export default function PageEnd({ onNext }: Props) {
    return <>
        <TextPage>
            <ScrollToTop />
            <h2>Zakończenie</h2>
            <img className="photo" src={end} alt="" style={{ width: '100%' }} />
            <Box>
                <div className="content">
                    <h3 className="header-content">Zakończenie</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A aspernatur voluptatibus, voluptate nobis vel dolores, praesentium dolore ad facilis enim maiores ipsa. Excepturi, vitae quod? Similique corrupti ratione consequatur magnam.</p></div>
            </Box>
            <nav className="button-list actions">
                <button onClick={onNext} className="button">Koniec<i className="icon next" /></button>
            </nav>
        </TextPage>
        <PageFooter />
    </>

}
