# Web Scraping Jobs Project

This project is a web scraping application that aggregates job listings from multiple international websites, helping job seekers find opportunities more efficiently. It uses Puppeteer, Node.js, and MongoDB to automate the process and centralize job data.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before running the application, make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/web-scraping-jobs.git

1. **Install Dependencies:**

Navigate to the project directory and install the required dependencies using npm:

  ```bash
  cd web-scraping-jobs
  npm install
```

## Usage

  ```node
  npm run dev
  ```

## Configuration

To analyze and add more websites or make changes, you only need to modify this const.

  ```javascript
    // Configuration for websites to scrape
    const sites = [
      {
        name: 'Remotive',
        url: 'https://remotive.com/remote-jobs/software-dev',
        selectors: { // here the selectors using by Puppeteer to scrape data 
          list: 'li.tw-cursor-pointer', // the parent div
          title: 'a.tw-block > span', 
          company: 'span.tw-block',
          location: 'span.job-tile-location',
          link: 'a.tw-block',
        },
      },
    ];
  ```

## Contributing

We welcome contributions from the community to make this project even better. Whether you're fixing a bug, improving documentation, or adding new features, your help is appreciated.

To contribute to this project, follow these steps:

1. **Fork the Repository:**
   - Click the "Fork" button at the top right of this repository to create your copy.

2. **Clone Your Fork:**
   - Clone your forked repository to your local machine:
     ```bash
     git clone https://github.com/your-username/web-scraping-jobs.git
     ```

3. **Create a New Branch:**
   - Create a new branch for your feature or fix:
     ```bash
     git checkout -b feature-or-fix-name
     ```

4. **Make Your Changes:**
   - Make your changes to the code, add features, or fix issues.

5. **Commit Your Changes:**
   - Commit your changes with a clear and concise commit message:
     ```bash
     git commit -m "Your commit message"
     ```

6. **Push to Your Fork:**
   - Push your changes to your forked repository:
     ```bash
     git push origin feature-or-fix-name
     ```

7. **Create a Pull Request:**
   - Go to the original repository on GitHub and click on the "New Pull Request" button. Describe your changes in the pull request and submit it.

I will review your pull request and work with you to merge it into the main project. Thank you for your contribution!

For major changes or feature additions, it's a good idea to open an issue first to discuss the changes you'd like to make.




