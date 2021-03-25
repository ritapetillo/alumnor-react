import { keyframes } from "styled-components";

export const slideIn = keyframes`
from {
    right: -30%;
      opacity: 0;
    }
    to {
      right: 0;
      opacity: 1;
    }
`;

export const slideOut = keyframes`
   from {
      right: 0;
      opacity: 1;
    }
  to {
      right: -30%;
      opacity: 0;
    }
}`;
