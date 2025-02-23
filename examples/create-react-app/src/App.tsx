import autoHyphen from 'auto-hyphen-utils';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="텍스트를 입력하세요" />
      {/* 입력된 텍스트에 autoHyphen 적용 결과 출력 */}
      <p>Hyphen: {autoHyphen.common(text)}</p>
      <p>Hyphen: {autoHyphen.phoneNumber(text)}</p>
    </>
  );
}

export default App;
