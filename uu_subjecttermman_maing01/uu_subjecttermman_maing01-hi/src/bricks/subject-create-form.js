//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";
//@@viewOff:imports

const SubjectCreateForm = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "SubjectCreateForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSubmit: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSubmit: () => {},
    onCancel: () => {}
  },
  //@@viewOff:defaultProps

  render({ onSave, onCancel }) {
    //@@viewOn:render
    return (
      <UU5.Forms.Form onSave={onSave} onCancel={onCancel} labelColWidth="xs-12 m-6 l-4 xl-12" inputColWidth="xs-12 m-6 l-4 xl-12">
        <UU5.Forms.Text label="Subject" name="name" />
        <UU5.Forms.Select name="degree"
            label="Degree"
            size="m"
        >
            <UU5.Forms.Select.Option value="Bc."/>
            <UU5.Forms.Select.Option value="Mgr."/>
            <UU5.Forms.Select.Option value="Ing."/>
        </UU5.Forms.Select>
        <UU5.Forms.Select name="lang"
            label="Language"
            size="m"
        >
            <UU5.Forms.Select.Option value="CZ"/>
            <UU5.Forms.Select.Option value="EN"/>
        </UU5.Forms.Select>  
        <UU5.Forms.Number label="Credits" valueType = "number"  name="credits"/>
        <UU5.Forms.Text label="Goal" name="goal" />
        <UU5.Forms.TextArea label="Description" name="opt" />
        <UU5.Forms.Controls />
      </UU5.Forms.Form>
    );
    //@@viewOff:render
  }
});

export default SubjectCreateForm;