# <h1 align="center"> Calculator Application </h1>


## **PLANS**


### VARIABLES 

1. Creating a **runningTotal** var 
2. And a **buffer** var to track datas
3. And **previous Operator**
   => keeping track what been previously pressed
4. const on **screen** 

  **HINT:** <br/>
> assigning to "null" means : nothing was previously assigned..


### QUERY SELECTORS
1. on calc-buttons container
2. on screen 



###  EVENT LISTENER: 

  > only on top level container calc-buttons<br/>
    only click event for now<br/>
    func () => buttonClick(event.target.innerText)



  **WARNING:** <br/>
    > - buttonClick() cb 
        => put the data on a backpack 

  **HINT:** <br/>
    > - use String data to handle potential Coercion issues(String() , "" + )
      - use ParseInt() to simplify tasks  



###  FUNCTIONS



###### **FUNCTION BUTTON CLICK()**

1. IF isNaN , then its a symbol

2. ELSE is a number: 

          - use if statement
          - use isNan() & parseInt()
          - use two functions to handle situations
          => handleNumber() & handleSymbol()


  **HINT**: play around with value (=data) <br/> 

            - then with **isNaN()** because
            if isNaN then is a Symbol

            - using **parseInt** 
            "4" // 4 
            "C" // NaN





###### **FUNCTION HANDLE NUMBER(value)**
If is a **number**, play with **value & buffer** 

  - two cases: "0" & add a value
    1. if === "0" buffer = value
    2. else buffer += value




######  **FUNCTION HANDLE SYMBOL(value)**
Use Switch statement to handle "C", "=",  "Arrow"

**1. case "C" :** <br/>
  reset variables
  - buffer to "0"  & runningTotal to 0

**2. case "=" :** <br/>
  Assign buffer "" + (number(s) + symbol) to runningTotal
  then reset runningTotal to 0, prevOp to null and 
  handle operations with new func 

  Play with previousOp:  two situations <br/>

    - if( === null ) return
    
    - or
    addsOperations(buffer) func
    pass buffer => string runningTotal
    reset runningTotal to 0

**3. case "back arrow" :** <br/>
  => Moving back one char (str) or reset to "0" if only one char
  
  - play around with 
        buffer.length
        buffer.substring()
  - in 2 situations: 
    => if .length === 1 so buffer reset to "0"
    => otherwise .substring(0, buffer.length -1)

**4. default: :** <br/>
  call new func handleMath()





###### **FUNCTION HANDLE MATH(value)**





###### **FUNCTION RE RENDER()**
to call on every changes 
      => screen.innerText assign to buffer


