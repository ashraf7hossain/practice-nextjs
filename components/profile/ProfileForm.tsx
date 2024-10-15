import { useRef } from 'react';

import classes from './ProfileForm.module.css';

function ProfileForm({ onChangePassword }: any) {
  // const oldPasswordRef = useRef<any>();
  // const newPasswordRef = useRef<any>();

  // function submitHandler(event: any) {
  //   event.preventDefault();

  //   const enteredOldPassword = oldPasswordRef.current.value;
  //   const enteredNewPassword = newPasswordRef.current.value;

  //   // optional: Add validation

  //   onChangePassword({
  //     oldPassword: enteredOldPassword,
  //     newPassword: enteredNewPassword
  //   });
  // }

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' />
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>Old Password</label>
        <input type='password' id='old-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;