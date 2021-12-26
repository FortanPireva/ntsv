import basicInfo from "./basicInfo";
import components from "./components";
import getNote from "./notes/get-note";
import servers from "./servers";
import notesInfo from "./notes";

const docsObject = {
  ...basicInfo,
  ...servers,
  ...components,
  ...notesInfo,
};
export default docsObject;
