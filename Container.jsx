import React, { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import Signup from './Signup/Signup';

const Container = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleToggleForm = () => {
    setShowLoginForm((prev) => !prev);
  };

  return (
    <div>
      {showLoginForm ? (
        <LoginForm onToggleForm={handleToggleForm} />
      ) : (
        <Signup onToggleForm={handleToggleForm} />
      )}
    </div>
  );
};

export default Container;
