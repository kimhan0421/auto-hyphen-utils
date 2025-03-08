import autoHyphen from 'auto-hyphen-utils';
import { Controller, useFormContext } from 'react-hook-form';

export const CommonInput = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="commonHyphen"
      control={control}
      render={({ field }) => {
        const commonValue = autoHyphen.common(field.value, [1, 9]);

        return <input {...field} placeholder="1,9자로 하이픈이 생김" value={commonValue} />;
      }}
    />
  );
};
