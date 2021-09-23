function tryJoin(object) {
    // 회원가입이 완료 되었다는 얼럿창을 띄운다.
    alert(`회원가입이 완료되었습니다.`)
    location.href = "./index.html"
}

    function validateForm() {
        var userId = document.getElementById("loginId");
        var pwd = document.getElementById("loginPw");
        var pwdCheck = document.getElementById("loginPwConfirm");
        var userName = document.getElementById("name");
        var email = document.getElementById("email");
        var tel = document.getElementById("cellphoneNo");
        //1.아이디검사
        //첫글자는 반드시 영소문자로 이루어지고,
        //숫자가 하나이상 포함되어야함.
        //아이디의 길이는 4~12글자사이
        var regExp1 = /^[a-z][a-z\d]{3,11}$/;
        var regExp2 = /[0-9]/;
        // if(!regExpTest(regExp1
        //               ,userId
        //               ,"아이디는 영소문자로 시작하는 4~12글자입니다."))
        //     return false;
        // if(!regExpTest(regExp2
        //               ,userId
        //               ,"아이디는 숫자를 하나이상 포함하세요."))
        //     return false;


        //2.비밀번호 확인 검사
        //숫자/문자/특수문자/ 포함 형태의 8~15자리 이내의 암호 정규식
        //전체길이검사 /^.{8,15}$/
        //숫자하나 반드시 포함 /\d/
        //영문자 반드시 포함 /[a-zA-Z]/
        //특수문자 반드시 포함  /[\*!&]/
        if (!checkId()) {
            return false;
        }
        var regExpArr = [/^.{8,15}$/, /\d/, /[a-zA-Z]/, /[\*!&]/];

        for (let i = 0; i < regExpArr.length; i++) {
            if (!regExpTest(regExpArr[i], pwd, "비밀번호는 8~15자리 숫자/문자/특수문자를 포함해야합니다.")) {
                return false;
            }
        }

        //비밀번호일치여부
        if (!isEqualPwd()) {
            return false;
        }

        //3.이름검사
        //한글2글자 이상만 허용. [가-힣] 으로 해도되긴 하지만 자음만(ㄱㄴㄷㄹ)있으면 필터링이 안됨
        var regExp3 = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/;
        if (!regExpTest(regExp3, userName, "한글2글자이상 입력하세요."))
            return false;

        //4.이메일 검사
        // 4글자 이상(\w = [a-zA-Z0-9_], [\w-\.]) @가 나오고
        // 1글자 이상(주소). 글자 가 1~3번 반복됨
        if (!regExpTest(/^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/, email, "이메일 형식에 어긋납니다."))
            return false;

        // /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/
        // ^[\w]{4,}@ 시작하고 영문자/숫자/_4글자이상나오고 @ 가 이어지는지
        // @[\w]+ @이후 영문자/숫자/_가 한글자 이상
        // (\.[\w]+){1,3}$  \. . (escaping) 이후 영문자/숫자/_가 1~3글자 나오고 끝나는지


        //5. 전화번호 검사
        // 전화번호 앞자리는 010, 두번째 자리는 3~4자리 숫자, 세번째 자리는 4자리 숫자
        if (!regExpTest(/^[0-9]{10,11}$/, tel, "번호 10자리 이상 입력"))
            return false;

        alert("회원가입이 완료되었습니다.")
        location.href = "index.html"
        return true;
    }

    function regExpTest(regExp, el, msg) {
        if (regExp.test(el.value))
            return true;
        //적합한 문자열이 아닌 경우
        alert(msg);
        el.value = "";
        el.focus();
        return false;
    }

    function checkId() {
        var id = document.getElementById("loginId");
        console.log(id.value)
        if (id.value === "") {
            alert("아이디를 입력해주세요");
            return false;
        }
        return true;
    }

    function isEqualPwd() {
        var pwd = document.getElementById("loginPw");
        var pwdcheck = document.getElementById("loginPwConfirm");
        if (pwd.value == pwdcheck.value) {
            return true;
        } else {
            alert("비밀번호가 일치하지 않습니다.");
            pwd.select();
            return false;
        }
    }

    // map header 및 body 애니메이션 효과
    function leftSectionClick(){
    var leftSection = document.getElementById("leftSection");
    leftSection.style.left = '0px';
    leftSection.style.opacity = '1';
}
    function rightSectionClick(){
    var rightSection = document.getElementById("rightSection");
    rightSection.style.left = '0px';
    rightSection.style.opacity = '1';
}


