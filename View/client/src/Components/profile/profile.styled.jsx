import { MdLogout } from 'react-icons/md';
import styled from 'styled-components';

export const ProfileContainer=styled.div`
display:flex ;
align-items:center ;
button{
    background:none ;
    border:none;
    color:${(props)=>props.theme.primaryColor} ;
}
`
export const ProfileImage = styled.img`
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.8rem;
  border: 2px solid ${(props) => props.theme.buttonColor};
`;
export const ProfileIcon=styled(MdLogout)`
font-size:1.5rem ;
cursor: pointer;

`