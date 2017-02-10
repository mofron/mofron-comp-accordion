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
| add                   | string : header title<br>object : Component           | add contents  |
| remove             | number : contents index                                           | disabled target contents  |
| changeEvent   | function : function for change event  |set change event function |
| state                 | number : contents index                                               | state of target contents <br>  true : target contents is open<br>  false : target contents is closed|

