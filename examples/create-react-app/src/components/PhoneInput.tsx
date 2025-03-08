import autoHyphen from 'auto-hyphen-utils';
import { Controller, useFormContext } from 'react-hook-form';

export const PhoneInput = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="hyphenPhone"
      control={control}
      render={({ field }) => {
        const phoneValue = autoHyphen.phoneNumber(field.value);

        return <input {...field} placeholder="전화번호 입력" value={phoneValue} />;
      }}
    />
  );
};
