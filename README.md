# Cat Gallery

This simple web application displays a gallery of cat images. When a user hovers over an image, the background of a container element changes to display the hovered image, and a description of the image appears in the container.

## Features

- Responsive design that works on both desktop and mobile devices.
- Hover effect to display image description and background image.
- Easy to update with new images and descriptions.

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Use

1. Clone this repository or download the files.
2. Open the `index.html` file in a web browser to view the gallery.
3. Hover over the cat images to see the image descriptions and background images.

## Customization

To add more images to the gallery:

1. Add your new images to the `Cat gallery` folder.
2. Add a new `img` element inside the `cat-images` div in the `index.html` file.
3. Set the `src` attribute to the path of the new image in the `Cat gallery` folder.
4. Set the `alt` attribute to the description of the new image.
5. Add the `onmouseover="upDate(this)"` and `onmouseout="unDo(this)"` event listeners to the `img` element.

Example:

```html
<img src="./Cat gallery/new-image.jpg" alt="New image description" onmouseover="upDate(this)" onmouseout="unDo(this)">
```

## Credits

- Cat images are taken from Unsplash.
- The idea for this project was inspired by a classic JavaScript project that demonstrates event handling.

## License

This project is open-source and available for anyone to use, modify, and distribute.
