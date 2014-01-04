# [Base12](http://cballenar.github.io/base12/)
__A SCSS framework built around 12__

## Huh... ?
Base12 is a framework that provides you with a basic SCSS folder structure for your projects. Its measurements are built around the number 12 for increased flexibility & math goodies.

### How do I use it?

#### Standalone
1. Download or clone Base12
2. Fire up `grunt`
3. Code away!

#### Base12 + H5BP
1. Start a new project with the [Classic H5BP](http://www.initializr.com/)
2. Replace the `css` folder with Base12's
3. Tweak your preprocessor
4. Code away!

## Base12, A Different Approach to Numbers
The most important aspect of Base12 is that it's measurements are based on the number 12. Because 12 has a wide range of divisors (1, 2, 3, 4, 6 & 12), it makes it very easy to get a wide variety of sub-measurements while keeping some rhythm in your design.

In this aspect, Base12 is more of a design philosophy. By using multiples/divisors of 12 across our design, we ensure that our numbers are not random but follow some rules. This can make a huge difference when thinking in terms of a baseline and vertical rhythm.

 - Source: [https://github.com/cballenar/base12](https://github.com/cballenar/base12)
 - Homepage: [http://cballenar.github.io/base12/](http://cballenar.github.io/base12/)

## Customizing Base12
The boilerplate allows you to do some basic customizations through the `_defaults.scss` file. In here you will find variables for common styles such as type color, background, border, font sizes for headings and paragraphs, etc.

```scss
/* Author Variables
------------------------------------------------------------------------------------ */
$primary-color:             #BADA55;
$accent-color:              #DE1E7E;
// etc...


/* Switches
------------------------------------------------------------------------------------ */
// Browser support
$rem-to-px-fallback:        false; // Adds px fallback to properties that use the rem() mixin
$rgba-to-hex-fallback:      false; // Adds hex fallback to properties that usem the alpha-me() mixin

// Universal Styles (Use with caution!)
$universal-word-break:      false; // adds * { word-break: break-all; word-break: break-word; hyphens: auto; } 
$universal-bg-no-repeat:    false; // adds * { background: no-repeat; }
$universal-relativity:      false; // adds * { position: relative; }
$universal-middle-align:    false; // adds * { vertical-align: middle; }
$universal-border-box:      false; // adds * { box-sizing: border-box; }

// Basic Styles
$basic-blockquotes:         true;
$basic-tables:              true;
$basic-forms:               true;
$basic-buttons:             true;
$basic-code:                true;

// Debugging
$debug-mode:                false;


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
|   |- main.min.css
|   |- scss/
|   |   |- main.scss
|   |   |- _defaults.scss
|   |   |- base12/
|   |   |- design/
|   |   |- generic/
|   |   |- objects/
|   |   |- vendors/
```
#### main.min.css
Compressed output file.

#### main.scss
Here you can find and add all your partials.

#### _defaults.scss
Defaults is the file where you will customize and define the variables used in Base12. This stylesheet can also be used to host your own variables as well.

#### base12/
These files should remain untouched for easier updating of Base12. This folder contains all the basic styles which include styles from [normalize.css](http://necolas.github.io/normalize.css/) and the H5BP. So it's an all-in-one reset & basic styler. 
This folder also contains a formulas folder for a few useful mixins.

#### design/
Used to store the main styles of your site. It contains three files `design`, `print`, and `screens`. 

#### objects/
Used to store the objects and modules of your site. 

#### vendors/
Third-party vendor stylesheets can be copied into this folder and then linked via the `vendors` stylesheet or directly through the `main` file for quicker access.


## Goodies

### Grunt
__Hooray!__ Base12 is now automated via grunt. So far it's running very simple steps but there'll be more in the future.

 - It includes [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer), a great little tool which looks at your code and adds prefixes as needed based on data from [caniuse.com](http://caniuse.com)
 - Run `grunt` for the default action which will:
 	- Compile and auto-prefix your CSS
 	- Copy the minified css to the `dist` folder
 	- Start the server and
 	- Watch for future changes


### Switches
Turn features on/off according to your preferences. At the moment the features available to switch on/off are:

 - REM to PX fallback
 - RGBa to HEX fallback
 - Animate all links
 - Universal `word-break`
 - Universal NO `background-repeat`
 - Universal relativity `position: relative`
 - Universal `vertical-align: middle`
 - Universal `box-sizing: border-box`
 - Basic styles (Removes opinionated styles, not reset styles)
 - Debugging Mode

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

#### alpha-me()
This mixin takes up to 4 arguments, a minimum of two. It will return two lines of code, one with a HEX value and the other with the RGBa value.

```scss
// Sample input
.element { 
	@include alpha-me( color, rgba(black,.5) );

	@include alpha-me( background-color, rgba(#dffa14,.5), #529ef0);

	@include alpha-me( box-shadow, 1px 1px 2px, rgba(white, .25));

	@include alpha-me( border, 3px solid, rgba(240,20,200,.5), #DADADA); }

// Sample output:
.element { 
	color: #7F7F7F;
	color: rgba(0, 0, 0, 0.5);

	background-color: #98CC82;
	background-color: rgba(223, 250, 20, 0.5);

	box-shadow: 1px 1px 2px #FFF;
	box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.25);

	border: 3px solid #E577D1;
	border: 3px solid rgba(240, 20, 200, 0.5); }
```

## Notes
_This project started as a full boilerplate which included a grid and module system. While I have not discarded this idea, it is not my current focus. I may add these features to Base12 as I work more on it, however I found myself customizing things too much for each project to the point that a single grid system wasn't the right approach to go, it creates limitations, limitations lead to work arounds, and these will in turn create a bad product._