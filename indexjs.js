function idCheck(){
    const idValue = document.getElementById('id_check').value;
    console.log('입력 id : ', idValue);
    console.log(idValue.length)
    const idLength = idValue.length
    let reult = document.getElementById('id_input_result')

    const exp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{3,20}$/;
    if(idLength == 0){
        reult.innerHTML = '필수항목입니다'
        reult.style.color = 'red';
    }else if(!idValue.match(exp)){
        reult.innerHTML = '숫자 포함 3~20자 이내로 작성해 주세요'
        reult.style.color = 'red';
    }else if(idValue.match(exp)) {
        reult.innerHTML = '멋진 아이디네요!';
        reult.style.color = 'green';
    }
}

function emailSelect(){
    const email = document.getElementById('email');
    const emailSel = document.getElementById('email_input')
    emailSel.value =  email.value;
}


function pwCheck(){

const password = document.getElementById('pw_check').value;
let passLen= password.length  

let pass = document.getElementById('pw_input_result')
const exp2 = /^(?=.*[a-z])(?=.*\d)(?=.*[-_!*])[a-z\d-_!*]{8,20}$/; 

if(password.match(exp2)){
    pass.innerHTML = '좋습니다';
    pass.style.color = 'green';
}else if(passLen == 0){
    pass.innerHTML = '필수항목입니다.';
    pass.style.color = 'red';
} else if(passLen<=8 || passLen>=20){
    pass.innerHTML = '8~20자리로 입력해주세요.';
    pass.style.color = 'red';
}else{
    pass.innerHTML = '소문자, 특수기호(-_!*), 숫자 포함해주세요';
    pass.style.color = 'red';
}
}

function rpwCheck(){
const password = document.getElementById('pw_check').value;
const rePassword = document.getElementById('rpw_check').value;
const repass = document.getElementById("rpw_input_result");

console.log(password);
console.log(rePassword);

if (rePassword == password){
    repass.innerHTML = '비밀번호가 일치합니다'
    repass.style.color = 'green';
}else{
    repass.innerHTML = '비밀번호가 일치하지 않습니다';
    repass.style.color = 'red';

}

}

function nameCheck(){
    const name = document.getElementById('name_check').value;
    nameLen = name.length;

    const nameCheck = document.getElementById("name_input_result");
    if(nameLen==0){
        nameCheck.innerHTML = '필수 항목 입니다.'
        nameCheck.style.color = 'red';
    }

}

function phoneCheck(){
    const exp = /^\d{3}-\d{4}-\d{4}$/;
    const phone = document.getElementById('phone').value;
    const result = document.getElementById('phone-check-result');

    if(phone.match(exp)){
        result.innerHTML = '유효한 형식입니다'
        result.style.color = 'green';
    } else{
    result.innerHTML = '유효하지 않은 형식입니다'
    result.style.color = 'red';
    }
}

    function sample6_execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    document.getElementById("sample6_extraAddress").value = extraAddr;
                
                } else {
                    document.getElementById("sample6_extraAddress").value = '';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('sample6_postcode').value = data.zonecode;
                document.getElementById("sample6_address").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("sample6_detailAddress").focus();
            }
        }).open();
    }

    



