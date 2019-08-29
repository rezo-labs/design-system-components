# Icon

## Purpose

## Usage

### Basic usage



| **Props Name** | **Type**                     | **Description**                                              | Default |
| -------------- | ---------------------------- | ------------------------------------------------------------ | ------- |
| name           | `string`                     | icon name                                                    | -       |
| className      | `string`                     | change style of outer `svg`                                  |         |
| icon           | `React.ComponentType`        | Custom icon. This will override the `name` props and render your custom icon. | -       |
| viewBox        | `viewBox`                    |                                                              | -       |
| style          | `CSSProperties`              |                                                              | -       |
| width          | `string | number`            | The width of the `svg`                                       | 16px    |
| height         | `string | number`            | The height of the `svg`                                      | 16px    |
| onClick        | `React.MouseEventHandler`    | Handler when user click icon (mouse)                         | -       |
| onKeyUp        | `React.KeyboardEventHandler` | Handler when user click icon (keyboard)                      | -       |