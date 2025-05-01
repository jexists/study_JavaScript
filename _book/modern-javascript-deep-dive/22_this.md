# 22장 this

### p342

- 객체: 프로퍼티(상태) + 메서드(동작)

    → 메서드는 **자신이 속한 프로퍼티** 참조 & 변경할 수 있어야한다.

- this: 자신이 속한 객체 / 자기 참조 변수

    → 자신이 속한 객체 또는 자신이 생성할 인스턴스 프로퍼티나 메서드 참조

다른 언어에서 this가 클래스에서 생성한 객체를 의미한다면 자바스크립트는 함수를 어떻게 호출하느냐에 따라 바라보는 대상이 달라진다.

## this 바인딩: 함수 호출 방식에 의해 동적으로 결정

### p347

1. 일반함수호출 (전역함수 / 중첩함수 / 콜백함수): 전역 객체 window (기본적)

- 'use strict' 사용할 경우 // undefined!

*this: 프로퍼티나 메서드 참조하기 위한 자기 참조 변수

→ 객체의 메서드 내부 / 생성자 함수 내부에서 의미 (일반함수에서는 this 사용필요X) 

### p350

2. 매소드 호출(프로퍼티 값 할당 호출): 매서드 호출한 객체 obj (메서드 이름앞에 기술한 객체)

### p353

3. 생성자 함수 호출(new 연산자): 생성자 함수가 생성할 인스턴스

### p354

4. 매서드에 의한 간접 호출: 첫번째 인수로 전달한 객체 

- Function.prototype.apply/call/bind
- apply/call 호출 첫번째 인수로 전달한 특정 객체 호출한 함수의 this에 바인딩

    → apply(배열) / call(쉼표로 리스트형식) ⇒ 인수전달 방식 다를뿐 동일한 동작 (p356 /ex22-21)

    → bind(함수호출x/객체 전달) ⇒ 명시적으로 호출  (ex 22-23)

[참고]

- 전역 this ⇒ window (use strict 사용할 경우 ⇒ window)
- 이벤트 핸들러 ⇒ 이벤트 받는 HTML 요소

    ```jsx
    var btn = document.querySelector('#btn');
    btn.addEventListener('click', function() {
    	console.log(this); //#btn
    });
    ```

- 화살표 함수

    ```jsx
    var Person = function (name) {
      this.name = name;
      this.say = function () {
        console.log(this); // Person {name: "haha", say: f}
     
        setTimeout(function () {
          console.log(this); // Window
          console.log(this.name + '입니다'); //입니다.
        }, 100);
      };
    };
    var me = new Person('haha');
     
    me.say(); //입니다
    ```

    ```jsx
    var Person = function (name) {
      this.name = name;
      this.say = function () {
        console.log(this); // Person {name: "haha", say: f}
     
        setTimeout(() => {
          console.log(this); // Person {name: "haha"}
          console.log(this.name + '입니다.'); 
        }, 100)
      };
    };
    var me = new Person('haha');
    me.say(); //haha입니다
    ```

# 23장 실행 컨텍스트

→ 스코프, 호이스팅, 클로저, 이벤트 핸들러, 비동기 처리 등 이해

### p359

4가지 소스코드 타입 전역/함수/eval/모듈 코드

소스평가 과정 → 소스 코드 실행과정

# 24장 클로저

### p388

클로저: 함수형 프로그래밍 언어 사용되는 중요한 특성

→ 함수과 렉시컬 환경의 조합

→ 함수가 생성될 당시 외부변수를 기억 (생성 이후 계속 접근 가능)

*렉시컬 스코프: **어디에 정의** 했는지에 따라 상위 스코프 결정 (p390 ex 24-3)

→ 외부 함수보다 중첩함수가 더 오래 유지되는 경우 중첩함수는 생명주기 종료한 외부 함수 변수 참조 가능 (p393 ex24-5)

→ 상태가 의도하지 않게 변경되지 않게 특정 함수에게만 상태 변경 허용할 때 사용 (안전하게 변경하고 유지 (p403)

```jsx
let cnt = 0;
function cntPlus() {
  cnt = cnt + 1;
}

console.log(cnt);
cntPlus();
console.log(cnt);
cntPlus();
console.log(cnt);

// 코드~~~
cnt = 100;

cntPlus();
console.log(cnt);
```

```jsx
console.log('-----------');
console.log('closer');

// cnt 변수를 접근 못하게 만들어야한다. 
// 전역변수 -> 지역변수로 변경
function closure() {
  let cnt = 0;
  function cntPlus() {
    cnt = cnt + 1;
  }
  function print() {
    console.log(cnt);
  }
  return {
    cntPlus,
    print
  }
}

const cntClosure = closure();
console.log(cntClosure); //함수 담겨있음

cntClosure.print(); 
cntClosure.cntPlus(); // 실행하면 1증가
cntClosure.print(); 

// console.log(cnt); //ERROR
```

# 25장 클래스

### p417

→ 클래스 없어도 생성자 함수 / 프로토 타입 통해 객체 지향 언어 상속 구현 (ex 25-1)

### p418

- 클래스와 생성자 함수의 차이점
    1. 클래스는 new 연산자 없이 호출하면 에러
    2. 클래스는 상속을 지원하는 extends와 super 키워드 제공
    3. 클래스는 호이스팅이 발생하지 않는 것처럼 동작 (런타임 이후 생성되기 때문)
    4. 클래스 내의 모든 코드에는 암묵적으로 strict mode가 지정되며 해제할수 없다.
    5. 클래스의 constructor, 프로토타입 메서드, 정적 메서드는 모두 프로퍼티 어트리뷰트의 값이 false, 즉 열거되지 않는다.

### p419

- 클래스 특징: 함수, 일급객체
    - 무명의 리터럴 생성
    - 변수나 자료구조 저장
    - 매개변수 전달
    - 반환값 사용

### p419

- 클래스 정의 메서드

    1. constructor (생성자): 인스턴스 생성 및 초기화 (p423)

    → 최대 한개만 존재

    → 생략 가능: 빈 객체 생성

    → 초기화: 고정값 / 매개변수 선언 후 this 프로퍼티 추가

    → return 사용X: 클래스 기본 동작 훼손 (p428)

    2. 프로토타입 메서드 (p428)

    → 클래스 안에서 정의한 함수는 기본적으로 프로토타입 메서드가 된다.

    3. 정적 메서드 (static)

    → 클래스 정의 이후 인스턴스 생성하지 않아도 호출할 수 있는 메서드

    → 인스턴스로 호출 불가

    *프로토타입 vs 정적 메서드 차이 (p432)

    1. 정적 메서드와 프로토타입 메서드는 자신이 속해 있는 프로토타입 체인이 다르다.
    2. 정적 메서드는 클래스로 호출하고 프로토타입 메서드는 인스턴스로 호출한다.
    3. 정적 메서드는 인스턴스 프로퍼티를 참조할 수 없지만 프로토타입 메서다는 인스턴스 프로퍼티를 참조할 수 있다.

    *메서드 특징

    → funtion 키워드 생략 축약 표현 사용

    → strict mode 실행

### p420

- 클래스 정의 & 호출 방식 / 생성자함수 비교 ⇒ 유사

### p421

런타임 이전에 실행되기 때문에 호이스팅 된다 (let, const 변수 처럼)

### p422

반드시 new 연산자와 함께 호출되서 인스턴스 생성

### p445

public:  인스턴스 프로퍼티는 인스턴스를 통해 클래스 외부에서 언제나 참조가능

private: #사용 (사파리 지원x / 바벨 이용)

### p452

extends: 클래스 확장 (상속받을 클래스)

- 서브클래스 / 파생클래스 / 자식클래스 : 상속통해 확장된 클래스
- 수퍼클래스 / 베이스 클래스 / 부모 클래스 : 서브클래스에 상속된 클래스

    → super호출하면 수퍼의 constructor 호출 p456

    - 서브클래스에서 constructor에서 반드시 super 호출
    - super호출 전 this 참조 불가
    - super() → 서브 클래스 constructor에서만 호출

    → super 참조 수퍼 메서드 호출

```jsx

```
