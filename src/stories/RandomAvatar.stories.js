import { storiesOf } from "@storybook/react";
import { RandomAvatar } from "../components/RandomAvatar";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return <RandomAvatar />;
});
