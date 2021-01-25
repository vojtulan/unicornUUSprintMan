//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import Css from "./subject.css.js";

//@@viewOff:imports

const Subject = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Subject",
  //@@viewOff:statics

  propTypes: {
    subject: UU5.PropTypes.shape({
      name: UU5.PropTypes.string.isRequired,
      //imageUrl: UU5.PropTypes.string.isRequired,
      credits: UU5.PropTypes.number.isRequired,
      degree: UU5.PropTypes.string.isRequired,
      goal: UU5.PropTypes.string.isRequired,
      lang: UU5.PropTypes.string.isRequired,
      opt: UU5.PropTypes.string,

    }),
    colorSchema: UU5.PropTypes.string,
    /*onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,*/
    onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    subject: null,
    colorSchema: "blue",
    /*onDetail: () => {},
    onUpdate: () => {},*/
    onDelete: () => {}
  },
  //@@viewOff:defaultProps

  render({ subject, colorSchema, onDelete }) {
    //@@viewOn:private


    function handleDelete() {
      /*UU5.Environment.getPage()
        .getAlertBus()
        .addAlert({
          content: "I can't delete subject. I'm stupid visual component.'",
          closeTimer: 1000
        });*/
        onDelete(subject)
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderHeader() {
      return (
        <>
          {subject.name}
        </>
      );
    }

    if (!subject) {
        return null;
    }

    return (
      <UU5.Bricks.Card className = {Css.subject} header={renderHeader()}>
        <UU5.Bricks.Image
        src={subject.imageUrl}
        type="rounded"
        width="100%"
        />
        <div className = {Css.footer}>
            <div className = {Css.footerLeftDiv}>
                <span><b>{subject.credits} credits</b></span>
            </div>
            <div className = {Css.footerRightDiv}>
                <UU5.Bricks.Button className = {Css.icon} onClick={handleDelete} colorSchema="red">
                    <UU5.Bricks.Icon icon="mdi-delete" />
                </UU5.Bricks.Button>    
            </div>

        
        </div>
      </UU5.Bricks.Card>


    );
    //@@viewOff:render
  }
});

export default Subject;