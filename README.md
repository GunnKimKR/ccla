인터랙티브한 동적 반응형 웹
===
> :checked의 작동 원리를 이용해 CSS만으로 사용자와 상호작용하는 동적인 반응형 웹입니다.

![CCLA 메인](img_readme/img_main.jpg)

## 목차
1. 문서 특징
2. 문서 작동 원리
   1. HTML
   2. CSS

### 1. 문서 특징
1. :checked의 작동 원리와 CSS transition을 이용한 인터랙티브한 동작
2. 형제 선택자 '~'를 활용한 자유로운 섹션 접근

### 2. 문서 작동 원리
#### 2.1 HTML
```HTML
<div id="content">
  <input type="radio" name="radio" id="check1" class="radio1">
  <input type="radio" name="radio" id="check2" class="radio2">
  <input type="radio" name="radio" id="check3" class="radio3">
  <label for="check1" class="section">
    ...
  </label>
  <label for="check2" class="section2">
    ...
  </label>
  <label for="check3" class="section3">
    ...
  </label>
</div>
```
> radio에 :checked가 된 상태일 때 스타일을 적용하기 때문에 스타일을 적용할 요소는 `<input type="radio">`와 **형제관계**에 있어야한다.  
`<input>`은 빈요소이기 때문에 다른 요소들을 그룹핑할 수 없다.

#### 2.2 CSS
```CSS
.radio1:checked~.section,
.radio2:checked~.section2,
.radio3:checked~.section3{width:90%;cursor:auto}

.radio1:checked~.section2,
.radio1:checked~.section3,
.radio2:checked~.section,
.radio2:checked~.section3,
.radio3:checked~.section,
.radio3:checked~.section2{width:5%}
```
'+' 선택자는 선택한 요소에 바로 뒤에 인접한 요소만 선택할 수 있는데 반해 '~' 선택자는 뒤에 있는 형제요소 중에서 선택이 가능하기 때문에 자유롭게 형제요소들을 넘나들며 원하는 섹션에 스타일을 적용할 수 있다.

단, 스타일을 적용할 요소가 `<input type="radio">` 앞에 나오면 안된다.  
CSS 선택자는 요소 앞에 있는 요소는 선택할 수 없다.
```
.radio1:checked~.section .bg_section,
.radio2:checked~.section2 .bg_section,
.radio3:checked~.section3 .bg_section{margin-left:0}
```
'~' 선택자를 이용하면 **모든 형제관계에 있는 섹션**에 자식 요소에도 접근이 가능하다.
