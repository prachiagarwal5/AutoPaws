import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Heart, Sparkles, Star } from 'lucide-react';

const PetLoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    // Create floating elements
    const elements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
    }));
    setFloatingElements(elements);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Login successful! 🐾');
       window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-300 to-teal-400 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static decorative elements */}
        <div className="absolute top-10 left-10 animate-bounce">
          <Heart className="w-8 h-8 text-pink-300 opacity-60" fill="currentColor" />
        </div>
        <div className="absolute top-20 right-20 animate-pulse">
          <Sparkles className="w-6 h-6 text-teal-300" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce" style={{ animationDelay: '1s' }}>
          <Star className="w-7 h-7 text-pink-200" fill="currentColor" />
        </div>
        
        {/* Floating decorative circles */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute w-4 h-4 bg-white/20 rounded-full animate-bounce opacity-40"
            style={{
              left: `${element.left}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
              top: `${20 + (element.id * 10)}%`,
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Illustration */}
        <div className="hidden md:block text-center transform hover:scale-105 transition-transform duration-500">
          <div className="relative">
            {/* Main Pet Image */}
            <div className="w-80 h-80 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <div className="text-8xl animate-bounce">🐕‍🦺</div>
            </div>
            
            {/* Floating Elements around main image */}
            <div className="absolute -top-5 -right-5 animate-spin" style={{ animationDuration: '3s' }}>
              <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                🐾
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <div className="w-14 h-14 bg-teal-400 rounded-full flex items-center justify-center text-xl shadow-lg">
                ❤️
              </div>
            </div>
            <div className="absolute top-1/2 -left-8 animate-pulse">
              <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-lg shadow-lg">
                🏠
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-white mt-8">
            AutoPaws
          </h1>
          <p className="text-xl text-white/90 mt-2">
            One Stop Pet Feeding Solution
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 border border-white/20">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-teal-500 rounded-full flex items-center justify-center text-2xl animate-bounce">
                  🐱
                </div>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-teal-600 bg-clip-text text-transparent">
                Welcome Back!
              </h2>
              <p className="text-gray-600 mt-2">Sign in to your pet care account</p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Email Field */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-pink-600 transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:shadow-md"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-teal-600 transition-colors">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:shadow-md"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <button className="text-sm text-teal-600 hover:text-teal-800 transition-colors">
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-teal-500 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-teal-600 focus:ring-4 focus:ring-pink-200 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Signing In...
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </div>

            

                        {/* Sign Up Link */}
                        <div className="text-center mt-6">
                          <p className="text-gray-600">
                            Don't have an account?{' '}
                            <button 
                              className="text-pink-600 hover:text-pink-800 font-semibold transition-colors"
                              onClick={() => window.location.href = '/signup'}
                            >
                              Sign up now
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Header for small screens */}
      <div className="md:hidden absolute top-4 left-1/2 -translate-x-1/2">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">AutoPaws</h1>
          <p className="text-white/90">One Stop Pet Feeding Solution</p>
        </div>
      </div>
    </div>
  );
};

export default PetLoginPage;