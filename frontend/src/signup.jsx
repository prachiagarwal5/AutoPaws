import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Heart, Sparkles, Star, Check } from 'lucide-react';

const PetSignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    petType: '',
    petName: '',
    petAge: '',
    petBreed: '',
    activityLevel: '',
    petPhoto: null,
    agreeTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);
  const [step, setStep] = useState(1);

  useEffect(() => {
    // Create floating elements with different patterns
    const elements = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 4 + Math.random() * 8,
    }));
    setFloatingElements(elements);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
        setIsLoading(false);
        alert('Account created successfully! Welcome to AutoPaw! 🎉');
        window.location.href = '/';
    }, 2500);
};

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-purple-300 to-pink-400 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated shapes */}
        <div className="absolute top-16 left-16 animate-spin" style={{ animationDuration: '8s' }}>
          <Heart className="w-10 h-10 text-pink-300 opacity-50" fill="currentColor" />
        </div>
        <div className="absolute top-32 right-24 animate-pulse">
          <Sparkles className="w-8 h-8 text-teal-300" />
        </div>
        <div className="absolute bottom-24 left-32 animate-bounce" style={{ animationDelay: '2s' }}>
          <Star className="w-9 h-9 text-pink-200" fill="currentColor" />
        </div>
        <div className="absolute top-1/2 right-16 animate-bounce" style={{ animationDelay: '1.5s' }}>
          <div className="text-4xl opacity-60">🦴</div>
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-pulse" style={{ animationDelay: '3s' }}>
          <div className="text-3xl opacity-50">🐕</div>
        </div>
        
        {/* Enhanced floating elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute bg-white/20 rounded-full animate-bounce opacity-30"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Enhanced Illustration */}
        <div className="hidden md:block text-center">
          <div className="relative transform hover:scale-105 transition-transform duration-700">
            {/* Main Pet Carousel */}
            <div className="w-96 h-96 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
              <div className="text-9xl animate-bounce">
                {step === 1 ? '🐶' : '🐱'}
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
                    🎾
                  </div>
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce" style={{ animationDelay: '1s' }}>
                  <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
                    🥣
                  </div>
                </div>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 animate-bounce" style={{ animationDelay: '1.5s' }}>
                  <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                    🎀
                  </div>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 animate-bounce" style={{ animationDelay: '2s' }}>
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    ⭐
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-8 -right-8 animate-spin" style={{ animationDuration: '4s' }}>
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-teal-400 rounded-full flex items-center justify-center text-3xl shadow-xl">
                🐾
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 animate-pulse">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full flex items-center justify-center text-2xl shadow-xl">
                💖
              </div>
            </div>
          </div>
          
          <div className="mt-8 space-y-2">
            <h1 className="text-5xl font-bold text-white">
                AutoPaws
            </h1>
            <p className="text-xl text-white/90">
              Join Our Pet-Loving Community
            </p>
            <div className="flex justify-center space-x-2 mt-4">
              <div className="w-3 h-3 rounded-full bg-white/60"></div>
              <div className="w-3 h-3 rounded-full bg-white/60"></div>
              <div className="w-3 h-3 rounded-full bg-white/60"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 border border-white/20">
            {/* Progress Indicator */}
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${step >= 1 ? 'bg-gradient-to-r from-pink-500 to-teal-500' : 'bg-gray-300'}`}></div>
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${step >= 2 ? 'bg-gradient-to-r from-pink-500 to-teal-500' : 'bg-gray-300'}`}></div>
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full flex items-center justify-center text-2xl animate-bounce">
                  {step === 1 ? '🐕' : '🎉'}
                </div>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-pink-600 bg-clip-text text-transparent">
                {step === 1 ? 'Create Account' : 'Almost Done!'}
              </h2>
              <p className="text-gray-600 mt-2">
                {step === 1 ? 'Join thousands of happy pet parents' : 'Tell us about your furry friend'}
              </p>
            </div>

            {/* Step 1 - Basic Information */}
            {step === 1 && (
              <div className="space-y-6">
                {/* Full Name */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-teal-600 transition-colors">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:shadow-md"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-pink-600 transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:shadow-md"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-teal-600 transition-colors">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:shadow-md"
                      placeholder="Create a password"
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

                {/* Confirm Password */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-pink-600 transition-colors">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:shadow-md"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Next Button */}
                <button
                  onClick={nextStep}
                  className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-pink-500 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-pink-600 focus:ring-4 focus:ring-teal-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Next Step →
                </button>
              </div>
            )}

            {/* Step 2 - Pet Information */}
            {step === 2 && (
              <div className="space-y-4">
                {/* Pet Name and Photo Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-pink-600 transition-colors">
                      Pet Name
                    </label>
                    <input
                      type="text"
                      name="petName"
                      value={formData.petName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:shadow-md"
                      placeholder="What's your pet's name?"
                      required
                    />
                  </div>

                  {/* Pet Photo Upload */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-teal-600 transition-colors">
                      Pet Photo
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        name="petPhoto"
                        onChange={handleInputChange}
                        accept="image/*"
                        className="hidden"
                        id="petPhoto"
                      />
                      <label
                        htmlFor="petPhoto"
                        className="w-full px-4 py-2.5 min-h-[42px] border-2 border-dashed border-gray-300 rounded-xl hover:border-teal-400 transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 group-hover:shadow-md bg-gray-50 hover:bg-teal-50"
                      >
                        <div className="text-lg">📸</div>
                        <div className="text-sm text-gray-600 truncate">
                          {formData.petPhoto ? formData.petPhoto.name : 'Upload photo'}
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Pet Age and Breed Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-pink-600 transition-colors">
                      Age
                    </label>
                    <input
                      type="number"
                      name="petAge"
                      value={formData.petAge}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:shadow-md"
                      placeholder="Age"
                      min="0"
                      max="30"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-teal-600 transition-colors">
                      Breed
                    </label>
                    <input
                      type="text"
                      name="petBreed"
                      value={formData.petBreed}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:shadow-md"
                      placeholder="Breed"
                      required
                    />
                  </div>
                </div>

                {/* Pet Type Selection - Compact Grid */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-teal-600 transition-colors">
                    Pet Type
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { value: 'dog', emoji: '🐕', label: 'Dog' },
                      { value: 'cat', emoji: '🐱', label: 'Cat' },
                      { value: 'bird', emoji: '🦜', label: 'Bird' },
                      { value: 'other', emoji: '🐾', label: 'Other' }
                    ].map((pet) => (
                      <button
                        key={pet.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, petType: pet.value }))}
                        className={`p-3 border-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                          formData.petType === pet.value
                            ? 'border-pink-500 bg-pink-50 shadow-md'
                            : 'border-gray-200 hover:border-teal-300 hover:bg-teal-50'
                        }`}
                      >
                        <div className="text-xl mb-1">{pet.emoji}</div>
                        <div className="text-xs font-medium text-gray-700">{pet.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Activity Level - Compact 2x2 Grid */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-pink-600 transition-colors">
                    Activity Level
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { value: 'low', emoji: '😴', label: 'Low Energy', desc: 'Prefers lounging' },
                      { value: 'moderate', emoji: '🚶', label: 'Moderate', desc: 'Regular walks' },
                      { value: 'high', emoji: '🏃', label: 'High Energy', desc: 'Very active' },
                      { value: 'very-high', emoji: '⚡', label: 'Very High', desc: 'Extremely active' }
                    ].map((level) => (
                      <button
                        key={level.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, activityLevel: level.value }))}
                        className={`p-3 border-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-left ${
                          formData.activityLevel === level.value
                            ? 'border-teal-500 bg-teal-50 shadow-md'
                            : 'border-gray-200 hover:border-pink-300 hover:bg-pink-50'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <div className="text-lg">{level.emoji}</div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-800 text-sm truncate">{level.label}</div>
                            <div className="text-xs text-gray-600 truncate">{level.desc}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500 mt-0.5"
                    required
                  />
                  <label className="text-sm text-gray-600 leading-relaxed">
                    I agree to the{' '}
                    <button className="text-pink-600 hover:text-pink-800 font-medium transition-colors">
                      Terms of Service
                    </button>{' '}
                    and{' '}
                    <button className="text-teal-600 hover:text-teal-800 font-medium transition-colors">
                      Privacy Policy
                    </button>
                  </label>
                </div>

                {/* Navigation Buttons */}
                <div className="flex space-x-3 pt-2">
                  <button
                    onClick={prevStep}
                    className="flex-1 py-2.5 px-4 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading || !formData.agreeTerms || !formData.petName || !formData.petAge || !formData.petBreed || !formData.petType || !formData.activityLevel}
                    className="flex-1 py-2.5 px-4 bg-gradient-to-r from-pink-500 to-teal-500 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-teal-600 focus:ring-4 focus:ring-pink-200 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Creating...
                      </div>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Divider */}
           
           

            {/* Login Link */}
                  <div className="text-center mt-4">
                    <p className="text-gray-600 text-sm">
                    Already have an account?{' '}
                    <button 
                      onClick={() => window.location.href = '/'}
                      className="text-teal-600 hover:text-teal-800 font-semibold transition-colors">
                      Sign in here
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
          <p className="text-white/90">Join Our Community</p>
        </div>
      </div>
    </div>
  );
};


export default PetSignupPage;