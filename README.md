# Base12
_A simple framework focused on CSS and built around the number 12._

Frameworks are awesome, they can give you a huge headstart when building a new site, getting rid of a lot of the repetitive work and letting you focus on the fun stuff. However, there is no framework that fits every project, not even this one.

While working with other boilerplates such as the [_Twitter Bootstrap_](https://github.com/twbs/bootstrap/), I realized that they were too busy for __custom designs__. While they are great for quick prototyping of an app, and can certainly create entire websites in a snap, a custom design may need to break away from a lot of the patterns in the framework; often resulting in unnecessary code, work arounds, and bad practices. There is the other side of course, the [_HTML5 Boilerplate_](https://github.com/h5bp/html5-boilerplate/) was too basic, it often required the addition of basic styles which repeated across projects. _Base12_ sits at a middle ground where it has the basic elements but still leaves the playground open.

Another side of _Base12_, is how its measurements are built. They're all tied to the number 12. While this may not come naturally to everyone, due to our _decimal system_ I encourage you to give it a shot. After some research I realized that a _duodecimal system_ has a lot to offer when it comes to, not only creating grids but setting numbers across your design. Since 12 is divisible by 2, 3, 4, 6, and 12, it makes it very easy to get a wide variety of sub-measurements while keeping some rhythm in your design.

_Base12_ is not a replacement to the _HTML5 Boilerplate_, but a  layer to it. It is currently using the CSS in it so feel free to replace the entire `css` folder.

_Base12_ will continue to evolve as more common elements that should be added are found. In the meantime this is a good start.

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


    // Borders 
    $border:                1px solid #DADADA;
    $border-focus:          1px solid #C04620;


    // Table colors
    $table-bg:              transparent;
    $table-border:          none;

    $th-bg:                 transparent;
    $th-color:              $color-font-body;
    $th-border:             $border;

    $tr-odd:                transparent;
    $tr-even:               transparent;
    $tr-border:             $border;


    // Button colors
    $btn-primary:           #1B4781;
    $btn-primary-text:      #FBFBFB;

    $btn-hover:             #202020;
    $btn-hover-text:        #FBFBFB;

    $btn-active:            #C04620;
    $btn-active-text:       #FFFFFF;

    $btn-disabled:          #DADADA;
    $btn-disabled-text:     #EBEBEB;


    // Forms
    $field-bg:              #FBFBFB;
    $field-bg-focus:        #FFFFFF;

    $field-color:           #444444;
    $field-color-focus:     #202020;


    // Fonts
    $base-font-size:        12px;   // Preferably in pxs
    $base-line-height:      1.62em; // Preferably in ems


    // Headings - Define in pxs
    $fs-h1: 60px; 
    $lh-h1: 63px; 

    $fs-h2: 36px; 
    $lh-h2: 42px; 

    $fs-h3: 27px; 
    $lh-h3: 33px; 

    $fs-h4: 21px; 
    $lh-h4: 27px; 

    $fs-h5: 15px; 
    $lh-h5: 21px; 

    $fs-h6: 12px; 
    $lh-h6: 18px; 

    // p, ul, ol, etc  - Define in pxs
    $fs-body: 15px;
    $lh-body: 21px;

    // .lead, blockquote - Define in pxs
    $fs-body-accent: 18px;
    $lh-body-accent: 24px;

    // Default font weight when bold
    $font-weight-bold: 600;
```

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