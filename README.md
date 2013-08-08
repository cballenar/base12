# Base12
_A simple boilerplate focused on CSS and built around the number 12._

This boilerplate was built for internal use as I had settled on a group of patterns. I felt that other boilerplates such as the Twitter Bootstrap were too busy for custom designs, I often ended up with code I didn't need; and I often ended up doing a lot of additions to the HTML5 Boilerplate. I feel that this is a good in between point. 
I will continue to evolve Base12 as I find more common elements that I think need to be added. In the meantime this is a good start.

## Customizing Base12
The boilerplate allows you to do some basic and, I must admit, not so polished customizations. 
This is done through the base12 file located at:
`_assets\css\scss\base12\_base12.scss`
In here you will find variables for common elements such as type color, background, border, font sizes for headings and paragraphs, etc.

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
An adaptation of [GrowDigital](https://gist.github.com/growdigital/1778907)'s mixin. This formula returns 1 lines of code and is mainly built for `line-height`s.

```scss
// Mixin Syntax
@mixin em($property, $context-in-px, $value-in-px)

// Sample input:
.element { @include em('line-height', 24px); }

// Sample output:
.element { line-height: 1.5em; }
```

#### transition()
A very basic CSS3 transition mixin. Enter your values as desired and it will output the code with prefixes. 

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

##Notes
This project started as a full boilerplate which included a grid and module system. While I have not discarded this idea, it is not my current focus. I may add these features to Base12 as I work more on it, however I found myself customizing things too much for each project to the point that a single boilerplate wasn't the right approach to go, it creates limitations and these will in turn create bad code. 