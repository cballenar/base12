# [Base12](http://cballenar.github.io/base12/)
__A SCSS framework built around 12__

## Huh... ?
Base12 is a framework that provides you with a basic SCSS folder structure for your projects. Its measurements are built around the number 12 for increased flexibility & math goodies.

Because Base12 uses the starting CSS from the [_HTML5 Boilerplate_](https://github.com/h5bp/html5-boilerplate/), it can be used in combination with it.

### How do I use it?
1. Start a new project with the [Classic H5BP](http://www.initializr.com/)
2. Replace the `css` folder with Base12's
3. Setup your preprocessor to compile `main.scss`
4. Code away!

## Base12, A Different Approach to Numbers
The most important aspect of Base12 is that it's measurements are based on the number 12. Because 12 has a wide range of divisors (1, 2, 3, 4, 6 & 12), it makes it very easy to get a wide variety of sub-measurements while keeping some rhythm in your design.

In this aspect, Base12 is more of a design philosophy. By using multiples/divisors of 12 across our design, we ensure that our numbers are not random but follow some rules. This can make a huge difference when thinking in terms of a baseline and vertical rhythm.

 - Source: [https://github.com/cballenar/base12](https://github.com/cballenar/base12)
 - Homepage: [http://cballenar.github.io/base12/](http://cballenar.github.io/base12/)

## Customizing Base12
The boilerplate allows you to do some basic and, I must admit, not so polished customizations. 
This is done through the `_variables.scss` file. In here you will find variables for common styles such as type color, background, border, font sizes for headings and paragraphs, etc.

```scss
/*  Variables
==================================================================================== */

/* Switches - turn features on/off
------------------------------------------------------------------------------------ */
$box-sizing-for-all:        true;  // add *{box-sizing:border-box} prefixed
$rem-to-px-fallback:        false; // create px fallback for rem() formula

// Styled elements
$style-blockquotes:         true;
$style-tables:              true;
$style-forms:               true;
$style-buttons:             true;
$style-code:                true;

/* Type - use pixels for font-size & line-height
------------------------------------------------------------------------------------ */
// Base
$base-font-size:            12px;   // Preferably in pxs
$base-line-height:          1.62em; // Preferably in ems

// Font families
$font-heading:              'Helvetica', sans-serif;
$font-body-copy:            'Times New Roman', Times, serif;
$font-monospace:            'Consolas', 'Courier New', monospace;

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
|   |   |- vendors/
```
#### main.css
Compressed output file.

#### main.scss
Here you can find and add all your partials.

#### base/
The base folder contains the `variables`, `base` and `normalize` stylesheets. [Normalize](http://necolas.github.io/normalize.css/) is the reset sheet. Variables is the file where you will customize Base12. Base is the primary file in Base12, this is where most variables end up in and defines most basic styles. Ideally these files will remain untouched unless a new release comes out.

#### design/
It contains three files `design`, `grid`, and `modules`. 

##### _design.scss 
As you can imagine, this is where all the styles that define the layout and design of the site are located.

##### _modules.scss 
Modules includes _element modifiers_ and _objects/modules_. Modifiers are simple classes that change core elements, this includes things such as `p.lead` or `img.img-circle`. Objects and Modules are more complex, e.g., `.media`, `.callout`, etc. There are no modules included as these tend to be more tailored to the design and architecture of the site.

##### _grid.scss 
Created specifically to host the grid system of your choosing. This file can end up empty if you decide to keep your grid tied to your `design` file.

#### formulas/
Contains mixins and formulas used in Base12, users should keep their own formulas in this folder.

#### helpers/
As expected it contains helper classes, unlike `modifiers`, these helpers focus more on the function rather than the visual.

#### media/
It contains all the media queries and stylesheet for other media, such as print and for higher resolution screens. I wasn't sure what to name this folder, I don't think media is the best name for it. 

#### vendors/
Styles from plugins and third-party vendors. Also keep as separate files and `@import` into `vendors` stylesheet.

## Goodies

### Switches
Turn features on/off according to your preferences. At the moment the features available to switch on/off are:

 - REM to PX fallback
 - Universal `box-sizing: border-box`
 - Universal NO `background-repeat`
 - Universal relativity `position: relative`
 - Styled blockquotes
 - Styled tables
 - Styled forms
 - Styled buttons
 - Styled code

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