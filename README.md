# mofron-comp-accordion
Accordion WebUI Component for mofron

# Install

```bash
npm install --save-dev mofron
```

# Quick Start
require webpack

```html
<html>
    <head></head>
    <body style="margin:0px;padding:0px;"></body>
    <script src='./path/to/webpack/output.js'></script>
</html>
```

example
```javascript
require("mofron");
require("mofron-comp-accordion");

var acd = new mofron.comp.Accordion();

acd.add('Header 1', new mofron.comp.Text('Test Contents 1'));
acd.add('Header 2', new mofron.comp.Text('Test Contents 2'));
acd.add('Header 3', new mofron.comp.Text('Test Contents 3'));

acd.visible(true);
```

#class specification

| Method            | Parameter                                                                    |    Description                  |
|:------------------|:-----------------------------------------------------------------|:-------------------------------|
| add               | string : header title<br>           | button color getter/setter. <br>(for getter, do not specify parameters)  |
| changeEvent       | function : function for click event listener<br>mixed : function parameter (option)       |set button click event |
| add               | object : color                                               | button color getter/setter. <br>(for getter, do not specify parameters)  |

