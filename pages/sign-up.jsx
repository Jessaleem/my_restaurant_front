import { useFetchUser } from '../services/authContext';

const SignUp = () => {

  const handleClick = () => {
    closeModal(false);
  }

  return (
    <div className="bg-gray-100 h-full md:h-screen w-full">
        <p className="text-black">email</p>
    </div>
  )
}

export default SignUp;