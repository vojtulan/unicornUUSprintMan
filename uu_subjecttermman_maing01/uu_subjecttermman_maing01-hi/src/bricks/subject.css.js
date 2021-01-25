import Config from "./config/config";

const icon = Config.Css.css`
  font-size: 20px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.54);
  margin-left: auto;
  cursor: pointer;
  position: relative;
  top: 50%
`;

/*const image = Config.Css.css`
    margin-left: auto;
    margin-right: auto;
`;*/

const subject = Config.Css.css`
    padding: 1%;
`;

const footer = Config.Css.css`
    margin-top: 1%;
`;

const footerLeftDiv = Config.Css.css`
    width: 85%;
    margin-top: 2%;
    float: left;
`;
const footerRightDiv = Config.Css.css`
    width: 15%
    float: left;
`;


const title = Config.Css.css`
    margin-top: 0;
    margin-bottom: 0%;
    font-size: 40px;
`;



export default {
    subject,
    footer,
    title,
    icon,
    footerLeftDiv,
    footerRightDiv
};