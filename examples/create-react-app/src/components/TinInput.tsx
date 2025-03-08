import autoHyphen from 'auto-hyphen-utils';
import { Controller, useFormContext } from 'react-hook-form';

export const TinInput = () => {
  const { control } = useFormContext();
  return (
    <Controller
      name="hyphenTin"
      control={control}
      render={({ field }) => {
        const tinValue = autoHyphen.tinNumber(field.value);

        return (
          <input
            {...field}
            placeholder="사업자번호 입력"
            value={tinValue}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        );
      }}
    />
  );
};
