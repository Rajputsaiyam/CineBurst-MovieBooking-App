// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Lock, Mail, User as UserIcon, Eye, EyeOff, Ticket } from 'lucide-react';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     // Validation
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       setIsLoading(false);
//       return;
//     }

//     if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
//       setError('Please enter a valid email address');
//       setIsLoading(false);
//       return;
//     }

//     try {
//       // Replace with actual API call
//       const response = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           firstname: formData.firstname,
//           lastname: formData.lastname,
//           email: formData.email,
//           password: formData.password,
//           role: 'user' // Default role as per schema
//         })
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Registration failed');
//       }

//       navigate('/verify-email'); // Redirect to verification page
//     } catch (err) {
//       setError(err.message || 'Registration failed. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
//       <div className="w-full max-w-md border border-gray-800 rounded-xl p-8 bg-gray-900/30 backdrop-blur-sm">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-serif font-bold tracking-tight mb-2">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
//               JOIN CINÉVERSE
//             </span>
//           </h1>
//           <p className="text-gray-400">Create your account to get started</p>
//         </div>

//         {error && (
//           <div className="mb-6 p-3 bg-red-900/50 border border-red-800 rounded-lg text-sm">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-400 mb-2">
//                 First Name *
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <UserIcon className="h-5 w-5 text-gray-500" />
//                 </div>
//                 <input
//                   type="text"
//                   name="firstname"
//                   value={formData.firstname}
//                   onChange={handleChange}
//                   className="w-full pl-10 pr-3 py-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
//                   placeholder="John"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-400 mb-2">
//                 Last Name
//               </label>
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="lastname"
//                   value={formData.lastname}
//                   onChange={handleChange}
//                   className="w-full pl-3 pr-3 py-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
//                   placeholder="Doe"
//                 />
//               </div>
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-400 mb-2">
//               Email *
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Mail className="h-5 w-5 text-gray-500" />
//               </div>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full pl-10 pr-3 py-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
//                 placeholder="your@email.com"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-400 mb-2">
//               Password *
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Lock className="h-5 w-5 text-gray-500" />
//               </div>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full pl-10 pr-10 py-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
//                 placeholder="••••••••"
//                 required
//                 minLength="8"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center"
//               >
//                 {showPassword ? (
//                   <EyeOff className="h-5 w-5 text-gray-500 hover:text-white" />
//                 ) : (
//                   <Eye className="h-5 w-5 text-gray-500 hover:text-white" />
//                 )}
//               </button>
//             </div>
//             <p className="mt-1 text-xs text-gray-500">
//               Minimum 8 characters
//             </p>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-400 mb-2">
//               Confirm Password *
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Lock className="h-5 w-5 text-gray-500" />
//               </div>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full pl-10 pr-3 py-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
//                 placeholder="••••••••"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex items-start pt-2">
//             <div className="flex items-center h-5">
//               <input
//                 id="terms"
//                 name="terms"
//                 type="checkbox"
//                 className="h-4 w-4 border-gray-800 rounded bg-black focus:ring-white"
//                 required
//               />
//             </div>
//             <div className="ml-3 text-sm">
//               <label htmlFor="terms" className="text-gray-400">
//                 I agree to the{' '}
//                 <Link to="/terms" className="text-white hover:underline">
//                   Terms of Service
//                 </Link>{' '}
//                 and{' '}
//                 <Link to="/privacy" className="text-white hover:underline">
//                   Privacy Policy
//                 </Link>
//               </label>
//             </div>
//           </div>

//           <div className="pt-4">
//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`w-full py-3.5 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
//                 isLoading
//                   ? 'bg-gray-800 cursor-not-allowed'
//                   : 'bg-white text-black hover:bg-gray-100 hover:shadow-lg'
//               }`}
//             >
//               {isLoading ? (
//                 <>
//                   <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   CREATING ACCOUNT...
//                 </>
//               ) : (
//                 <>
//                   <Ticket className="h-5 w-5" />
//                   CREATE ACCOUNT
//                 </>
//               )}
//             </button>
//           </div>
//         </form>

//         <div className="mt-8 text-center text-sm text-gray-400">
//           Already have an account?{' '}
//           <Link to="/signin" className="text-white hover:underline">
//             Sign in
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;





import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Lock, Mail, User as UserIcon, Eye, EyeOff, Ticket } from 'lucide-react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/auth/sign-up', {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
        role: 'user'
      });

      if (response.status === 201 || response.status === 200) {
        navigate('/verify-email');
      } else {
        setError(response.data.message || 'Something went wrong');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md border border-gray-800 rounded-xl p-8 bg-gray-900/30 backdrop-blur-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold tracking-tight mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              JOIN CINÉVERSE
            </span>
          </h1>
          <p className="text-gray-400">Create your account to get started</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-900/50 border border-red-800 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                First Name *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="John"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full pl-3 pr-3 py-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Password *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                placeholder="••••••••"
                required
                minLength="8"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-500 hover:text-white" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500 hover:text-white" />
                )}
              </button>
            </div>
            <p className="mt-1 text-xs text-gray-500">Minimum 8 characters</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Confirm Password *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div className="flex items-start pt-2">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 border-gray-800 rounded bg-black focus:ring-white"
              required
            />
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="text-gray-400">
                I agree to the{' '}
                <Link to="/terms" className="text-white hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-white hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3.5 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                isLoading
                  ? 'bg-gray-800 cursor-not-allowed'
                  : 'bg-white text-black hover:bg-gray-100 hover:shadow-lg'
              }`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  CREATING ACCOUNT...
                </>
              ) : (
                <>
                  <Ticket className="h-5 w-5" />
                  CREATE ACCOUNT
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link to="/signin" className="text-white hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
