<h1>Dog Image Gallery App</h1>
This repository contains a React application that displays images of dogs based on their breeds using the Dog API.

Features
- API Requests: The app uses the Axios library to make requests to the Dog API (https://dog.ceo/api/) to fetch images of dogs based on different breeds.

- Component Lifecycle: The application utilizes React's component lifecycle methods such as constructor, componentDidMount, and componentDidUpdate to manage the fetching and updating of dog images.

- State Management: The app uses React's state to store and manage the list of dog images (doggos) and the selected breed (breed). State updates trigger re-renders to display the latest data.

- Conditional Rendering: Conditional rendering is used to display either the dog images or a "No images found for this breed." message based on whether the doggos array is empty or not.

- Search Functionality: The app includes a search feature that allows users to search for images of dogs by breed. The searchDogs function fetches images based on the user's input and updates the state accordingly.

<h3>*Not a real project, built for practice*</h3>
