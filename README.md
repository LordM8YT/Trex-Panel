# Trex Panel Docker Image Installation

This document provides instructions on how to install and run the Trex Panel Docker image.

**Prerequisites**

* **Docker:** Ensure Docker and Docker Compose are installed and running on your system. You can find installation instructions for your operating system on the official Docker website: [Docker Documentation](https://docs.docker.com/)

**Installation**

1. **Clone the Repository:**

   ```bash
   git clone [gh repo clone LordM8YT/trex-panel]
Build the Docker Image:

Navigate to the project directory:

cd trex-panel
Build the Docker image using the provided Dockerfile:

docker build -t trex-panel . 
Running the Container

Create and Start the Container:

docker run -d -p 8080:8080 trex-panel
This command:

-d: Runs the container in detached mode (in the background).
-p 8080:8080: Maps port 8080 on the host machine to port 8080 within the container.
Access the Trex Panel:

Open your web browser and navigate to http://localhost:8080 to access the Trex Panel interface.

Stopping the Container

To stop the running container:

docker stop <container_id> 
You can find the container ID by running docker ps -a.

Removing the Container

To completely remove the container:

docker rm <container_id>
