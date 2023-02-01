import { Link  } from "react-router-dom";
const SideNav = (props) => {
  return (
    <div
      className="sidenav"
      style={props.toggle ? { left: "0%" } : { left: "100%" }}
    >
      <div className="links-list">
        {props.links.map((item, index) => {
          return <Link to={item.url} onClick={props.clickFunction}>{item.name}</Link>;
        })}
      </div>
    </div>
  );
};

export default SideNav