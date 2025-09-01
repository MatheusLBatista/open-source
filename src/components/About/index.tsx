import "./style.css"

export default function About() {

    return (
        <div className="open-source-section">
            <div className="open-source-text">
                    <p>Código aberto (do inglês Open Source) é o código-fonte que é disponibilizado gratuitamente para consulta, examinação, modificação e redistribuição. Os produtos incluem permissão para usar o código-fonte, documentos de design ou conteúdo do produto.</p>
                    <p>Fonte: <a href="https://pt.wikipedia.org/wiki/Código_aberto">https://pt.wikipedia.org/wiki/Código_aberto</a></p>
            </div>

            <div className="open-source-text">
                    <p>Software livre é o software que concede liberdade ao usuário para executar, acessar e modificar o código fonte, e redistribuir cópias com ou sem modificações. Sua definição é estabelecida pela Free Software Foundation em conjunto com o projeto GNU.</p>
                    <p>Fonte: <a href="https://pt.wikipedia.org/wiki/Software_livre" style={{textDecoration: "none"}}><span>https://pt.wikipedia.org/wiki/Software_livre</span></a></p>
            </div>
        </div>
    )
}