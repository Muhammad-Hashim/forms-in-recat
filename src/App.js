import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {

  const [FullName, setFullName] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',

  })
  const InputEvent = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    const value = event.target.value;
    const name = event.target.name;
    //   // stename(event.target.value);
    setFullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    }
    )
  }
    //     if (name === 'fname') {
     //       return {
    //         fname: value,
     //         lname: preValue.lname,
    //         phone: preValue.phone,
    //         email: preValue.email,

    //       };
     //     } else if (name === 'lname') {
    //       return {
    //         fname: preValue.fname,
    //         lname: value,
    //      phone: preValue.phone,
   //         email: preValue.email,

    //       };

   //     }else if (name === 'phone') {
    //       return {
      //         fname: preValue.fname,
     //         lname: preValue.lname,
    //         phone: value,
    //         email: preValue.email,

   //       };
   //   }else if (name === 'email') {
    //     return {
    //       fname: preValue.fname,
    //       lname: preValue.lname,
    //       phone: preValue.phone,
    //       email: value,

    //     };
    // }

    //  } );

  //   // }
  // }

const onsubmit = (event) => {
  // stenamed(cli);
  // steltname(lastName);
  // event.preventDefault();
}
// const inpout=(event)=>{
//   stelastname(event.target.value);
//   event.preventDefault();
// }
return (
  <>
    <div className="hashim">
      <form onSubmit={onsubmit}>
        <h1>Hello {FullName.fname} {FullName.lname} </h1>
        <p>{FullName.email}</p>
        <p>{FullName.phone}</p>

        <input type='text'
          placeholder='Enter the text '
          name='fname'
          value={FullName.fname}
          onChange={InputEvent}

        />

        <br></br>
        <input type='text'
          placeholder='Enter the Nnmber '
          name='phone'
          value={FullName.phone}
          onChange={InputEvent}

        />

        <br></br><input type='email'
          placeholder='Enter the email  '
          name='email'
          value={FullName.email}
          onChange={InputEvent}

        />

        <br></br>
        <input type='text'
          placeholder='Enter the Password '
          name='lname'
          onChange={InputEvent}
          value={FullName.lname} />
        <button type="submit" >click here ▶️ </button>
      </form>
    </div>
  </>
);
}

export default App;
