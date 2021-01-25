//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

let initialSubjects = [
  {
    id: 1,
    name: "Math",
    imageUrl: "https://lh3.googleusercontent.com/proxy/OT4lsqwiUFCP0dRnehcvjLc0dXIZAelTse3b89VyCoLpVJz9NYWgdDlu0ThcqTR6Y8U6_cI0lBCUCGTIRBU7cA6jeOd1J64CIBoAMmzmvRVl2oY6zbvQFcgSFXuZ",
    credits: 9,
    degree: "Mgr.",
    goal: "Imaginary goal for Math",
    lang: "CZ",
    opt: "Extra info here",

  },
  {
    id: 2,
    name: "English",
    imageUrl: "https://www.freestudy.com/wp-content/uploads/2019/06/english-1280x720.jpg",
    credits: 6,
    degree: "Bc.",
    goal: "Imaginary goal for English",
    lang: "EN",
    opt: "Extra info here",

  },
  {
    id: 3,
    name: "Art",
    imageUrl: "https://images.wallpapersden.com/image/download/monkey-d-luffy-one-piece-art_a2tmam6UmZqaraWkpJRoa2VlrWdlZWU.jpg",
    credits: 3,
    degree: "Bc.",
    goal: "Imaginary goal for Art",
    lang: "CZ",
    opt: "Extra info here",

  },
  {
    id: 4,
    name: "History",
    imageUrl: "https://lh3.googleusercontent.com/proxy/VDX-2Si6gdrMWfPKAhipriWlLk5OG0tS43OaIPXC6n_e6OjtODsvMSTIU56AUbU44Kote-UCd2S0lfPzfn1VT-A1DCMlJdQ9mcUjT-YB-sr4iEf8A_s0-TE",
    credits: 3,
    degree: "Mgr.",
    goal: "Imaginary goal for History",
    lang: "CZ",
    //opt: "Extra info here",

  },
  {
    id: 5,
    name: "Management",
    imageUrl: "https://www.uctoday.com/wp-content/uploads/2020/07/Imporatnt-endpoint-management-1280x720.jpg",
    credits: 6,
    degree: "Bc.",
    goal: "Imaginary goal for Management",
    lang: "EN",
    //opt: "Extra info here",

  }
];

const SubjectProvider = createComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "SubjectProvider",
    //@@viewOff:statics
  
    render({ children }) {
      //@viewOn:hooks
      const [subjects, setSubjects] = useState(initialSubjects);
      //@viewOff:hooks
  
      //@@viewOn:private
      function handleCreate(subject) {
          //console.log(subject)
        subject.id = UU5.Common.Tools.generateUUID();
        setSubjects(prevSubjects => prevSubjects.concat([subject]));
      }
  
      function handleDelete(subject) {
        //setSubjects(prevSubjects => prevSubjects.filter(item => item.id !== subject.id));
        //let jokeIndex = jokes.findIndex(item => item.id == subject.id)
        let newSubjects = subjects.filter(item => item.id !== subject.id)
        setSubjects(newSubjects)
      }
      //@@viewOff:private
  
      //@@viewOn:render
      return children({ subjects, handleCreate, handleDelete });
      //@@viewOff:render
    }
  });

export default SubjectProvider;