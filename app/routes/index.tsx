import Select from 'react-select';
import {SelectField} from '~/components';
import {useId} from 'react';

export default function Index() {

  return (
    <div className={'prose'}>
      <Select options={[{value: '123', label: 'hello'}]} inputId={useId()} instanceId={useId()} />
      <SelectField label='hello' error={'!!!!!'} isMulti={true} options={[{value: '123', label: 'hello'}]} />
    </div>
  );
}
