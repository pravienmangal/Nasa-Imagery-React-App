## React NASA Images

This is a simple React project to search images using the [NASA Image Library](https://api.nasa.gov/api.html#Images). I used the super awesome [create-react-app](https://github.com/facebookincubator/create-react-app).

Search bar has been implemented. So any query you enter will respond with callouts of images and it's title.

There are also some images displayed that are fetched by using the api [Mars Rover Photos](https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY). This will only show 6 callouts of images and it's respective titles

## Scripts

In the project directory, you can run:

### `npm install`

Neccesary to install all the project dependencies.

### `Styles - SASS`
This project uses SASS to style all the components and elements and node-sass-chokidar to compile all styles in to one css file. There's no need to install anything for this as npm install takes care of all this.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## TODO

* Add pagination. Possibly infinte scroll. 
* Be able to download images in original size (high resolution).
* Add other type of media assets, not just images, the API also offers images and audios. In this case also a video and audio player has to be implemented.
* Add end-to-end tests.
* Dockerize the project.
* Use Redux to manage state if the application gets bigger and more complicated
