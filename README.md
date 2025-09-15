# Sunfi Pharma

This is a web application for Sunfi Pharma, a comprehensive pharmaceutical services provider. This application showcases the services offered by the company and provides a way for potential clients to get in touch.

## Table of Contents

*   [About The Project](#about-the-project)
*   [Built With](#built-with)
*   [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
*   [Usage](#usage)
*   [Scripts](#scripts)
*   [File Structure](#file-structure)
*   [Contributing](#contributing)
*   [License](#license)

## About The Project

This project is a single-page application (SPA) built with React. It is designed to be a modern, responsive, and user-friendly marketing website for Sunfi Pharma.

### Features

*   **Home Page:** A landing page that provides an overview of the company and its services.
*   **Services Page:** A detailed breakdown of the services offered by Sunfi Pharma, including:
    *   Research & Development
    *   Contract Manufacturing
    *   Regulatory Affairs
    *   Supply Chain Solutions
    *   Medical Affairs
    *   Pharmacovigilance
*   **About Page:** Information about the company's mission, vision, and team.
*   **Contact Page:** A form for users to get in touch with the company.
*   **Responsive Design:** The application is fully responsive and works on all devices, from mobile phones to desktops.

## Built With

This project is built with the following technologies:

*   [Vite](https://vitejs.dev/) - A next-generation front-end tooling for web projects.
*   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
*   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
*   [shadcn-ui](https://ui.shadcn.com/) - A collection of re-usable components built with Radix UI and Tailwind CSS.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can install them using [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating).

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/Sunfi_Pharma.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Start the development server
    ```sh
    npm run dev
    ```

## Usage

The application will be available at `http://localhost:8080`. You can navigate through the different pages to see the content.

## Scripts

In the project directory, you can run the following scripts:

*   `npm run dev`: Runs the app in the development mode.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run lint`: Lints the code for any errors.
*   `npm run preview`: Serves the production build locally.

## File Structure

Here is the file structure of the project:

```
Sunfi_Pharma/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── hero-pharmaceutical.jpg
│   ├── components/
│   │   ├── layout/
│   │   │   └── Layout.tsx
│   │   └── ui/
│   │       ├── ... (shadcn-ui components)
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   ├── Products.tsx
│   │   └── Services.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── package.json
├── README.md
└── ... (configuration files)
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
