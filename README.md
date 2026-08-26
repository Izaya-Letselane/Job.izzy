# Job — Job Site Landing Page

A modern, responsive job-site landing page built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. The project focuses on a clean user experience with interactive animations, responsive layouts, theme support, and reusable UI components.

## 🚀 Tech Stack

* **Next.js 15.5.3** — React framework for the application
* **React 19.1.0** — UI library
* **TypeScript 5** — Static typing and safer development
* **Tailwind CSS 4** — Utility-first styling
* **AOS** — Scroll-based animations
* **Next Themes** — Light/dark theme support
* **React Icons** — Icon library
* **React Multi Carousel** — Responsive carousel components
* **React Parallax Tilt** — Interactive tilt effects

## 📦 Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd job
npm install
```

## 🛠️ Available Scripts

### Development

Start the development server with Turbopack:

```bash
npm run dev
```

The application will be available at:

```text
https://job-izzy.onrender.com
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

### Production Server

Run the production build:

```bash
npm run start
```

### Lint

Run ESLint to check the project for code-quality issues:

```bash
npm run lint
```

## 📁 Project Structure

A typical project structure looks like:

```text
job/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router pages and layouts
│   ├── components/     # Reusable UI components
│   └── ...
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

> The exact structure may vary depending on how additional components and pages are organized.

## ✨ Features

* Responsive job-site landing page
* Modern and clean UI
* Type-safe development with TypeScript
* Responsive layouts with Tailwind CSS
* Light and dark theme support
* Scroll animations using AOS
* Interactive tilt effects
* Responsive carousels
* Icon-based UI elements
* Optimized Next.js application
* ESLint integration for code quality

## 🎨 Styling

The project uses **Tailwind CSS 4** for styling. Utility classes are used throughout the application to create responsive layouts and maintain consistent spacing, colors, typography, and components.

## 🌓 Theme Support

Theme management is handled using `next-themes`, allowing the application to support light and dark modes.

Theme behavior can be customized according to the requirements of the application.

## 🎞️ Animations & Interactions

### AOS

[AOS](https://michalsnik.github.io/aos/) is used to provide scroll-triggered animations.

### React Parallax Tilt

`react-parallax-tilt` provides interactive hover and tilt effects for selected UI elements.

### React Multi Carousel

`react-multi-carousel` is used for responsive carousel and slider sections.

## 📱 Responsive Design

The landing page is designed to work across different screen sizes, including:

* Mobile devices
* Tablets
* Laptops
* Desktop displays

Tailwind CSS responsive utilities are used to adapt the layout to different viewport sizes.

## 🔧 Environment Variables

If the project requires environment variables, create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

Do not commit `.env.local` or other files containing private credentials to version control.

## 🧹 Code Quality

Before committing changes, run:

```bash
npm run lint
npm run build
```

This helps ensure that the code passes ESLint checks and that the application can be successfully built.

## 📌 Dependencies

### Production Dependencies

```text
aos
next
next-themes
react
react-dom
react-icons
react-multi-carousel
react-parallax-tilt
```

### Development Dependencies

```text
@eslint/eslintrc
@tailwindcss/postcss
@types/aos
@types/node
@types/react
@types/react-dom
eslint
eslint-config-next
tailwindcss
typescript
```

## 🚀 Deployment

The project can be deployed to any platform that supports Next.js applications.

For a production deployment:

```bash
npm run build
npm run start
```

Make sure any required environment variables are configured on the deployment platform.

## 📄 License

This project is private and intended for its designated use. Add an appropriate open-source license here if the project is later made publicly available.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
