<div align="center" id="top"> 
  <img src="./src/public/apple-touch-icon.png" alt="Your Energy" />

&#xa0;

<a href="https://korbetmaryna.github.io/your-energy-team-project">Demo</a>

</div>

<h1 align="center">YOUR ENERGY</h1>
<p align="center">Team project</p>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/KorbetMaryna/your-energy-team-project?color=242424">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/KorbetMaryna/your-energy-team-project?color=242424">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/KorbetMaryna/your-energy-team-project?color=242424">

  <img alt="Github forks" src="https://img.shields.io/github/forks/KorbetMaryna/your-energy-team-project?color=242424" />

</p>

<p align="center">
  <a href="#white_circle">About</a> &#xa0; | &#xa0; 
  <a href="#black_circle">Features</a> &#xa0; | &#xa0;
  <a href="#gear">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#computer">Starting</a> &#xa0; 
</p>

<p align="center"><a href="https://github.com/KorbetMaryna/your-energy-team-project/graphs/contributors" target="_blank">Developers</a></p>
<br>

## :white_circle: About

Welcome to Your Energy, a collaborative project by our team of skilled
programmers. Our platform, a health-centric website, offers a curated collection
of physical exercises to strengthen your well-being. Users can save favorite
exercises on a dedicated 'Favorites' page. The site features a search
functionality, allowing users to find exercises by keyword and filter them.
Tailor your workout by selecting exercises based on individual preferences, and
rate exercises with the option to provide feedback to the backend. Additionally,
users can subscribe via the provided form for updates and newsletters. Explore a
comprehensive fitness experience designed with you in mind.

## :black_circle: Features

:radio_button: Header:

:black_medium_square: Mobile :black_medium_small_square: Logo and burger menu
with navigation and links to social media.

:black_medium_square: Tablet & Desktop

:black_medium_small_square: Logo, navigation, and social media links.
:black_medium_small_square: Clicking on the logo or "Home" redirects the user to
the home page. :black_medium_small_square: Clicking on "Favorites" opens a page
with a list of exercises added to favorites. :black_medium_small_square:
Clicking on the burger menu expands it to the full height of the viewport.

:radio_button: Home:

:black_medium_small_square: Hero section with the site title and a list of
popular tags. :black_medium_small_square: Filter panel block for users to search
for specific exercises. :black_medium_small_square: Categories/exercises block
based on the chosen filter (by body part, muscles, or equipment).
:black_medium_small_square: Quote of the day block retrieved from the backend
and stored in localStorage. :black_medium_small_square: Informative block about
the importance of dedicating 110 minutes to sports daily.
:black_medium_small_square: Categories section displaying dynamically fetched
categories based on the selected filter.

:radio_button: Exercise Category Card:

:black_medium_small_square: Template for displaying a category card with an
image, title, and the associated filter. :black_medium_small_square: Clicking on
a category card hides the category list and displays exercises related to the
chosen category.

:radio_button: Exercise List:

:black_medium_small_square: Display exercises considering the user's chosen
filter and category. :black_medium_small_square: Include a section title
indicating the currently selected category. :black_medium_small_square: Include
a search bar for searching exercises by keyword, considering filters and
categories. :black_medium_small_square: Pagination functionality for server-side
pagination, sending requests based on the page number and items per page.
:black_medium_small_square: If no exercises are found on the backend, display a
corresponding message to the user.

:radio_button: Exercise Card:

:black_medium_small_square: Template for displaying an exercise card with the
exercise name, calories burned, targeted body part, goal, and a start button.\
:black_medium_small_square: Clicking the start button opens a modal window with detailed
information about the exercise.

:radio_button: Modal Window (Exercise Details):

:black_medium_small_square:Include a video demonstration (if available),
exercise name, rating, goal, targeted body part, popularity among users,
calories burned, and a brief description. :black_medium_small_square: Add a
button to add/remove the exercise from favorites, updating the localStorage
information. :black_medium_small_square: Include a button to rate the exercise,
linking the rating to the user's email (optional feature).
:black_medium_small_square: Clicking the backdrop, the close button, or pressing
ESC should close the modal window, removing event listeners.

:radio_button: Favorites Page:

:black_medium_small_square: Display a list of exercises added to favorites by
the user. :black_medium_small_square: Include the exercise name, calories
burned, targeted body part, and goal. :black_medium_small_square: Provide a
button to remove an exercise from favorites, updating localStorage.

:radio_button: Rating Feature:

:black_medium_small_square: Exercise Card: :black_medium_small_square: Add "Give
a rating" button.

:black_medium_small_square: Rating Modal: :black_medium_small_square: Radio
buttons, description, and mandatory email input.

:black_medium_small_square: Form Interaction: :black_medium_small_square: Submit
sends a backend request; closes modal on success, displays error notification on
failure.

:black_medium_small_square: Modal Interaction: :black_medium_small_square:
Opens/closes exercise details modal accordingly.

:black_medium_small_square: Notifications: :black_medium_small_square: Clear
success/error notifications.

:black_medium_small_square: Implementation: :black_medium_small_square: Ensure
seamless functionality, robust validation, and smooth transitions for a
user-friendly experience.

## :gear: Technologies

The following tools were used in this project:

- [JavaScript](https://www.w3schools.com/js/)
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)

:black_medium_small_square: Libraries:\

- [vanilla-app-template](https://github.com/goitacademy/vanilla-app-template)
- [axios](https://www.npmjs.com/package/axios)
- [izitoast](https://www.npmjs.com/package/izitoast)
- [lodash](https://www.npmjs.com/package/lodash)
- [micromodal](https://www.npmjs.com/package/micromodal)

## :computer: Starting

  <p>Follow the link: </p>
  <a href="https://korbetmaryna.github.io/your-energy-team-project">Your
  Energy</a>
  &#xa0;
