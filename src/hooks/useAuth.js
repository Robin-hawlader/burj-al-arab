import { useContext } from "react"
import { AutContext } from "../Context/AuthProvider"

const useAuth = () => {
    return useContext(AutContext);
}
export default useAuth;