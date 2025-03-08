import { FormProvider, useForm } from 'react-hook-form';
import { CommonInput } from './CommonInput';
import { PhoneInput } from './PhoneInput';
import { TinInput } from './TinInput';

interface IHyphenInputGroup {
  commonHyphen: string;
  hyphenPhone: string;
  hyphenTin: string;
}

export default function HyphenInputGroup() {
  const methods = useForm<IHyphenInputGroup>({
    mode: 'onChange',
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: IHyphenInputGroup) => {
    window.alert(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <CommonInput />
          <PhoneInput />
          <TinInput />
          <button type="submit">Submit</button>
        </div>
      </form>
    </FormProvider>
  );
}
