const componentExists = require('./utils/componentExists');
const pageExists = require('./utils/pageExists');

module.exports = function newFile(plop) {
  plop.setGenerator('Atom', {
    description: 'Creates a piece of global state (a.k.a atom)',
    prompts: [
      {
        type: 'input',
        name: 'atomName',
        message: 'Enter the name of the atom: ',
        validate: (value) => {
          if (/.+/.test(value)) {
            return componentExists(value)
              ? 'An atom with this name already exists'
              : true;
          }

          return 'The name is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../atoms/{{camelCase atomName}}State/index.ts',
        templateFile: 'utils/plop-templates/atom-template.hbs',
      },
      {
        type: 'append',
        path: '../atoms/index.ts',
        templateFile: 'utils/plop-templates/atom-export.hbs',
      },
    ],
  });
  plop.setGenerator('Component', {
    description: 'Creates a new component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter the component name: ',
        validate: (value) => {
          if (/.+/.test(value)) {
            return componentExists(value)
              ? 'A component with this name already exists'
              : true;
          }

          return 'The name is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../components/{{pascalCase componentName}}/index.tsx',
        templateFile: 'utils/plop-templates/component-template.hbs',
      },
      {
        type: 'add',
        path: `../components/{{pascalCase componentName}}/{{ pascalCase componentName }}.module.scss`,
        templateFile: 'utils/plop-templates/component-styles.hbs',
      },
      {
        type: 'add',
        path: `../components/{{pascalCase componentName}}/types.ts`,
        templateFile: 'utils/plop-templates/component-types-template.hbs',
      },
    ],
  });
  plop.setGenerator('Page', {
    description: 'Creates a new page',
    prompts: [
      {
        type: 'input',
        name: 'pageRoute',
        message: 'Enter the page route: ',
        validate: (value) => {
          if (/.+/.test(value)) {
            return pageExists(value)
              ? 'A page with this route already exists'
              : true;
          }

          return 'The route is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../pages/{{pathCase pageRoute}}/index.tsx',
        templateFile: 'utils/plop-templates/page-template.hbs',
      },
      {
        type: 'add',
        path: `../pages/{{pathCase pageRoute}}/{{ pascalCase pageRoute }}Page.module.scss`,
        templateFile: 'utils/plop-templates/page-styles.hbs',
      },
    ],
  });
  plop.setGenerator('Selector', {
    description: 'Creates a new selector (kind of an atom wrapper)',
    prompts: [
      {
        type: 'input',
        name: 'selectorName',
        message: 'Enter the selector name: ',
        validate: (value) => {
          if (/.+/.test(value)) {
            return componentExists(value)
              ? 'A selector with this name already exists'
              : true;
          }

          return 'The name is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../selectors/{{camelCase selectorName}}/index.ts',
        templateFile: 'utils/plop-templates/selector-template.hbs',
      },
      {
        type: 'append',
        path: '../selectors/index.ts',
        templateFile: 'utils/plop-templates/selector-export.hbs',
      },
    ],
  });
  plop.setGenerator('Utility', {
    description: 'Creates a new file in utils/ folder',
    prompts: [
      {
        type: 'input',
        name: 'utilityName',
        message: 'Enter the utility name: ',
        validate: (value) => {
          if (/.+/.test(value)) {
            return componentExists(value)
              ? 'A selector with this name already exists'
              : true;
          }

          return 'The name is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../utils/{{camelCase utilityName}}.ts',
        templateFile: 'utils/plop-templates/utility-template.hbs',
      },
      {
        type: 'append',
        path: '../utils/index.ts',
        templateFile: 'utils/plop-templates/utility-export.hbs',
      },
    ],
  });
};
