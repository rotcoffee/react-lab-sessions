import { useState } from 'react';

import StyledButton from './components/StyledButton';
import StyledList from './components/StyledList';

function App() {
  /**
  * TASK2
  * state 변수를 선언합니다.
  */
  /* Your code here */
  const [count, setCount] = useState(0);
  const [records, setRecords] = useState<number[]>([]);

  return (
    <main className="flex flex-col items-center py-4">
      {/**
        * TASK3
        * StyledButton 컴포넌트를 사용하여 버튼을 생성합니다.
        * 카운터의 값을 1 증가시키는 이벤트 핸들러를 등록합니다.
        * id 속성은 "increment"로 설정합니다.
       */}
      {/* Your code here */}
      < StyledButton children="+1" onClick={() => setCount(count + 1)} id="increment" className="increment" />
      <div className="flex h-20 w-48 items-center justify-center text-2xl">
        Count:
        <div id="count-display" className="ml-4 flex size-10 items-center justify-center rounded-full bg-yellow-400 text-white">
          {/**
           * TASK3
           * 카운터의 값을 출력합니다.
           * 카운터의 값이 변경될 때마다 화면에 반영되어야 합니다.
           */}
          {/* Your code here */}
          { count }
        </div>
      </div>
      {/**
        * TASK3
        * StyledButton 컴포넌트를 사용하여 버튼을 생성합니다.
        * 카운터의 값을 1 감소시키는 이벤트 핸들러를 등록합니다.
        * id 속성은 "decrement"로 설정합니다.
       */}
      {/* Your code here */}
      < StyledButton children="-1" onClick={() => setCount(count - 1)} id="decrement" className="decrement" />

      <br />
      {/**
        * TASK3
        * StyledButton 컴포넌트를 사용하여 버튼을 생성합니다.
        * 카운터의 값을 기록에 추가하는 이벤트 핸들러를 등록합니다.
        * id 속성은 "add-record"로 설정합니다.
       */}
      {/* Your code here */}
      < StyledButton children="기록 추가" onClick={() => setRecords([...records, count])} id="add-record" className="add-record" />
      {/**
       * TASK3
       * StyledList 컴포넌트를 사용하여 기록을 출력합니다.
       * 기록이 추가될 때마다 화면에 반영되어야 합니다.
       */}
      {/* Your code here */}
      < StyledList records={records} id="record-list" />
    </main>
  );
}

export default App;
