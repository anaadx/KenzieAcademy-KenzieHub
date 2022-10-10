import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

button{
    cursor: pointer;
}

main {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-self: center;
    max-width: 100%;
}

  :root{
  --colorPrimary: #FF577F;
  --colorPrimaryFocus: #FF427F;
  --colorPrimaryNegative: #59323F;

  --grey4: #121214;
  --grey3: #212529;
  --grey2: #343B41;
  --grey1: #868E96;
  --grey0: #F8F9FA;

  --sucess: #3FE864;
  --negative: #E83F5B;
  }

  .title1{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  }

  .title2{
  font-size: 16px;
  font-weight: bold;
  }

  .title3{
  font-size: 16px;
  font-weight: bold;
  }

  .headline{
  font-size: 12px;
  }

  .headlineBold{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  }

  .headlineItalic{
  font-size: 12px;
  font-weight: italic;
  }

`;

export default Global;
