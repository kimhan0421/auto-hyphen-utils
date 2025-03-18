# auto-hyphen-utils

[![NPM Version](https://img.shields.io/npm/v/auto-hyphen-utils)](https://www.npmjs.com/package/auto-hyphen-utils)
[![License](https://img.shields.io/npm/l/auto-hyphen-utils)](https://github.com/kimhan0421/auto-hyphen-utils/blob/main/LICENSE)
[![Build Status](https://github.com/kimhan0421/auto-hyphen-utils/actions/workflows/release.yml/badge.svg)](https://github.com/kimhan0421/auto-hyphen-utils/actions)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/auto-hyphen-utils)](https://bundlephobia.com/package/auto-hyphen-utils)
![Downloads](https://img.shields.io/npm/dm/auto-hyphen-utils?color=green)

> ✨ **입력값을 자동으로 하이픈 처리하는 JavaScript 유틸리티 라이브러리** <br/>
> 전화번호, 주민등록번호, 사업자등록번호 등 다양한 입력값을 자동으로 변환할 수 있습니다.

---

## ⚡ Lightweight & High Performance
>
> 🚀 고성능 및 저용량으로 최적화된 유틸리티 라이브러리입니다.

- 가볍고 빠름: 패키지 크기가 작아 성능에 영향을 주지 않음
- Zero Dependencies: 외부 의존성이 없어 유지보수가 쉬움
- 정규 표현식 기반 최적화: 빠르고 안정적인 하이픈 변환 가능

## 👋🏻 Installation

```sh
npm install auto-hyphen-utils
```

```sh
yarn add auto-hyphen-utils
```

```sh
pnpm add auto-hyphen-utils
```

## 🎯 Usage

### 📖 utils

```sh
- 특정 패턴을 지정해 하이픈을 넣어줘요
autoHyphen.common(value: string, pattern: number[])
console.log(autoHyphen.common("1234567890")); // "1234567890"
console.log(autoHyphen.common("1234567890", [3, 6])); // "123-456-7890"

⸻

- 한국 전화번호(휴대폰 및 유선전화)에 맞춰 하이픈을 넣어줘요
autoHyphen.phoneNumber(value: string)
console.log(autoHyphen.phoneNumber("01012345678")); // "010-1234-5678"
console.log(autoHyphen.phoneNumber("0212345678"));  // "02-1234-5678"

⸻
- 사업자등록번호(TIN, Taxpayer Identification Number)에 맞춰 하이픈을 넣어줘요
autoHyphen.tinNumber(value: string)
console.log(autoHyphen.tinNumber("1234567890")); // "123-45-67890"
```

### 🛠 Integrating auto-hyphen-utils with React Hook Form

```tsx

import { Controller, useForm } from 'react-hook-form';
import autoHyphen from 'auto-hyphen-utils';

const PhoneInput = () => {
  const { control } = useForm();

  return (
    <Controller
      name="phone"
      control={control}
      render={({ field }) => (
        <input
          {...field}
          placeholder="전화번호 입력"
          value={autoHyphen.phoneNumber(field.value)}
          onChange={(e) => field.onChange(e.target.value)}
        />
      )}
    />
  );
};
```
