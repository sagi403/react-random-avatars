# React Random Avatars

React Random Avatars is a simple and easy-to-use React component that generates random avatars based on a provided name for your application. The generated avatar is unique and consistent for each name, which makes it suitable for user profile images or any other use case where a visual representation of a name is needed.

## Installation

You can install the React Random Avatars component using npm:

```bash
npm install react-random-avatars
```
## Usage

Here's a quick example of how to use the `RandomAvatar` component in your React application:

```javascript
import { RandomAvatar } from 'react-random-avatars';

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

| Prop     | Type      | Default        | Description                                        |
|----------|-----------|----------------|----------------------------------------------------|
| name     | string    | "Default Name" | The input string used to differentiate the avatars |
| size     | number    | 40             | The size of the avatar in pixels (width & height)  |
| square   | boolean   | false          | If true, the avatar shape will be square           |

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

## License

React Random Avatars is released under the [MIT License](LICENSE).
