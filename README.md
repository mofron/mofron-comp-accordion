#   mofron-comp-accordion
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

 accordion component for mofron

## Attention
 - it needs to height parameter for enabling animation speed.

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

<Accordion speed=500 title="accordion title" height=0.5rem>
    <Text>accordion contents</Text>
</Accordion>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | title | mixed | string: title string |
| | | | component: title component |
| | text | mixed | sama as the title parameter |
| | height | string (size) | accordion height |
| | | key-value | style option |
| | folding | boolean | true: folding accordion component |
| | | | false: unfolding accordion component |
| | speed | number | folding speed [ms] |
| | changeEvent | function | change event function |
| | | mixed | function parameter |

