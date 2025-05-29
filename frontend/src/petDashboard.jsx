import React, { useState, useEffect } from 'react';
import { 
  User, 
  Heart, 
  Calendar, 
  ShoppingCart, 
  BarChart3, 
  MessageCircle, 
  Bell, 
  Settings,
  PawPrint,
  Camera,
  MapPin,
  Phone,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  Award,
  Users,
  Activity
} from 'lucide-react';

const PetDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [notifications, setNotifications] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sidebarItems = [
    { id: 'home', icon: PawPrint, label: 'Homepage', badge: null },
    { id: 'profile', icon: User, label: 'Pet Profile', badge: null },
    { id: 'schedule', icon: Calendar, label: 'Schedule', badge: 2 },
    { id: 'records', icon: Activity, label: 'Records', badge: null },
     { id: 'AI', icon: Camera, label: 'AI Monitoring', badge: null },
    { id: 'support', icon: MessageCircle, label: 'Vet Support', badge: 1 },
    { id: 'shop', icon: ShoppingCart, label: 'Shop', badge: null },
   
  ];

  const petProfiles = [
    {
      id: 1,
      name: 'Luna',
      type: 'Golden Retriever',
      age: '3 years',
      image: '🐕',
      health: 95,
      nextMeal: '2:30 PM',
      status: 'Happy'
    },
    {
      id: 2,
      name: 'Whiskers',
      type: 'Persian Cat',
      age: '2 years',
      image: '🐱',
      health: 88,
      nextMeal: '3:00 PM',
      status: 'Sleepy'
    }
  ];

  const upcomingSchedule = [
    { time: '2:30 PM', activity: 'Feeding Time', type: 'meal' },
    { time: '4:00 PM', activity: 'Walk in Park', type: 'exercise' },
    { time: '6:00 PM', activity: 'Vet Checkup', type: 'health' },
  ];

  const healthRecords = [
    { date: '2025-05-20', type: 'Vaccination', status: 'completed' },
    { date: '2025-05-18', type: 'Weight Check', status: 'completed' },
    { date: '2025-05-25', type: 'Dental Cleaning', status: 'upcoming' },
  ];

  const renderHomePage = () => (
    <div className="space-y-6 ">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-teal-400 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className={`absolute top-0 right-0 transform transition-transform duration-1000 ${isAnimating ? 'translate-x-2 -translate-y-2' : 'translate-x-0 translate-y-0'}`}>
          <div className="text-6xl opacity-20">🐾</div>
        </div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, Pet Parent! 🎉</h1>
        <p className="text-pink-100">Your furry friends are waiting for some love today</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-pink-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Health Score</p>
              <p className="text-2xl font-bold text-pink-600">92%</p>
            </div>
            <Heart className="text-pink-400 w-8 h-8" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Activities Today</p>
              <p className="text-2xl font-bold text-purple-600">5</p>
            </div>
            <Activity className="text-purple-400 w-8 h-8" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Next Meal</p>
              <p className="text-2xl font-bold text-yellow-600">2:30 PM</p>
            </div>
            <Clock className="text-yellow-400 w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Pet Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {petProfiles.map((pet) => (
          <div key={pet.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-6xl animate-bounce">{pet.image}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">{pet.name}</h3>
                <p className="text-gray-600">{pet.type}</p>
                <p className="text-sm text-gray-500">{pet.age}</p>
              </div>
              <div className="text-right">
                <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                  {pet.status}
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Health Score</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-pink-400 to-teal-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${pet.health}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold">{pet.health}%</span>
                </div>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Next Meal</span>
                <span className="font-semibold text-teal-600">{pet.nextMeal}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-gradient-to-r from-teal-400 to-teal-500 text-white p-4 rounded-xl hover:from-teal-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Camera className="w-6 h-6 mx-auto mb-2" />
            <span className="text-sm font-medium">Take Photo</span>
          </button>
          <button className="bg-gradient-to-r from-pink-400 to-pink-500 text-white p-4 rounded-xl hover:from-pink-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Heart className="w-6 h-6 mx-auto mb-2" />
            <span className="text-sm font-medium">Log Activity</span>
          </button>
          <button className="bg-gradient-to-r from-purple-400 to-purple-500 text-white p-4 rounded-xl hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Calendar className="w-6 h-6 mx-auto mb-2" />
            <span className="text-sm font-medium">Schedule</span>
          </button>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-4 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <ShoppingCart className="w-6 h-6 mx-auto mb-2" />
            <span className="text-sm font-medium">Order Food</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderPetProfile = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-teal-400 to-pink-400 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Pet Profiles</h2>
        <p className="text-teal-100">Manage your pet's information and health records</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {petProfiles.map((pet) => (
          <div key={pet.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-8xl mb-4 animate-pulse">{pet.image}</div>
              <h3 className="text-2xl font-bold text-gray-800">{pet.name}</h3>
              <p className="text-gray-600">{pet.type} • {pet.age}</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-700 mb-2">Basic Info</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Breed:</span>
                    <p className="font-medium">{pet.type}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Age:</span>
                    <p className="font-medium">{pet.age}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Weight:</span>
                    <p className="font-medium">25 kg</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Status:</span>
                    <p className="font-medium text-teal-600">{pet.status}</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-teal-400 to-pink-400 text-white py-3 rounded-lg hover:from-teal-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 font-medium">
                Edit Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-400 to-teal-400 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Schedule & Activities</h2>
        <p className="text-purple-100">Keep track of your pet's daily routine</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Today's Schedule</h3>
          <div className="space-y-4">
            {upcomingSchedule.map((item, index) => (
              <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg border-l-4 ${
                item.type === 'meal' ? 'border-pink-400 bg-pink-50' :
                item.type === 'exercise' ? 'border-teal-400 bg-teal-50' :
                'border-purple-400 bg-purple-50'
              } hover:shadow-md transition-all duration-300`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  item.type === 'meal' ? 'bg-pink-200' :
                  item.type === 'exercise' ? 'bg-teal-200' :
                  'bg-purple-200'
                }`}>
                  {item.type === 'meal' ? '🍽️' : item.type === 'exercise' ? '🏃' : '🏥'}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{item.activity}</p>
                  <p className="text-gray-600 text-sm">{item.time}</p>
                </div>
                <button className="text-teal-600 hover:text-teal-700 transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Add</h3>
          <div className="space-y-3">
            <button className="w-full bg-pink-100 hover:bg-pink-200 text-pink-700 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              + Add Meal Time
            </button>
            <button className="w-full bg-teal-100 hover:bg-teal-200 text-teal-700 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              + Schedule Walk
            </button>
            <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              + Vet Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRecords = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Health Records</h2>
        <p className="text-pink-100">Track your pet's health journey</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Recent Records</h3>
          <div className="space-y-4">
            {healthRecords.map((record, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    record.status === 'completed' ? 'bg-green-400' : 'bg-yellow-400'
                  }`}></div>
                  <div>
                    <p className="font-semibold text-gray-800">{record.type}</p>
                    <p className="text-sm text-gray-600">{record.date}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  record.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {record.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Health Analytics</h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-teal-100 to-pink-100 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700">Weight Trend</span>
                <TrendingUp className="text-teal-600 w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-teal-600">↗ Healthy</div>
            </div>
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700">Activity Level</span>
                <Activity className="text-pink-600 w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-pink-600">High</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSupport = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-teal-400 to-purple-400 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Vet Support</h2>
        <p className="text-teal-100">Get professional help for your pets</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Consultation</h3>
          <div className="space-y-4">
            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-2">Basic Q&A</h4>
              <p className="text-teal-600 text-sm mb-3">Get answers to common pet questions</p>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-all duration-300">
                Start Chat
              </button>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-semibold text-pink-800 mb-2">Video Consultation</h4>
              <p className="text-pink-600 text-sm mb-3">Book a video call with a vet</p>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-all duration-300">
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Available Vets</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300">
              <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center">
                👨‍⚕️
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">Dr. Smith</p>
                <p className="text-sm text-gray-600">General Veterinarian</p>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">4.9 (127 reviews)</span>
                </div>
              </div>
              <button className="bg-teal-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-teal-600 transition-all duration-300">
                Contact
              </button>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300">
              <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                👩‍⚕️
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">Dr. Johnson</p>
                <p className="text-sm text-gray-600">Pet Nutritionist</p>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">4.8 (89 reviews)</span>
                </div>
              </div>
              <button className="bg-pink-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-pink-600 transition-all duration-300">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderShop = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Pet Shop</h2>
        <p className="text-purple-100">Everything your pet needs, delivered to your door</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Premium Dog Food', price: '$45.99', image: '🥘', category: 'Food', rating: 4.8 },
          { name: 'Interactive Toy', price: '$12.99', image: '🧸', category: 'Toys', rating: 4.6 },
          { name: 'Comfort Bed', price: '$89.99', image: '🛏️', category: 'Accessories', rating: 4.9 },
          { name: 'Health Treats', price: '$19.99', image: '🦴', category: 'Food', rating: 4.7 },
          { name: 'Grooming Kit', price: '$34.99', image: '✂️', category: 'Care', rating: 4.5 },
          { name: 'Travel Carrier', price: '$67.99', image: '🎒', category: 'Travel', rating: 4.8 }
        ].map((product, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{product.image}</div>
              <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs font-medium">
                {product.category}
              </span>
            </div>
            
            <h4 className="font-bold text-gray-800 mb-2">{product.name}</h4>
            <div className="flex items-center mb-3">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-teal-600">{product.price}</span>
              <button className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'home': return renderHomePage();
      case 'profile': return renderPetProfile();
      case 'schedule': return renderSchedule();
      case 'records': return renderRecords();
      case 'support': return renderSupport();
      case 'shop': return renderShop();
      default: return renderHomePage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-pink-50 to-purple-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-2xl min-h-screen sticky top-0">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-pink-400 rounded-lg flex items-center justify-center">
                <PawPrint className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-pink-600 bg-clip-text text-transparent">
                  AutoPaws
                </h1>
                <p className="text-xs text-gray-500">One Stop Pet Feeding Solution</p>
              </div>
            </div>

            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-teal-400 to-pink-400 text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="bg-gradient-to-r from-teal-100 to-pink-100 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-pink-400 rounded-full flex items-center justify-center">
                  <User className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sarah Johnson</p>
                  <p className="text-xs text-gray-600">Pet Parent</p>
                </div>
              </div>
              <button className="w-full bg-white text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 text-sm font-medium">
                Settings
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-10">
            <div className="px-8 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 capitalize">{activeTab}</h2>
                  <p className="text-gray-600 text-sm">
                    {new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors">
                    <Bell className="w-6 h-6" />
                    {notifications > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                        {notifications}
                      </span>
                    )}
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                    <Settings className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Page Content */}
          <div className="p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDashboard;