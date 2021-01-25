//@@viewOn:imports
import "uu5g04-bricks";
import { createVisualComponent } from "uu5g04-hooks";
import "uu_plus4u5g01-bricks";

import Config from "./config/config.js";
import Subject from "../bricks/subject"; // Add this line
import SubjectList from "../bricks/subject-list";
import SubjectCreate from "../bricks/subject-create";
import SubjectProvider from "../bricks/subject-provider";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Subjects",
  //@@viewOff:statics
};



export const Subjects = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <UU5.Bricks.Container>
        <SubjectProvider>
          {({ subjects, handleCreate, handleDelete }) => {
            return (
              <>
              <SubjectCreate onCreate={handleCreate} />
              <SubjectList subjects={subjects} onDelete={handleDelete} />
              </>
            )
          }}
        </SubjectProvider>
      </UU5.Bricks.Container>
    );
    //@@viewOff:render
  },
});

export default Subjects;
