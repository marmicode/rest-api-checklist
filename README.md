<h1>
    <img width="35" valign="bottom" src="https://raw.githubusercontent.com/typebytes/checklist-cli/master/src/assets/angular-checklist.png">
    Checklist Template
</h1>

---

This is a template repository you can use to quickly create a checklist similar to the awesome [Angular Checklist](https://angular-checklist.io/)

# How it works

This template repository uses [`@marmicode/checklist-cli`](https://github.com/marmicode/checklist-cli) (based on [Angular Checklist](https://angular-checklist.io/)) to convert markdown like this :

```markdown
---
title: put code samples
---

# Problem

It's hard to explain code without `code`.

# Solution

Write code like this:

\`\`\`ts

const boom = () => setInterval(boom);
boom();

\`\`\`

**WARNING:** THIS WILL EXPLODE 💥
```

into something friendly like this:

<img src="https://raw.githubusercontent.com/marmicode/checklist-template/master/example.png">

# Usage

1. Use this template by clicking the "Use this template" button above 👆

2. Install dependencies

```sh
npm install # or yarn
```

3. Start the local server

```sh
npm start # or yarn start
```

4. Edit the markdow content in the `content` folder

5. Once satisfied, you can build your app

```sh
npm run build # or yarn build
```

and deploy `dist/browser` wherever you want

# Credits

<table border="0">
  <tr>
    <td>
      <a href="https://github.com/d3lm" style="color: white">
        <img src="https://github.com/d3lm.png?s=150" width="150"/>
      </a>
    </td>
    <td>
      <p>Co-author of Angular-Checklist<p>
      <p><strong>Dominic Elm</strong></p>
      <p><strong>twitter: </strong><a href="https://twitter.com/elmd_">@elmd_</a></p>
    </td>
    <td>
      <a href="https://github.com/KwintenP" style="color: white">
        <img src="https://github.com/KwintenP.png?s=150" width="150"/>
      </a>
    </td>
    <td>
      <p>Co-author of Angular-Checklist<p>
      <p><strong>Kwinten Pisman</strong></p>
      <p><strong>twitter: </strong><a href="https://twitter.com/KwintenP">@KwintenP</a></p>
    </td>
  </tr>
  <tr>
    <td></td>
    <td>
      <a href="https://github.com/yjaaidi" style="color: white">
        <img src="https://github.com/yjaaidi.png?s=150" width="150"/>
      </a>
    </td>
    <td>
      <p>Author of @marmicode/checklist-cli<p>
      <p><strong>Younes Jaaidi</strong></p>
      <p><strong>twitter: </strong><a href="https://twitter.com/yjaaidi">@yjaaidi</a></p>
    </td>
    <td></td>
  </tr>
</table>
