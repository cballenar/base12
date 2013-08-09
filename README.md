# [Base12](http://cballenar.github.io/base12/)
__A SCSS framework built around the number 12__

_Base12_ is a SCSS framework for the [_HTML5 Boilerplate_](https://github.com/h5bp/html5-boilerplate/) to help provide some basic styles but still leave the playground open for a highly customized design.

An important aspect of Base12 is that by default it's measurements are all based on the number 12. Since 12 is divisible by 2, 3, 4, 6, and 12, it makes it very easy to get a wide variety of sub-measurements while keeping some rhythm in your design.

 - Source: [https://github.com/cballenar/base12](https://github.com/cballenar/base12)
 - Homepage: [http://cballenar.github.io/base12/](http://cballenar.github.io/base12/)

## Customizing Base12
The boilerplate allows you to do some basic and, I must admit, not so polished customizations. 
This is done through the `main.scss` file. In here you will find variables for common styles such as type color, background, border, font sizes for headings and paragraphs, etc.

```scss
/*  Define your Style
==================================================================================== */

    // Fonts
    $font-heading: 'atrament-web', serif;
    $font-body-copy: 'jubilat', 'Impact', sans-serif;


    // Basic colors
    $color-bg:              #FBFBFB;
    $color-font-heading:    #303030;
    $color-font-body:       #202020;
    $color-selection:       #B3D4FC;


    // Links colors
    $color-links:           #1B4781;
    $color-links-h:         #C04620;
    $color-links-a:         #000000;
    $color-links-v:         $color-links;

    // etc...
```

## Structure
The directory structure is as follows:
```
|- css/
|   |- main.css
|   |- scss/
|   |   |- main.scss
|   |   |- base/
|   |   |- design/
|   |   |- formulas/
|   |   |- helpers/
|   |   |- media/
|   |   |- modules/
|   |   |- vendors/
```
#### main.css
Compressed output file.

#### main.scss
Here you will find all the variables and imported partials.

#### base/
The base folder contains 2 files, `base` and `normalize`. [Normalize](http://necolas.github.io/normalize.css/) is the reset sheet. Base is the primary file in Base12, this is where most variables end up in and defines most basic styles. Ideally these files will remain untouched unless a new release comes out.

#### design/
It contains two files `design` and `modifiers`. Design, as you can imagine, is where all the styles that define the design of the site are located. Modifiers are "element modifiers" they are simple classes that change existing elements, this includes things such as `blockquote.pull-quote` or `button.disabled`. In here you will also find the basic styles for the following elements: tables, blockquotes, form elements, and buttons. I realized that these elements can be highly customized and should be easy to update independently from the `base` files. Notice that the `modifiers` sheet comes before the `design` sheet when imported, this is because the modifiers are meant to come right after the `base` stylesheet.

#### formulas/
Contains mixins and formulas used in Base12, users should keep their own formulas in this folder.

#### helpers/
As expected it contains helper classes, unlike `modifiers`, these helpers focus more on the function rather than the visual.

#### media/
It contains all the media queries and stylesheet for other media, such as print and for higher resolution screens. I wasn't sure what to name this folder, I don't think media is the best name for it. 

#### modules/
We all love Object Oriented CSS, right? This is where we get to put all those sweet modules we gather from across the webiverse! (?). I would recommend keeping the modules in their own files and then `@import` them into the `modules` stylesheet for easy management.

#### vendors/
Styles from plugins and third-party vendors. Also keep as separate files and `@import` into `vendors` stylesheet.

## Goodies

### Formulas
The boilerplate includes a few formulas (mixins) to help here and there. I plan to add more depending on which ones get used the most.

#### rem()
Developed by [GrowDigital](https://gist.github.com/growdigital/1778907). This formula returns 2 lines of code — regular pixel values and converted rem values.

```scss
// Mixin Syntax
@mixin rem($property, $value-in-px)

// Sample input:
.element { @include rem('padding',10px 0 2px 5px); }

// Sample output:
.element {
  padding: 10px 0 2px 5px;
  padding: 1rem 0 0.2rem 0.5rem; }
```

#### em()
An adaptation of [GrowDigital](https://gist.github.com/growdigital/1778907)'s mixin. This formula returns 1 line of code and is mainly used when setting `line-heights`.

```scss
// Mixin Syntax
@mixin em($property, $context-in-px, $value-in-px)

// Sample input:
.element { @include em('line-height', 24px); }

// Sample output:
.element { line-height: 1.5em; }
```

#### transition()
A VERY basic CSS3 transition mixin. Enter your values as desired and it will output the code with prefixes. 

```scss
// Mixin Syntax
@mixin transition($property: all, $duration: .5s, $timing: ease, $delay: null)

// Sample input:
.element { @include transition(all, 1s, ease); }

// Sample output:
.element {
    -webkit-transition: all 1s ease; 
       -moz-transition: all 1s ease; 
        -ms-transition: all 1s ease; 
         -o-transition: all 1s ease; 
            transition: all 1s ease; }
```

## Notes
_This project started as a full boilerplate which included a grid and module system. While I have not discarded this idea, it is not my current focus. I may add these features to Base12 as I work more on it, however I found myself customizing things too much for each project to the point that a single grid system wasn't the right approach to go, it creates limitations, limitations lead to work arounds, and these will in turn create bad code_. 