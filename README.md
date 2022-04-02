# Storybook React UI Kit

## Description

Today's website UIs look night-and-day compared websites of the early days of the web. We no longer use stock HTML checkboxes or buttons but instead fluid and aesthetically pleasing UIs. As such, I spent time honing the fundamentals and nuances of advanced CSS to create modern web components.

Following the specifications of a freely available [Figma design file](<https://www.figma.com/file/BU3ZLYOevT6bl6zwdA6T22/Browk-UI-KIT-(Community)?node-id=2286%3A3026>), I implemented 20 unique modern UI components, such as checkboxes, toggles, and dropdown menus, with React and StorybookJS. Each component is fit with dynamic and responsive states, and many have access to different colored themes and simulate data handling via Storybook's actions addon. You can checkout the UI kit [here](https://storybook-react-ui-kit.netlify.app/)!

### Technologies

As mentioned above (and in the title), this project is created with React and [StorybookJS](https://storybook.js.org/). As my goal was to learn and practice how to make the individual components of a web application, as opposed to the web application itself, StorybookJS was a perfect fit, as it allows developers to develop, test, and document components in isolation. Also, this project was a nice excuse to get familiar with StorybookJS and Figma's workflow.

Instead of using base CSS, I opted to use[styled-components](https://styled-components.com/) for the added benefit of nesting CSS classes like in SCSS/SASS, the ability to pass state data and logic to components' styles, and the ability to easily create different themes for components. To handle passing [styled-component theming](https://styled-components.com/docs/advanced) to each story in Storybook, I used the Storybook addon [storybook-addon-styled-component-theme](https://storybook.js.org/addons/storybook-addon-styled-component-theme).

The production branch of the UI kit is hosted with [Netlify](https://www.netlify.com/) for viewing.

### Future Features

- Construct pages: I plan to aggregate the various components together into larger example page stories.
- Expand Theming: While initially I planned to strictly follow the Figma design file exactly, I ended up deciding to have some fun and create some alternative themes for components which did not have alternative themes in the design file. I plan to continue doing this until each component has at least 3 different themes to choose from.
- Implement more components: While I implemented 20 unique components, there are countless other modern-day web components we use day-to-day. I plan to add more components than was outlined in the design file, such as loading circles, chat windows, or navigation menus.

## How to run the project locally

1. Clone the GitHub repository

```bash
git clone https://github.com/Hamm-J/Storybook-React-UI-Kit.git
```

2. Enter the directory

```bash
cd Storybook-React-UI-Kit
```

3. Install dependencies

```bash
npm install
```

4. Run StorybookJS on localhost

```bash
npm run storybook
```

5. Open your browser to the localhost port provided by StorybookJS. Done!

## License

This project is licensed under the MIT License.
