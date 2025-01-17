import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
    font-family: georgia, serif;
    
    h1, h2, h3, h4, h5, h6 {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
`;

export default Typography;
