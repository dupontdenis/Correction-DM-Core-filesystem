# dm-filesystem

## Description



## Installation

To install the dependencies, run the following command:

```bash
npm install
```

## Running the Application

To run the application, you can use the following code:
```bash
npm run start
```

To run the `index.html` file, you need to use the Live Server extension in Visual Studio Code. This will serve your `index.html` file at `http://localhost:5500/index.html` by default.

The `index.html` file uses the Fetch API to make a request to `http://localhost:3000/totalSales`. This endpoint returns the total sales data which is then displayed in the DOM.

Please note that you need to have CORS (Cross-Origin Resource Sharing) enabled on your server to allow the Fetch API to make requests to it. If you're using Express.js for your server, you can use the `cors` middleware to enable CORS.