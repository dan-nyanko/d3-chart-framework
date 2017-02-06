# d3-chart-framework [![CircleCI](https://circleci.com/gh/dan-nyanko/d3-chart-framework.svg?style=svg)](https://circleci.com/gh/dan-nyanko/d3-chart-framework)
Provides an extensible, reusable approach to building charts with [D3js.org](https://d3js.org/)


## TODO
 - Add Bar chart
 - Finish API documentation
 - Eliminate external dependencies
 - Evaluate performance `.enter()`, `.exit()` workflow for `data.length === 1`
 - Axes should support negative values
 - More integration examples with server-side frameworks
 - Write tests, good starting point would be the merge operation


## Example of ScatterPlot with rectangle nodes

TODO: Link a screenshot
``
See a live example of the react-meteor application on heroku:
[chart-framework-app](https://chart-framework-app.herokuapp.com/)


## Installation
```
npm install d3-chart-framework
```


## API
TODO: build API documentation from [jsDoc3](https://github.com/jsdoc3/jsdoc) and link to this README

See [documentation wiki](wiki/)


## Integration Examples
I have provided an example of using `d3-chart-framework` with meteor and react. This is a very powerful framework combination and is very easy to get working out-of-the-box. However, meteor does require MongoDB and this may or may not work for you. See [react-meteor](examples/react-meteor/README.md)

As an alternative, you may use `webpack`, `browserify`, or even `<script>` tags combined with any server-side framework of your choosing, such as [django](https://www.djangoproject.com/), [ruby on rails](http://rubyonrails.org/), or [hapi](https://hapijs.com/).


## Why use `d3-chart-framework`?
D3js is a powerful library for visualizing data with SVG, Canvas, and HTML. There are many [examples](http://bl.ocks.org/mbostock), but each one is intended for a single use. They are inspiring, but building something that is maintainable usually involves creating a framework, to keep our code extensible and reusable. The concept of reusability has been discussed by [others](https://bocoup.com/weblog/reusability-with-d3), including the [author](https://bost.ocks.org/mike/chart/) of D3js.

This framework utilizes an object oriented approach, which at its core, promotes breaking code into smaller, isolated classes. As with any programming paradigm, there can always be the chance of 'too much of a good thing' and object oriented programming is no different. Therefore, `d3-chart-framework` has the following goals:

  - KISS, avoid creating too many OOP layers
  - Use existing D3js workflow patterns `.enter()` and `.exit()`
  - Its OK to mix functional and object oriented programming
  - Performance should not be an afterthought
  - Maintain a well-documented API

Hopefully, this answers the why to `d3-chart-framework` and you begin to use it for your own charting visualizations!


## Hows does it work?
The main idea behind `d3-chart-framework` is to create *detached* `Node` class(es), which are an SVG group that are not immediately attached to the DOM. The key word here is *detached*. This simple, yet effective method allows for custom, *reusable*, *extendable* `Node` classes that utilize the D3js [workflow](https://github.com/d3/d3-selection/blob/master/README.md#joining-data).

A `Node` can be any visualization, for example, a single 'circle' SVG element or a more sophisticated group of SVG elements, such as a line segment that contains two circles for the start and end points, connected by a 'line', such as the `[SegmentNode](/examples/shared/nodes/SegmentNode.js)`.

Therefore to utilize `d3-chart-framework`, one only has to create one or more custom nodes and provide them to a Chart or Plot.

To further illustrate this concept, view the example of a `[RectNode](examples/shared/RectNode.js)` that display a rectangular marker on a `ScatterPlot`.


## Dependencies
TODO: eliminate external dependencies

The current external dependencies are:

  - [d3](https://github.com/d3/d3)
  - [underscore](https://github.com/jashkenas/underscore)
  - [moment](https://github.com/moment/moment)
