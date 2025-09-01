import "./style.css"

interface Card {
    backgroundImage: string,
    heading: string,
    backgroundColor: string,
    paragraph: string,
    labels: string[]
}

export default function Card({backgroundImage, heading, backgroundColor, paragraph, labels}: Card){

    return(
        <div className="card">
                <div className="card-background" style={{backgroundColor: backgroundColor}}>
                    <img src={backgroundImage} alt="" />
                </div>
                <div className="card-text">
                    <div className="card-heading">
                        <h3>{heading}</h3>
                    </div>
                    <div className="p">
                        <p>{paragraph}</p>
                    </div>
                </div>
                <div className="card-label">
                    <div className="labels">
                        <div className="label">
                            <p>{labels}</p>
                        </div>
                    </div>
                    <div>
                        <button>Ver projeto</button>
                    </div>
                </div>
            </div>
    )
}