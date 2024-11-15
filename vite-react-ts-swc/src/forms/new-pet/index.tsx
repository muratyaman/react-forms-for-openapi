import Form from '@rjsf/antd';
import { RJSFSchema, UiSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

import openapi from '../../generated/openapi.json';

const schema: RJSFSchema = {
  ...openapi.components.schemas.NewPet,
  title: 'New Pet',
  description: 'Enter your pet details',
  components: {
    schemas: openapi.components.schemas,
  },
};

const uiSchema: UiSchema = {
  name: {
    'ui:autofocus': true,
    'ui:placeholder': 'Enter the pet name',
  },
  categoryId: {
    'ui:widget': 'select',
  },
  status: {
    'ui:widget': 'select',
  },
};

export function NewPetForm() {
  return (
    <div className='form new-pet-form'>
      <h2>New pet</h2>
      <Form schema={schema} uiSchema={uiSchema} validator={validator} />
    </div>
  );
}
