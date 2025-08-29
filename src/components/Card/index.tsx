import "./style.css"

interface Card {
    id: string
    backgroundImage: string,
    heading: string,
    backgroundColor: string,
    paragraph: string,
    labels: string[]
}

export default function Card() {

    return(
        <div className="card">
                <div className="card-background" style={{backgroundColor: "#B6D5FF"}}>
                    <img src="./chrome.png" alt="" />
                </div>
                <div className="card-text">
                    <div className="card-heading">
                        <h3>Chromium</h3>
                    </div>
                    <div className="p">
                        <p>Projeto de navegador de código aberto que serve de base para o Google Chrome e outros navegadores modernos.</p>
                    </div>
                </div>
                <div className="card-label">
                    <div className="labels">
                        <div className="label">
                            <p>Java</p>
                        </div>
                        <div className="label">
                            <p>Web</p>
                        </div>
                        <div className="label">
                            <p>Java</p>
                        </div>
                    </div>
                    <div>
                        <button>Ver projeto</button>
                    </div>
                </div>
            </div>
    )
}