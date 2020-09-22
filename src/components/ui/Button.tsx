import React, { useState, useEffect } from 'react';

type ButtonProps = {
  label: string
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  const [loading, setLoading] = useState<null | boolean>(null)

  useEffect(() => {
    const _timeout = setTimeout(() => setLoading(!loading), 10000)

    return (): void => {
      clearTimeout((_timeout as unknown) as number)
    }
  }, [loading])

  return (
        <button 
          onClick={(): void => {
            setLoading(!loading)
          }}
        >
         {loading ? <p>loading</p> : <p>{label}</p>}
        </button>
  );
}


export default Button;
