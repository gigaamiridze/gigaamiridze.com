import styled from "styled-components";

const SkillsList = styled.ul`
  display: flex;
  column-gap: 25px;

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    li {
      ${({ theme }) => `
        color: ${theme.colors.slate};
        font-family: ${theme.fonts.secondary};
      `}
      font-size: 11.5px;
      font-weight: 300;
      padding-left: 20px;
      position: relative;

      &::before {
        content: "▹";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        color: ${({ theme }) => theme.colors.green};
        font-size: 12.5px;
      }
    }
  }
`;

export default SkillsList;