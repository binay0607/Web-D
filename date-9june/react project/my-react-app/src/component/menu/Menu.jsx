import "./menu.scss";

export default function Menu({menuOpen,setMenuOpen}){
    return(
        <div className={"menu "+(menuOpen&& "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(!menuOpen)}><a href="#intro">HOME</a></li>
                <li onClick={()=>setMenuOpen(!menuOpen)}><a href="#portfolio">PORTFOLIO</a></li>
                <li onClick={()=>setMenuOpen(!menuOpen)}><a href="#work">WORKS</a></li>
                <li onClick={()=>setMenuOpen(!menuOpen)}><a href="#testimonial">TESTIMONIAL</a></li>
                <li onClick={()=>setMenuOpen(!menuOpen)}><a href="contacts">CONTACT</a></li>
            </ul>
        </div>
    )
}