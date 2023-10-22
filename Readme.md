# WebRTC Application

This repository contains a simple WebRTC Application implemented in HTML, CSS and JavaScript.
Repository Structure

The main files in the repository are:
`allRepos/repos/webrtc/output.json`: A dictionary containing files from the repository.
`index.html`: The main HTML file.
`index.css`: The CSS file for styling the HTML page.
`index.js`: The main JavaScript file that contains the logic for the WebRTC application.
Application Description

This WebRTC application has a simple setup with two video players, identified as `user-1` and `user-2`. It also includes user interaction buttons to create an offer, create an answer and add an answer in the context of WebRTC. These functionalities are implemented with the help of the JavaScript file `index.js`.
Installation & Usage

To use this application, follow these steps:

1. Clone the repository to your local machine.

2. Open the `index.html` file in a web browser.

3. Interact with the application by clicking the available buttons.

Here's a brief description of what each JavaScript action does:
`createOfferButton`: Initiates the process of creating a peer connection and an offer.
`createAnswerButton`: Creates an answer once an offer has been created and set.
`addAnswerButton`: Adds the retrieved answer to the peer connection.

The respective JS functions can be found in the `index.js` file.

javascript

createOfferButton.addEventListener("click", createOffer);

createAnswerButton.addEventListener("click", createAnswer);

addAnswerButton.addEventListener("click", addAnswer);
init();

Summary

The project is a basic implementation of a WebRTC application, demonstrating the process of offer and answer exchange involved in establishing a peer-to-peer connection.

Please feel free to explore and contribute!

Note: As it's a basic implementation, it doesn't handle the signalling process involving the exchange of offer and answer, nor does it include turn servers for handling NAT traversal. In a real-world application, you would need to implement these features to ensure the application works as intended.