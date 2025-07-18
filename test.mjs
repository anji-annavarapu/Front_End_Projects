import fetch from 'node-fetch'; // Make sure to use ESM or dynamic import
import { JSDOM } from 'jsdom'; // Use jsdom for HTML parsing

async function fetchAndPrintGridFromTable(docUrl) {
    try {
        // Step 1: Fetch the document content
        const response = await fetch(docUrl);
        const text = await response.text();

        // Step 2: Parse rows into grid data
        const rows = text.split('\n').slice(1); // Skip the header row
        const gridData = [];
        let maxX = 0, maxY = 0;

        for (const row of rows) {
            const columns = row.trim().split(/\s+/); // Split by spaces/tabs
            if (columns.length === 3) {
                const x = parseInt(columns[0], 10);
                const y = parseInt(columns[2], 10);
                const char = columns[1];

                // Log parsed values to debug
                console.log(`Parsed x: ${x}, y: ${y}, char: ${char}`);

                gridData.push({ x, y, char });

                // Track the maximum dimensions of the grid
                maxX = Math.max(maxX, x);
                maxY = Math.max(maxY, y);
            }
        }

        // Log the grid dimensions
        console.log(`Max X: ${maxX}, Max Y: ${maxY}`);

        // Step 3: Initialize and fill the grid
        const grid = Array.from({ length: maxY + 1 }, () => Array(maxX + 1).fill(' '));
        console.log('Empty grid initialized:', grid);

        for (const { x, y, char } of gridData) {
            grid[y][x] = char;
        }

        // Step 4: Print the grid
        grid.forEach(row => console.log(row.join('')));

    } catch (error) {
        console.error("Error fetching or processing the document:", error);
    }
}


// Use the URL from the example Google Docs link
fetchAndPrintGridFromTable('https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub');
