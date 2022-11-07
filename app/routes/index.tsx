import Select from 'react-select';
import {SelectField} from '~/components';

export default function Index() {

  return (
    <div>
      <Select options={[{value: '123', label: 'hello'}]} />
      <SelectField label='hello' error={'!!!!!'} isMulti={true} options={[{value: '123', label: 'hello'}]} />
    </div>
  );
}
