import "./portfolio.scss";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
} from "../../data";
import { useEffect, useState } from "react";
import PortfolioList from "../portfoliolist/Portfoliolist";

export default function Portfolio(){
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
          id: "featured",
          title: "Featured",
        },
        {
          id: "web",
          title: "Web App",
        },
        {
          id: "mobile",
          title: "Mobile App",
        },
        {
          id: "design",
          title: "Design",
        },
        {
          id: "content",
          title: "Content",
        },
      ];
    useEffect(() => {
        switch (selected) {
          case "featured":
            setData(featuredPortfolio);
            break;
          case "web":
            setData(webPortfolio);
            break;
          case "mobile":
            setData(mobilePortfolio);
            break;
          case "design":
            setData(designPortfolio);
            break;
          case "content":
            setData(contentPortfolio);
            break;
          default:
            setData(featuredPortfolio);
        }
      }, [selected]);//selected is dependency when ever we change it, it will be updated by useeffect function
    return(
        <div className="portfolio" id="portfolio">
            <h1>PORTFOLIO</h1>
            <ul>
            {list.map((item) => (
                <PortfolioList
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                />
            ))}

            </ul>
            <div className="container">
            {data.map((d) => (
                <div className="item">
                 <img
                    src={d.img}
                    alt=""
                    />
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>

        </div>
    )
}