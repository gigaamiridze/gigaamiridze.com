import styled from "styled-components";

const JobsContent = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  column-gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px 0;
  }
`;

export default JobsContent;