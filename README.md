# @types/wordpress__customize-browser

TypeScript definitions for the WordPress Customize Browser API.

> **Note:** This is a modified version of the original TypeScript definitions created by [Marek Dědič](https://github.com/marekdedic) from the [DefinitelyTyped repository](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/wordpress__customize-browser).

## Installation

```bash
npm install --save-dev ultrafastcloud/wordpress__customize-browser
```

Or add to your `package.json`:

```json
"devDependencies": {
  "@types/wordpress__customize-browser": "github:ultrafastcloud/wordpress__customize-browser"
}
```

## Description

This package provides TypeScript type definitions for the WordPress Customize Browser API (`@wordpress/customize-browser`), which is part of the WordPress Customizer interface. These type definitions enable TypeScript developers to work with the WordPress Customizer API with proper type checking and autocompletion.

The WordPress Customizer API allows developers to create custom controls, sections, and panels in the WordPress Customizer interface, as well as interact with the preview iframe.

## Usage Examples

### Basic Usage

```typescript
// Access the customize object
const customize = wp.customize;

// Create a new setting
customize.create('my_setting', 'default value', {
  id: 'my_setting'
});

// Get a setting
const setting = customize('my_setting');
if (setting) {
  // Update the setting value
  setting.set('new value');
}
```

### Working with the Preview

```typescript
// In the preview iframe
wp.customize.preview.bind('ready', function() {
  // The preview is ready
  console.log('Preview is ready');
});

// Bind to custom events
wp.customize.preview.bind('custom_event', function(data) {
  // Handle the custom event
  console.log('Custom event received:', data);
});

// With multiple arguments
wp.customize.preview.bind('complex_event', function(data, moreData) {
  console.log('Received data:', data, moreData);
});
```

## Project Structure

The package includes TypeScript definitions for various components of the WordPress Customize API:

- `Customize.d.ts` - Main customizer interface
- `Control.d.ts` - Base control class and interfaces
- `Panel.d.ts` - Panel interfaces
- `Section.d.ts` - Section interfaces
- `Setting.d.ts` - Setting interfaces
- `Preview.d.ts` - Preview interfaces
- `Previewer.d.ts` - Previewer interfaces
- And many more specialized controls and components

## WordPress Customize API

The WordPress Customize API is used to create and manage the WordPress Customizer interface. It provides a framework for creating settings, controls, panels, and sections, as well as handling the preview iframe.

For more information about the WordPress Customize API, see:
- [WordPress Developer Documentation](https://developer.wordpress.org/themes/customize-api/)
- [WordPress Core Source Code](https://core.trac.wordpress.org/browser/trunk/src/js/_enqueues/wp/customize)

## Details

Files were exported from [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/wordpress__customize-browser).

### Additional Details
* Dependencies: [@types/jquery](https://npmjs.com/package/@types/jquery)

## Development

To contribute to this package:

1. Fork the repository
2. Make your changes
3. Run tests (if available)
4. Submit a pull request

## License

MIT

## Credits

The original definitions were written by [Marek Dědič](https://github.com/marekdedic) as part of the [DefinitelyTyped project](https://github.com/DefinitelyTyped/DefinitelyTyped) and have been modified in this repository.
