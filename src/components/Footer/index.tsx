import './style.css'
import ifroLogo from "/ifro-logo.png";
import fslabLogo from "/fslab-logo.png";

export default function Footer() {

    return (
        <footer className='logos'>
            <div>
                <img className="ifro-image" src={ifroLogo} alt="" /> 
            </div>

            <div>
                <img className="fslab-image" src={fslabLogo} alt="" />
            </div>
    </footer>
    )
}