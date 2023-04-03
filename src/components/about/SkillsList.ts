import styled from "styled-components";

const SkillsList = styled.div`
  display: flex;
  column-gap: 25px;
  margin-top: 7px;

  @media (max-width: 900px) { column-gap: 50px; }
  @media (max-width: 650px) { column-gap: 30px; }
  @media (max-width: 600px) { column-gap: 50px; }
  @media (max-width: 500px) { column-gap: 30px; }
  @media (max-width: 420px) {
    justify-content: space-between;
    column-gap: 15px;
  }
  @media (max-width: 375px) { margin-top: 5px; }
  
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    &:last-child {
      @media (max-width: 600px) {
        display: none;
      }
    }

    li {
      ${({ theme }) => `
        color: ${theme.colors.slate};
        font-family: ${theme.fonts.secondary};
      `}
      font-size: 11.5px;
      font-weight: 300;
      line-height: 1.3;
      padding-left: 20px;
      position: relative;

      @media (max-width: 900px) { white-space: nowrap; }
      @media (max-width: 420px) { white-space: inherit; }
      @media (max-width: 375px) {
        font-size: 10.5px;
        padding-left: 17px;
      }

      &::before {
        content: "▹";
        display: block;
        position: absolute;
        top: -1px;
        left: 0;
        color: ${({ theme }) => theme.colors.green};
        font-size: 12.5px;
      }
    }
  }
`;

export default SkillsList;