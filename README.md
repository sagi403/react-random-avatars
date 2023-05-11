# React Random Avatars

React Random Avatars is a simple and easy-to-use React component that generates random avatars based on a provided name for your application. The generated avatar is unique and consistent for each name, which makes it suitable for user profile images or any other use case where a visual representation of a name is needed.

<p align="center">
    <img width="800px" align="center" src="https://user-images.githubusercontent.com/95089762/232099917-d5c3e355-41bd-44a0-831b-62eb54a7b41f.JPG" title="React random avatars preview" />
</p>

## Installation

You can install the React Random Avatars component using npm:

```bash
npm install react-random-avatars
```

## Usage

Here's a quick example of how to use the `RandomAvatar` component in your React application:

```javascript
import { RandomAvatar } from "react-random-avatars";

function App({ name }) {
  return (
    <div>
      <RandomAvatar name={name} size={40} />
    </div>
  );
}

export default App;
```

### Props

| Prop    | Type                                      | Default        | Description                                               |
| ------- | ----------------------------------------- | -------------- | --------------------------------------------------------- |
| name    | string                                    | "Default Name" | The input string used to differentiate the avatars        |
| size    | number                                    | 40             | The size of the avatar in pixels (width & height)         |
| square  | boolean                                   | false          | If true, the avatar shape will be square                  |
| mode    | string                                    | "random"       | The avatar mode: "random", "pattern", or "colors"         |
| pattern | array                                     | -              | A 2D array of colors representing the custom avatar pattern (Required if mode is "pattern") |

### Avatar Modes

#### Random Avatar Mode (default)

This mode generates a random avatar based on the provided name. Each avatar is unique and consistent for each name.

<p align="center">
    <img width="800px" align="center" src="https://user-images.githubusercontent.com/95089762/234231119-0806b4ea-a4df-40c7-b9d6-afcef2e7db64.JPG" title="Random Avatar Example" />

#### Pattern Avatar Mode
    
This mode allows you to provide your own custom pattern to create an avatar. The pattern is a 2D array of colors representing the avatar's design. 
When selecting this mode, you must also provide a value for the `pattern` prop.

<p align="center">
    <img width="800px" align="center" src="https://user-images.githubusercontent.com/95089762/234231999-925d5958-c111-488d-b62f-58c8e5785e3e.JPG" title="Pattern Avatar Example" />
    
#### Colors Avatar Mode
    
This mode generates an avatar using a color blend based on the provided name. It creates a radial gradient with different colors to represent the name.

<p align="center">
    <img width="800px" align="center" src="https://user-images.githubusercontent.com/95089762/234233340-2a100f9d-a197-4ef2-ac6e-6c5ffb12c7a3.JPG" title="Colors Avatar Example" />

## Contributing

Contributions are welcome! If you'd like to contribute and help the community grows, please follow these steps:

<p align="center">
  <a href="https://www.createrandomavatar.com/">
    <img width="700px" align="center" src="https://user-images.githubusercontent.com/95089762/232052679-8bc566e3-e1ad-4e3b-9d56-a730294dd6b1.JPG" title="Create Random Avatars" />
  </a>
</p>

<p align="center">
  <a href="https://www.createrandomavatar.com/">createrandomavatar.com</a>
</p>

How to insert an avatar?

1. Fork the repository;
2. Build your custom, amazing avatar using [this tool](https://www.createrandomavatar.com);
3. Create a file with a custom name, [here](https://github.com/sagi403/react-random-avatars/tree/master/src/insertYourAvatarHere);
4. Insert the file in the index, [here](https://github.com/sagi403/react-random-avatars/blob/master/src/insertYourAvatarHere/index.ts);
5. Open a pull request, don't you know how to do it? [Read this](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request);

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/sagiproject"><img src="https://avatars.githubusercontent.com/u/92861685?v=4?s=100" width="100px;" alt="sagiproject"/><br /><sub><b>sagiproject</b></sub></a><br /><a href="https://github.com/sagi403/react-random-avatars/commits?author=sagiproject" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

## License

React Random Avatars is released under the [MIT License](LICENSE).
