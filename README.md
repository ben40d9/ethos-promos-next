# Ethos Promos Next.js Application

This is a promotional platform built with Next.js. The application allows users to visit different pages for various companies and submit their emails to receive promotional content. The emails are handled server-side and are sent using the SendGrid service. The application also uses MongoDB to store the submitted emails.

## Project Structure

The project is structured as follows:

- `src/pages`: Contains all the pages of the application. Each file corresponds to a route in the application. The `_app.js` and `_document.js` files are special Next.js files used to customize the overall layout of the application.
- `src/pages/api`: Contains server-side routes. In this case, there's a `submit_email` route that handles email submissions for different companies.
- `src/pages/posts`: Contains pages for different companies. Each page contains a form where users can submit their email. Upon submission, the email is sent to the `/api/submit_email/[company]` route, and the user is redirected to an affiliate link for the company.
- `src/utils`: Contains utility functions. The `sendEmail.js` file is used to send emails.

## Code Explanation

### `src/pages/posts/namecheap.js`

- We import the `useState` hook from React to manage the state of the email input field.
- The `validateForm` function is called when the form is submitted. It validates the email address using a regular expression and calls the `sendData` function if the email is valid.
- The `sendData` function sends a POST request to the `/api/submit_email` API route with the email address as the request body. If the response is successful, it alerts the user and redirects them to the affiliate link. If there is an error, it alerts the user to try again.
- In the `return` statement, we render the form with the email input field and submit button. We also add a `style` attribute to the email input field to fix the issue with white text being invisible (`style={{ color: 'black' }}`). Additionally, we set the background color of the container to `#f0f4f6` to match the original design.
- The `onChange` event handler updates the state of the email input field as the user types.

### `src/pages/api/submit-email.js`

- We import the `MongoClient` and `ServerApiVersion` from the `mongodb` package.
- We define the MongoDB URI and database name (`uri` and `dbName`).
- We create a `MongoClient` instance with the MongoDB URI and specify the server API version.
- We define an asynchronous function that handles the incoming request and response. This function is the default export of the module.
- We check if the request method is POST. If it is, we proceed to connect to the MongoDB database, insert the email address into the `namecheap` collection, and close the connection. We then send a successful response to the client.
- If there is an error during the process, we log the error and send an error response to the client.
- If the request method is not POST, we send a "Method Not Allowed" response.

Note: Make sure to replace `'YOUR_MONGODB_URI'` with your actual MongoDB URI. Additionally, you may need to install the `mongodb` package using `npm install mongodb` in your Next.js project.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ben40d9/ethos-promos-next.git
```

2. Change into the directory:

```bash
cd ethos-promos-next
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env.local` file in the root of the project and add your environment variables:

```bash
MONGO_URI=your_mongodb_uri
SENDGRID_API_KEY=your_sendgrid_api_key
```

5. Run the application:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Usage

Visit the home page at `http://localhost:3000` and click on the links to visit the pages for different companies. Enter your email in the form and submit it to receive promotional content.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

Please modify it according to your needs.
