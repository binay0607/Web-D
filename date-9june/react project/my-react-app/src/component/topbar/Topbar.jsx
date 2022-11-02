import "./topbar.scss"
export default function Topbar({menuOpen, setMenuOpen}){
    return (
        <div className={"topbar "+ (menuOpen&& "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">binay.</a>
                    <div className="items">
                        <span>+91 8112148070</span>
                    </div>
                    <div className="items">
                        <span>binay0607@gmail.com</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                    </div>
                </div>

            </div>
        </div>
    )
}