import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const GreenTitle = styled(motion.h4)`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-family: ${theme.fonts.secondary};
  `}
  font-weight: 300;
`;

export const HelloTitle = styled(GreenTitle)`
  font-size: clamp(12px, 4vw, 14px);
  margin-left: 3px;
`;

export const ContactTitle = styled(GreenTitle)`
  font-size: 13px;

  @media (max-width: 375px) {
    font-size: 12.5px;
  }
`;

export const FeaturedTitle = styled(GreenTitle)`
  font-size: 12px;
  margin-bottom: 12px;
`;

export const ViewArchiveTitle = styled(GreenTitle)`
  font-size: 12px;
  margin-top: 20px;

  &:hover::after {
    width: 100%;
  }

  &::after {
    ${({ theme }) => css`
      background-color: ${theme.colors.green};
      transition: ${theme.transition};
    `}
    content: "";
    display: block;
    width: 0;
    height: 0.8px;
    opacity: 0.5;
    margin-top: 2px;
  }

  @media (max-width: 480px) {
    margin-top: 15px;
  }
`;

export const ArchiveSubtitle = styled(GreenTitle)`
  font-size: clamp(12px, 1.2vw, 14px);
  line-height: 1.6;
  margin-top: 23px;

  @media (max-width: 768px) { margin-top: 18px; }
  @media (max-width: 600px) { margin-top: 14px; }
  @media (max-width: 480px) { margin-top: 12px; }
`;