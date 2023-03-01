import styled from "styled-components";

const ProfileImage = styled.img`
  width: calc(100% + 1px);
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  transition: ${({theme}) => theme.transition};
`;

export default ProfileImage;
