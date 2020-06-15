# Smart weather forecast service
Serverless web forecast app with geolocation tracking. 
>  **Demo:** [weather.fuchsoria.dev](https://weather.fuchsoria.dev)

## About:
**Stack:** JavaScript and TypeScript languages. Scss as a preprocessor. ~~Framework~~ React Library. Ant Design Component Library. And the standard react-create-app settings for TypeScript.

**Interface**  Web application adapted for different screen resolutions.

**Application process:** 

 - User allows or denies browser geolocation
 - When resolving, we use the coordinates from the browser, while rejected, we use the coordinates from geolocation obtained by the user's ip
 - Request weather data for coordinates at openweathermap.org api
 - Weather and location data are distributed among react components and displayed to the user on the site

**Screenshot:** ![2020-04-12_04-36-40](https://user-images.githubusercontent.com/43413472/79059186-4e9bb080-7c77-11ea-8c41-7a385ce9e17e.png)

## Quick install:
Require installed node and npm.

### Clone repo

    git clone https://github.com/Fuchsoria/weather.git

### Install npm packages 

    npm install

### Launch development mode

    npm start
  
### Build in production

    npm run build


### Other information:
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
[React documentation](https://reactjs.org/)
