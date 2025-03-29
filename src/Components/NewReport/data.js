export const COMPONENTS = {
  radioGroup: 'radio-group',
  input: 'input',
  locationSelect: 'location-select',
  select: 'select',
};

export const NEW_REPORT = [
  {
    component: COMPONENTS.radioGroup,
    name: 'status',
    options: [
      { label: 'Lost', value: 'lost' },
      { label: 'Found', value: 'found' },
    ],
  },
  {
    component: COMPONENTS.locationSelect,
    name: 'location',
    label: 'Nearest Address Last Seen',
    placeholder: 'Search location',
    required: true,
  },
  {
    component: COMPONENTS.input,
    type: 'email',
    name: 'email',
    label: 'Email address',
    placeholder: 'Enter email',
    required: true,
  },
  {
    component: COMPONENTS.input,
    type: 'text',
    name: 'name',
    label: 'Pet Name',
    placeholder: 'Enter pet name',
  },
  {
    component: COMPONENTS.input,
    type: 'text',
    name: 'breed',
    label: 'Pet Breed',
    placeholder: 'Enter pet breed',
  },
  {
    component: COMPONENTS.select,
    name: 'size',
    label: 'Pet size',
    placeholder: 'Select pet size',
    options: [
      { value: 'small', label: 'Small' },
      { value: 'medium', label: 'Medium' },
      { value: 'large', label: 'Large' },
      { value: 'extra large', label: 'Extra Large' },
    ],
  },
  {
    component: COMPONENTS.select,
    name: 'gender',
    label: 'Pet gender',
    placeholder: 'Select pet gender',
    options: [
      { value: 'female', label: 'Female' },
      { value: 'male', label: 'Male' },
    ],
  },
  {
    component: COMPONENTS.select,
    name: 'specie',
    label: 'Pet specie',
    placeholder: 'Select pet specie',
    required: true,
    options: [
      { value: 'cat', label: 'Cat' },
      { value: 'dog', label: 'Dog' },
      { value: 'other', label: 'Other' },
    ],
  },
];
