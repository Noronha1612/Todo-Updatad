import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }

  :root {
    --gray-100: #F2F2F2;
    --gray-200: #D9D9D9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1A1A1A;
    --gray-700: #0D0D0D;
    --danger: #E25858;

    --purple: #8284FA;
    --purple-dark: #5E60CE;
    --blue: #4EA8DE;
    --blue-dark: #1E6F9F;

    --blue-dark-20p: #1E6F9F33;
  }

  body {
    background-color: var(--gray-600);
  }

  .font-sm,
  .font-md,
  .font-lg {
    font-family: 'Inter', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    line-height: 140%;
    font-weight: 400;
    color: var(--gray-100);
  }

  .bold {
    font-weight: 700;
  }

  .font-sm {
    font-size: 0.75rem;
  }
  .font-md {
    font-size: 0.875rem;
  }
  .font-lg {
    font-size: 1rem;
  }
`;