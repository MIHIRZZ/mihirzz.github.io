References I used:
- [Jolly Coding YouTube](https://youtu.be/tSI98g3PDyE?si=S7h2UbGflWE1g8hL)
- [ByteGrad YouTube](https://youtu.be/sUKptmUVIBM?si=mswDFb7Up3dWeMCG)

# To start the project

### create a nextjs app
`npx create-next-app@latest my-app --typescript --tailwind --eslint`

or 
if it is required to install in same folder then
`npx create-next-app@latest .`

or 
if it doesn't matter if it creates new folder
`npx create-next-app@latest`

- ✔ Would you like to use TypeScript? … No / Yes
- ✔ Would you like to use ESLint? … No / Yes
- ✔ Would you like to use Tailwind CSS? … No / Yes
- ✔ Would you like to use `src/` directory? … No / Yes
- ✔ Would you like to use App Router? (recommended) … No / Yes
- ✔ Would you like to customize the default import alias (@/*)? … No / Yes



### install shadcn-ui
`npx shadcn-ui@latest init`

- ✔ Which style would you like to use? › Default
- ✔ Which color would you like to use as base color? › Slate
- ✔ Would you like to use CSS variables for colors? › yes

### install velite


### change next.config.mjs

### apply links

### apply sheet
`npx shadcn-ui@latest add sheet`

### apply mobile nav

### apply next theme
to change theme to dark mode or light mode
`npm i next-themes`
and install shadcn dropdown
`npx shadcn-ui@latest add dropdown-menu`

### handle the no cotents and mdx components

### load all static pages at runtime

### utilize tailwind typography
`npm install -D @tailwindcss/typography`
this will handle all the html tags

### style the code blocks
`npm i rehype-pretty-code -D`
`npm i rehype-autolink-headings -D`
`npm i rehype-slug -D`