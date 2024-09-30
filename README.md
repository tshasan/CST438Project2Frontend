# CST 438 Project 2 Resources & Overview: Frontend WishList

This project is built using **Next.js**, managed with **pnpm**, and containerized using **Docker**.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v22 or later)
- [pnpm](https://pnpm.io/installation)
- [Docker](https://www.docker.com/get-started)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/tshasan/CST438Project2Frontend.git
   cd CST438Project2Frontend
   ```

2. Install dependencies:

   Install pnpm
   Install docker

   mac os do this
   ```bash
   brew install pnpm
   ```

   ```bash
   pnpm install
   ```

### Running the Project Locally

To run the project locally:

1. Start the development server:

   ```bash
   pnpm dev
   ```

2. Open your browser and go to:

   ```
   http://localhost:3000
   ```

You should see the application running.

### Using Docker

If you prefer to use Docker, follow these steps:

1. Build the Docker image:

   ```bash
   docker-compose build
   ```

2. Run the Docker container:

   ```bash
   docker-compose up
   ```

3. Open your browser and go to:

   ```
   http://localhost:3000
   ```

## Technologies Used

- **Next.js**: React framework for server-rendered applications.
- **pnpm**: Fast and efficient package manager ([Learn more about pnpm](https://pnpm.io/)).
- **Tailwind CSS**: Utility-first CSS framework.
- **shadcdn**: CDN for hosting UI components ([Learn more about shadcdn](https://shadcdn.com/)).
- **Docker**: For containerizing the application.
