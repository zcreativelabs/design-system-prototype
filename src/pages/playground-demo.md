
import SEO from "../components/Seo"
import { Link } from "gatsby"

<SEO title="Extra" keywords={["gatsby", "application", "react"]} />

# Just use markdown and mdx

Since you can use `.md` files for component documentation, you can make sure that documentation is written only once for both the styleguide website, as well as the github repo.

Here is an interactive code demo using the `<Button />` component.

```jsx
<Button>Button</Button>
```

You can also make more elaborate examples with state, such as the counter below.

```jsx
class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({ count: state.count + 1 }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <center>
        <h3>
          {this.state.count}
        </h3>
      </center>
    )
  }
}
```

Generally, documentation can be simplified this way. Since this is Gatsby, we can also use a page generator to add component props and all the other boilerplate automatically (check out the button component for an example).
