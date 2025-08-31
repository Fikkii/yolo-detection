# Image Detection Frontend

This is the frontend for an image detection project, built with [Vue.js](https://vuejs.org/) and bundled using [Vite](https://vitejs.dev/). The app provides a simple interface for real time object detection

## Quick Start

The app is already bundled and ready to use!  
You only need to clone the repository and serve the files with any static web server.

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/image-detection-frontend.git
   cd image-detection-frontend/dist
   ```

2. **Serve the app with a web server:**

   - **Using Python (if you don't have a web server):**
     - For Python 3.x:
       ```bash
       python -m http.server 8080
       ```
     - For Python 2.x:
       ```bash
       python -m SimpleHTTPServer 8080
       ```
     - Then open [http://localhost:8080](http://localhost:8080) in your browser.

   - **Or use any other static file server of your choice.**

## Backend

The backend for image detection is available at:  
[https://github.com/Fikkii/yolo-flask-api](https://github.com/Fikkii/yolo-flask-api)  
It implements image detection using YOLO.

## Contributing

Contributions are welcome!  
Feel free to fork the repository, open issues, or submit pull requests.

## License

This project is licensed under the MIT License.
