import { Button } from "react-bootstrap"
import authService from "../services/auth.service"
function UploadPage(){
return (
    <><Button onClick={async()=>await authService.users()}>get user</Button></>
)
}

export default UploadPage