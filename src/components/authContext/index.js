import { createContext, useEffect, useState } from "react";
import data from "../data.json";
export const AuthContext = createContext();
export const AuthContextProvider = ({children})=>{
    let users = data.users;

    const [currentUser, setCurrentUser] = useState(
      JSON.parse(localStorage.getItem("user"))||null  
    );

    const login = (inputs)=>{
        const user = users.find(
            (u) => u.name == inputs.name && u.pass == inputs.pass
        );
        if(user){
            document.cookie="access_token=valid_token";
            setCurrentUser(user);
            return {
                status: 200,
                message: "Correct user!"
            }
        }else {
            return {
                status: 404,
                message: "Not found!"
            };
        }
    };

    const logout = () => {
        var now = new Date();
        now.setMonth(now.getMonth() - 1);
        document.cookie = `access_token=;expires=${now.toUTCString()};Secure;`;
        setCurrentUser(null);
    };
    // hàm logout này là hàm thực thi đăng xuất bn nhá, nó xóa thông tin người dugnf hinej tại, bây giờ ấy bn muốn đặt nút đăng xuất ở đâu ở hearder ln ngay dưới login ấy
    // oke bn

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

};