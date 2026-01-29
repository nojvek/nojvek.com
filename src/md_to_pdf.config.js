module.exports = {
  css: `
    body {
      font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
      font-size: 10pt;
      line-height: 1.4;
      color: #222;
      max-width: 8.5in;
      margin: 0 auto;
      padding: 0.4in 0.5in;
    }
    h1 {
      font-size: 22pt;
      font-weight: 600;
      margin: 0 0 8pt 0;
      color: #111;
    }
    h2 {
      font-size: 12pt;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5pt;
      border-bottom: 1.5px solid #333;
      padding-bottom: 3pt;
      margin: 16pt 0 8pt 0;
      color: #111;
    }
    h3 {
      font-size: 11pt;
      font-weight: 600;
      margin: 10pt 0 2pt 0;
      color: #111;
    }
    p {
      margin: 4pt 0;
    }
    em {
      font-style: italic;
      color: #555;
    }
    strong {
      font-weight: 600;
    }
    a {
      color: #0066cc;
      text-decoration: none;
    }
    ul {
      margin: 4pt 0;
      padding-left: 16pt;
    }
    li {
      margin: 2pt 0;
    }
    /* Reduce spacing between contact items */
    h1 + p, p + p:has(a) {
      margin: 0;
    }
  `,
  pdf_options: {
    format: 'Letter',
    margin: {
      top: '0.4in',
      bottom: '0.4in',
      left: '0.5in',
      right: '0.5in'
    },
    printBackground: true
  }
};
