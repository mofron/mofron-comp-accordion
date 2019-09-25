#   mofron-comp-accordion
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

 accordion component for mofron


# Install
```
npm install mofron   mofron-comp-accordion
```

# Sample
```html
<require>
    <tag module="mofron-comp-accordion">Accordion</tag>
    <tag module="mofron-comp-text">Text</tag>
</require>

<Accordion speed=500 title="accordion">
    <Text>test accordion</Text>
</Accordion>
```
# Parameter

|Simple<br>Param | Parameter Name | Type | Description |
|:--------------:|:---------------|:-----|:------------|
| ◯  | title | component | title component |
| | height | string (size) | accordion height |
| | speed | number | folding speed |
| | changeEvent | function | change event function |
| | | mixed | function parameter |

