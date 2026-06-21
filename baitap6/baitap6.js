let a = Number(prompt("Mời bạn nhập vào số a"));
let b = Number(prompt("Mời bạn nhập vào số b"));

let operation = prompt("Mời bạn nhập vào các phép tính (+, -, x, :)");

let result;
let isValid = true;

switch (operation) {
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case 'x':
        result = a * b;
        break;
    case ':':
        
        if (b === 0) {
            alert("Lỗi: Không thể chia cho số 0!");
            isValid = false;
        } else {
            result = a / b;
        }
        break;
    default:
        alert("Phép tính bạn nhập vào không hợp lệ!");
        isValid = false;
}


if (isValid) {
    alert(`Kết quả của phép tính trên: a ${operation} b = ${result}`);
}