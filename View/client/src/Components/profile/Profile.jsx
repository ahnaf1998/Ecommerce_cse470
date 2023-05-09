import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ProfileContainer, ProfileIcon, ProfileImage } from "./profile.styled";

export const Profile = () => {
    const navigate=useNavigate()

    const [token,setToken,removeToken] = useCookies([]);
    
    const logoutButton=()=>{
     
     removeToken('jwt')
     window.location.reload(false);
     navigate("/");
    }
 
  return (
    <>
      <ProfileContainer>
        <ProfileImage
          src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
          alt=""
        />
        <button onClick={logoutButton}>
          
        <ProfileIcon  />
          
        </button>
      </ProfileContainer>
    </>
  );
};
