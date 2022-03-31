
import React, {useState} from 'react';
import axios from "axios";
import "./LoginRegister.css";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));


export default function Signup() {
    const [ info, setInfo ] = useState({id: "", pw: "" , confirmPassword:"" , name: ""}) // 인포라는 컨테이너에 사용자 아이디랑 패스워드 담기    
    const classes = useStyles();
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('Choose wisely');

    const onChange = (event) => {
      // 사용자가 정보를 입력했을 때 그 정보를 실시간으로 반영하는것 (불러온다)
      const name = event.target.name; // 건드려 지는 대상을 의미
      const value = event.target.value;
      setInfo(values => ({...values, [name]: value}))
      setHelperText(' ');
      setError(false);
    }

    const onSubmit = () => {
        // console.log(`id : ${info.id}`)
        // console.log(`pw : ${info.pw}`)
        // console.log(`confirmPassword : ${info.pw}`)
        // console.log(`name : ${info.name}`)

        if (info.id === "") alert("아이디를 입력하세요");
        else if (info.pw === "" || info.confirmPassword === "") alert("비밀번호를 입력하세요");
    
        else if (info.pw !== info.confirmPassword) {
          setHelperText('비밀번호 불일치');
          setError(true);
        } 
        else if (info.name === "") alert("이름을 입력하세요");

        else {
            axios.post("http://localhost:3001/signup", {
                id : info.id,
                pw : info.pw,
                confirmPassword : info.confirmPassword,
                name : info.name,
            })
            .then(res => {
                let msg = res.data.msg
                console.log(msg);
                if (msg === "user already exists!") {
                    alert("중복된 ID입니다.");
                }
                else {
                    alert("회원가입 성공!")
                    document.location.href = '/login';    
                }
            });
        }
    };

  const onKeyDown = (e) => {
    if (e.key === "Enter") onSubmit();
  };

  return (
    // <form onSubmit={handleSubmit}>
      <div className="Ldiv">
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <FormLabel component="legend">Signup</FormLabel>
            <p className="Ltext">
              <input
                className="Linput"
                name="id"
                type="id"
                placeholder="아이디"
                value={info.id || ""}
                onChange={onChange}
                onKeyDown={onKeyDown}
              />
            </p>
            <br />
            <p className="Ltext">
              <input
                className="Linput"
                name="pw"
                type="password"
                placeholder="비밀번호"
                value={info.pw || ""}
                onChange={onChange}
                onKeyDown={onKeyDown}
              />
            </p>
            <FormHelperText>{helperText}</FormHelperText>
            <br />
            <p className="Ltext">
              <input 
              className="Linput"
              name="confirmPassword" 
              type="password" placeholder="비밀번호 확인" 
              value={ info.confirmPassword || "" }  
              onChange={ onChange } 
              onKeyDown={onKeyDown}/>
            </p>  
            <br/>

            <p className="Ltext">
              <input
                className="Linput"
                name="name"
                type="text"
                placeholder="이름"
                value={info.name || ""}
                onChange={onChange}
                onKeyDown={onKeyDown}
              />
            </p>
            <br />
          {/* <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Check Answer
          </Button> */}
          <button type="button" onClick={onSubmit} className="Lbtn">
            계정 생성하기
          </button>
        </FormControl>
      </div>
  );

  // return (
  //     <>
  //   <div className="Ldiv">
  //     <form>
        // <p className="Ltext">
        //   <input
        //     className="Linput"
        //     name="id"
        //     type="id"
        //     placeholder="아이디"
        //     value={info.id || ""}
        //     onChange={onChange}
        //     onKeyDown={onKeyDown}
        //   />
        // </p>
        // <br />
        // <p className="Ltext">
        //   <input
        //     className="Linput"
        //     name="pw"
        //     type="password"
        //     placeholder="비밀번호"
        //     value={info.pw || ""}
        //     onChange={onChange}
        //     onKeyDown={onKeyDown}
        //   />
        // </p>
        // <br />
        // <p className="Ltext"></p>
        //   <input 
        //   className="Linput"
        //   name="confirmPassword" 
        //   type="password" placeholder="비밀번호 확인" 
        //   value={ info.confirmPassword || "" }  
        //   onChange={ onChange } 
        //   onKeyDown={onKeyDown}/><br/>

        // <p className="Ltext">
        //   <input
        //     className="Linput"
        //     name="name"
        //     type="text"
        //     placeholder="이름"
        //     value={info.name || ""}
        //     onChange={onChange}
        //     onKeyDown={onKeyDown}
        //   />
        // </p>
        // <br />
        // <button type="button" onClick={onSubmit} className="Lbtn">
        //   계정 생성하기
        // </button>
  //     </form>
  //   </div>
  //   </>
  // );
}
