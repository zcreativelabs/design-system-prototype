---
title: "Paragraph"
slug: "/packages/paragraph"
---

# Paragraphs

The paragraph component is a simple wrapper around the p-tag and is used for text blocks.

To get started with paragraphs import a paragraph:

```js
import { P } from "@design-system/typography"
```

There is not that much more to say about paragraphs, hence they should probably be documented together with other typography components. This is easy to do here, since we can easily bundle typography into one documentation item.

Next, have a look at this over-engineered example of how to use a paragraph.

```jsx
class SampleComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }
  componentDidMount() {
    this.setState({
      count: 1,
    })
  }
  render() {
    return (
      <P className="something">
        { "This is an incredibly over-engineered example of a paragraph." }
      </P>
    )
  }
}
```

Interactive playground examples are only added for code blocks with a `.jsx` prefix. Other code examples are rendered as simple code examples (see the import statement above).
