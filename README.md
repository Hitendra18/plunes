# Welcome

## Live Deployment

[https://plunes.vercel.app](https://plunes.vercel.app)

## Run Locally

1.  **Clone the Repository**
    Copy code
    `bash
    git clone https://github.com/Hitendra18/plunes 
    cd plunes
    `
2.  **Set Up Environment Variables**
    - Create a `.env` file in both the `/backend` and `/frontend` directories.
    - Populate them with the necessary environment variables. Refer to the `.env.example` files for structure and required variables.
3.  **Install Dependencies**
    - Navigate to both directories and install the required packages:
      ```bash
      cd backend
      npm install
      cd ../frontend
      npm install
      ```
4.  **Run the Servers**
    - Start the backend server
    ```bash
    cd backend
    npm run dev
    ```
    - Start the frontend server:
    ```bash
    cd ../frontend
    npm run dev
    ```

- **Access the Application**

  - Open your browser and navigate to: [http://localhost:5173](http://localhost:5173)
