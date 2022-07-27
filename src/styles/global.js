import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        --background: rgba(0, 128, 128, 1);
        --color-card-live: rgba(175, 238, 238, 1);
        --color-font-live: rgba(0, 128, 0, 1);
        --border-card-live: rgba(47, 79, 79, 1);
        --color-card-dead: rgba(255, 228, 225, 1);
        --color-font-dead: rgba(205, 92, 92, 1);
        --border-card-dead: rgba(160, 82, 45, 1);
    }
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    body, html {
        height: 100vh;
        width: 100vw;
        background: var(--background);
    }
`