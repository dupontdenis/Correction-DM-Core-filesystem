/**
 * Module dependencies.
 */

import express from "express";
import calculateSalesTotal from "./JS/calculTotal.mjs";
import findSalesFiles from "./JS/findSalesFiles.mjs";
import cors from "cors";

/**
 * Create Express app instance.
 */
const app = express();

/**
 * Enable Cross-Origin Resource Sharing (CORS).
 */

// it is used here to allow all connections without any restrictions
app.use(cors());

/**
 * Define the directory where sales files are located.
 * Replace "stores" with the actual directory path.
 */
const salesDir = "stores";

/**
 * Route handler for the "/totalSales" endpoint.
 * Retrieves sales files, calculates the total sales, and sends the result as JSON.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} - Promise that resolves when the response is sent.
 */
app.get("/totalSales", async (req, res) => {
  const salesFiles = await findSalesFiles(salesDir);
  const totalSales = await calculateSalesTotal(salesFiles);
  res.json({ totalSales });
});

/**
 * Start the Express server on port 3000.
 * Logs a message to the console when the server is started.
 */
app.listen(3000, () => console.log("Server started on port 3000"));
