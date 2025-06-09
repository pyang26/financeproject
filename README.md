# Economic Indicators Dashboard

A simple dashboard for visualizing unemployment and inflation data with key economic events, using data from the FRED API.

## Setup

1. **Get a FRED API Key:**
   - Go to the [FRED website](https://fred.stlouisfed.org/).
   - Click on **"My Account"** in the top right and sign in or create a free account.
   - Once logged in, go to your account settings and find the **"API Keys"** section.
   - Click **"Request API Key"** and follow the instructions.
   - Copy your API key.

2. **Create `apikey.js`:**
   - In the project root, create a file named `apikey.js` with the following content:
     ```js
     const FRED_API_KEY = "YOUR_FRED_API_KEY_HERE";
     ```
   - **Do not share your API key or commit `apikey.js` to version control.**

3. **Install dependencies (optional, for static server):**
   - If you want to use the included static server, run:
     ```bash
     npm install
     ```

4. **Run the project:**
   - Start the static server with:
     ```bash
     npm start
     ```
   - Or simply open `index.html` in your browser.

## Notes
- The API key is required to fetch data from the FRED API.
- The file `apikey.js` is included in `.gitignore` and will not be committed to the repository.