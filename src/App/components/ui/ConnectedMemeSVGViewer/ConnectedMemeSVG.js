import { MemeSVGViewer } from "orsys-tjs-meme";
import { connect } from "react-redux";

function mstp(s,p) {
    return {
        ...p,
        meme:s.current,
        image:s.ressources.images.find(i=>i.id===s.current.imageId),
        basePath:'/media/'
    }
}
function mdtp() {
    return{}
}
export default connect(mstp,mdtp)(MemeSVGViewer)