# mirea.js
A (MI)nimalist (REA)der for web content.

The reader has similar functions to many e-book readers, such as [Kindle](https://read.amazon.com/) and [Neat Reader](https://www.neat-reader.com/), but can be used with a normal HTML content, and not ebook format. This makes it very simple for writers to publish their content on the web.

See a live example [here](http://dlucredio.com/contos/umMonumentoNoDeserto.html) (from my personal website - it's in portuguese, but you can get the idea)!

## Main Features

* Customizable themes, font size, font type, margins and spacing
* Easy to customize messages for any language
* Simple responsive design
* Remembers last used configuration and reading position (using HTML Web Storage)
* Easily integrates into any HTML content (using Web Components, CSS and JavaScript)
* REALLY minimalist! Just download two files and use it in minutes (see below)

## Getting Started

These instructions will get you started in seconds.

### Prerequisites

Step 1. Download [ebook.js](ebook.js) and [settings.png](settings.png) from the GitHub repository and save it into a local folder.

Step 2. Create an HTML file in the same folder as above, with the following minimum content:

```
<!DOCTYPE html>
<html>

<head>
    <!-- For proper character encoding -->
    <meta charset="UTF-8" />
    <!-- For proper responsiveness -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Include the ebook.js file -->
    <script src="ebook.js"></script>
    <!-- Choose a title -->
    <title>Some document</title>
</head>

<body>    
    <!-- Just add this tag here, and choose a title -->
    <ebook-reader-navbar title="Some document"></ebook-reader-navbar>

    <!-- Place your content here, in an div with id="content" -->
    <div id="content">
        <p>Your content goes here</p>
        <p>Your content goes here</p>
    </div>
</body>

</html>

Step 3. (optional) If you want, edit the first lines of ebook.js to customize the configuration messages.

Step 4. Done!
```

## Authors

* **Daniel Lucrédio** - *Initial work* - [dlucredio](https://github.com/dlucredio)

See also the list of [contributors](https://github.com/dlucredio/mirea.js/contributors) who participated in this project.

## License

This project is FREE to use. There is no License. Seriously! Just use it and don't tell me (perhaps give me a star?)!