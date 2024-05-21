import Box from "../../../../components/layout/box"
import { useState } from "react"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [showButton, setShowButton] = useState(false)
    return <Box>
        <div>

            <p className="paragraph-find">
                W poniższym wierszu brakuje kluczowego słowa. Odgadnij je.
            </p>
            <div className="poemGrid">
                <div>
                    <p>
                        “Dwie ________”, Antoni Słonimski
                    </p>
                    <p>
                        W twojej _________ karki się zgina <br />
                        Przed każdą władzą,<br />
                        Dla zwyciężonych – wzgarda i ślina,<br />
                        Gdy ich na rzeź prowadzą.<br />
                        W twojej _________, gdyś hołdy składał –
                        Przed obce trony.
                        <br />
                        W _________ mojej, jeśli kto padał, <br />
                        To krwią zbroczony
                    </p>

                    <p>
                        W twojej _________ do obcych w wierze<br />
                        Bóg się nie zniża.<br />
                        Moja ________ świat cały bierze<br />
                        W ramiona krzyża.
                    </p>
                </div>
                <div>
                    <p>
                        W twojej _________ sławnych portrety – <br />
                        Tom w etażerce.<br />
                        W mojej _________ słowa poety<br />
                        Oprawne w serce.
                    </p>
                    <p>
                        Chociaż ci sprzyja ten wieczór mglisty<br />
                        I noc bezgwiezdna,<br />
                        Jakże mnie wygnasz z ziemi ojczystej,<br />
                        Jeśli jej nie znasz?
                    </p>
                    <div className="input-field">
                        <label>
                            HASŁO:
                        <input type="text" id="fname" onChange={() => {
                            let x = document.getElementById("fname")!.value;
                            x = x.toUpperCase();
                            if (x === "OJCZYZNA") {
                                setShowButton(true)
                            }
                            else {
                                setShowButton(false)
                            }
                        }}/>
                        </label>
                    </div>
                </div>
              
            </div>
            {/* <figure>
                <blockquote>
                    <p>Cały trick polega na tym, że cofnęliśmy czas. Spóźniamy się tu z czasem o pewien interwał, którego wielkości niepodobna określić.</p>
                </blockquote>
                <figcaption>Sanatorium pod klepsydrą, Bruno Schulz</figcaption>
            </figure> */}

        </div>
        {showButton &&
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>}
    </Box>
}
