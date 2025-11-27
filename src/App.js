// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { 
  Sprout, Camera, BarChart3, Cloud, Users, ShoppingCart, 
  DollarSign, BookOpen, Leaf, MessageSquare, Award, Package,
  TrendingUp, Droplets, Sun, AlertTriangle, CheckCircle,
  Menu, X, Home, Bell, Settings, User, Upload, Search,
  MapPin, Calendar, ArrowRight, Heart, Repeat, Trash2
} from 'lucide-react';

const SmartFarmConnect = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState(3);
  const [selectedImage, setSelectedImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Simulated user data
  useEffect(() => {
    setUser({
      name: 'Karim Karimov',
      location: 'Qax, Azerbaycan',
      crops: ['Wheat', 'Rice', 'Vegetables'],
      farmSize: '5 acres'
    });
  }, []);

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'scanner', label: 'Crop Scanner', icon: Camera },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'weather', label: 'Weather', icon: Cloud },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingCart },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'finance', label: 'Finance', icon: DollarSign },
    { id: 'learning', label: 'Learning', icon: BookOpen },
  ];

  // AI Crop Analysis Function
  const analyzeCropImage = async (imageFile) => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const diseases = [
        { name: 'Early Blight', confidence: 87, severity: 'Medium' },
        { name: 'Nutrient Deficiency (Nitrogen)', confidence: 72, severity: 'Low' },
        { name: 'Pest Damage (Aphids)', confidence: 65, severity: 'Low' }
      ];
      
      const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
      
      setAnalysisResult({
        disease: randomDisease,
        recommendations: [
          'Apply organic neem oil spray every 3 days',
          'Increase nitrogen-rich fertilizer application',
          'Ensure proper drainage to prevent fungal growth',
          'Remove affected leaves to prevent spread'
        ],
        preventiveMeasures: [
          'Rotate crops annually',
          'Maintain proper spacing between plants',
          'Monitor soil pH regularly'
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        analyzeCropImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  // Page Components
  const HomePage = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-green-100 mb-4">Let's make your farm more productive today</p>
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => setCurrentPage('scanner')}
            className="bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            Scan Crop Now
          </button>
          <button 
            onClick={() => setCurrentPage('marketplace')}
            className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-400 transition"
          >
            Sell Produce
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard icon={Sprout} label="Active Crops" value="3" color="green" />
        <StatCard icon={TrendingUp} label="Expected Yield" value="+15%" color="blue" />
        <StatCard icon={DollarSign} label="This Month" value="₹45,200" color="purple" />
        <StatCard icon={Package} label="Products Listed" value="8" color="orange" />
      </div>

      {/* Weather Alert */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-yellow-900">Weather Alert</h3>
            <p className="text-yellow-800 text-sm">Heavy rainfall expected in next 48 hours. Consider harvesting mature crops.</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <QuickActionCard icon={Camera} label="Scan Crop" onClick={() => setCurrentPage('scanner')} />
        <QuickActionCard icon={Cloud} label="Weather" onClick={() => setCurrentPage('weather')} />
        <QuickActionCard icon={MessageSquare} label="Forum" onClick={() => setCurrentPage('community')} />
        <QuickActionCard icon={BookOpen} label="Learn" onClick={() => setCurrentPage('learning')} />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <ActivityItem 
            icon={CheckCircle} 
            text="Crop health scan completed - Wheat Field A" 
            time="2 hours ago"
            color="green"
          />
          <ActivityItem 
            icon={ShoppingCart} 
            text="New order received - 50kg Tomatoes" 
            time="5 hours ago"
            color="blue"
          />
          <ActivityItem 
            icon={Users} 
            text="3 new responses on your forum post" 
            time="1 day ago"
            color="purple"
          />
        </div>
      </div>
    </div>
  );

  const CropScannerPage = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-2">AI Crop Health Scanner</h2>
        <p className="text-gray-600 mb-6">Upload a photo of your crop to detect diseases, pests, and nutrient deficiencies</p>

        {/* Upload Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-500 transition">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload}
            className="hidden" 
            id="crop-upload"
          />
          <label htmlFor="crop-upload" className="cursor-pointer">
            {selectedImage ? (
              <img src={selectedImage} alt="Crop" className="max-h-64 mx-auto rounded-lg mb-4" />
            ) : (
              <div className="flex flex-col items-center">
                <Camera size={48} className="text-gray-400 mb-4" />
                <p className="text-lg font-semibold text-gray-700">Click to upload crop photo</p>
                <p className="text-sm text-gray-500 mt-2">or drag and drop here</p>
              </div>
            )}
          </label>
        </div>

        {/* Analysis Result */}
        {isAnalyzing && (
          <div className="mt-6 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            <p className="mt-3 text-gray-600">Analyzing crop health...</p>
          </div>
        )}

        {analysisResult && !isAnalyzing && (
          <div className="mt-6 space-y-4">
            {/* Detection Result */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-red-900 text-lg">{analysisResult.disease.name}</h3>
                  <p className="text-sm text-red-700">Severity: {analysisResult.disease.severity}</p>
                </div>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {analysisResult.disease.confidence}% confidence
                </span>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                Recommended Actions
              </h3>
              <ul className="space-y-2">
                {analysisResult.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-bold">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preventive Measures */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-900 mb-3">Preventive Measures</h3>
              <ul className="space-y-2">
                {analysisResult.preventiveMeasures.map((measure, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-blue-800">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{measure}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => { setSelectedImage(null); setAnalysisResult(null); }}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Scan Another Crop
            </button>
          </div>
        )}
      </div>

      {/* Scan History */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4">Recent Scans</h3>
        <div className="space-y-3">
          <ScanHistoryItem crop="Tomato Plant" issue="Leaf Curl" date="Today" status="Treated" />
          <ScanHistoryItem crop="Wheat Field A" issue="Rust Disease" date="2 days ago" status="Monitoring" />
          <ScanHistoryItem crop="Rice Paddy" issue="Healthy" date="1 week ago" status="Healthy" />
        </div>
      </div>
    </div>
  );

  const DashboardPage = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Smart Farming Dashboard</h2>
      
      {/* Crop Growth Trends */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4">Crop Growth Trends</h3>
        <div className="h-48 bg-gradient-to-r from-green-50 to-green-100 rounded-lg flex items-end justify-around p-4">
          <div className="flex flex-col items-center">
            <div className="bg-green-500 w-16" style={{height: '60%'}}></div>
            <span className="text-sm mt-2">Week 1</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 w-16" style={{height: '75%'}}></div>
            <span className="text-sm mt-2">Week 2</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-600 w-16" style={{height: '90%'}}></div>
            <span className="text-sm mt-2">Week 3</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-600 w-16" style={{height: '85%'}}></div>
            <span className="text-sm mt-2">Week 4</span>
          </div>
        </div>
      </div>

      {/* Predictions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <TrendingUp size={32} className="mb-3" />
          <h3 className="font-bold text-lg mb-2">Yield Prediction</h3>
          <p className="text-3xl font-bold mb-2">+15%</p>
          <p className="text-blue-100 text-sm">Expected increase if recommendations are followed</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <Droplets size={32} className="mb-3" />
          <h3 className="font-bold text-lg mb-2">Water Efficiency</h3>
          <p className="text-3xl font-bold mb-2">23% saved</p>
          <p className="text-purple-100 text-sm">Compared to last season</p>
        </div>
      </div>

      {/* Soil Health & Fertilizer */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4">Soil Health Report</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard label="pH Level" value="6.8" status="Optimal" color="green" />
          <MetricCard label="Nitrogen" value="Medium" status="Good" color="yellow" />
          <MetricCard label="Moisture" value="65%" status="Good" color="blue" />
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4">AI-Powered Recommendations</h3>
        <div className="space-y-3">
          <RecommendationCard 
            title="Irrigation Schedule" 
            description="Reduce watering frequency by 20% due to upcoming rainfall"
            priority="high"
          />
          <RecommendationCard 
            title="Fertilizer Application" 
            description="Apply potassium-rich fertilizer to wheat field in next 3 days"
            priority="medium"
          />
          <RecommendationCard 
            title="Crop Rotation" 
            description="Consider planting legumes in Field B next season"
            priority="low"
          />
        </div>
      </div>
    </div>
  );

  const WeatherPage = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Weather & Risk Alerts</h2>
      
      {/* Current Weather */}
      <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-blue-100">Today's Weather</p>
            <h3 className="text-3xl font-bold">28°C</h3>
          </div>
          <Sun size={64} className="text-yellow-300" />
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-blue-100">Humidity</p>
            <p className="font-semibold">65%</p>
          </div>
          <div>
            <p className="text-blue-100">Wind</p>
            <p className="font-semibold">12 km/h</p>
          </div>
          <div>
            <p className="text-blue-100">Rainfall</p>
            <p className="font-semibold">0 mm</p>
          </div>
        </div>
      </div>

      {/* 7-Day Forecast */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4">7-Day Forecast</h3>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
          <DayForecast day="Mon" temp="29°C" icon={Sun} />
          <DayForecast day="Tue" temp="27°C" icon={Cloud} />
          <DayForecast day="Wed" temp="26°C" icon={Cloud} />
          <DayForecast day="Thu" temp="25°C" icon={Droplets} />
          <DayForecast day="Fri" temp="24°C" icon={Droplets} />
          <DayForecast day="Sat" temp="26°C" icon={Cloud} />
          <DayForecast day="Sun" temp="28°C" icon={Sun} />
        </div>
      </div>

      {/* Risk Alerts */}
      <div className="space-y-3">
        <AlertCard 
          type="warning" 
          title="Heavy Rainfall Alert" 
          description="Expected rainfall of 80mm in next 48 hours. Ensure proper drainage."
          icon={Droplets}
        />
        <AlertCard 
          type="info" 
          title="Pest Outbreak Risk" 
          description="Conditions favorable for aphid activity. Monitor crops closely."
          icon={AlertTriangle}
        />
      </div>

      {/* Seasonal Calendar */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4">Seasonal Crop Calendar</h3>
        <div className="space-y-3">
          <CalendarItem month="December" action="Plant winter vegetables" crops="Cabbage, Carrot, Peas" />
          <CalendarItem month="January" action="Harvest wheat" crops="Wheat, Barley" />
          <CalendarItem month="February" action="Prepare for spring" crops="Tomato seeds, Pepper" />
        </div>
      </div>
    </div>
  );

  const MarketplacePage = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Marketplace</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
          + List Product
        </button>
      </div>

      {/* Farmer's Storefront */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4">Your Storefront</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProductCard 
            name="Fresh Tomatoes" 
            price="₹40/kg" 
            stock="150 kg" 
            image="🍅"
          />
          <ProductCard 
            name="Organic Spinach" 
            price="₹30/kg" 
            stock="80 kg" 
            image="🥬"
          />
          <ProductCard 
            name="Farm Eggs" 
            price="₹120/dozen" 
            stock="50 dozen" 
            image="🥚"
          />
        </div>
      </div>

      {/* Inventory Assistant */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Package className="text-blue-600 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-blue-900">Smart Inventory Alert</h3>
            <p className="text-blue-800 text-sm">You have surplus tomatoes (150kg). Consider promoting or reducing price by 10% to sell faster.</p>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4">Recent Orders</h3>
        <div className="space-y-3">
          <OrderItem customer="Green Valley Restaurant" product="Tomatoes - 50kg" amount="₹2,000" status="Delivered" />
          <OrderItem customer="Local Supermarket" product="Spinach - 30kg" amount="₹900" status="Pending" />
          <OrderItem customer="Mrs. Sharma" product="Farm Eggs - 5 dozen" amount="₹600" status="Delivered" />
        </div>
      </div>

      {/* Waste Reduction */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Leaf className="text-green-600" />
          Waste Reduction Exchange
        </h3>
        <p className="text-gray-600 text-sm mb-4">Post surplus produce to prevent waste</p>
        <div className="space-y-3">
          <WasteExchangeItem farmer="Amit Singh" product="Cauliflower - 20kg" location="2km away" />
          <WasteExchangeItem farmer="Priya Devi" product="Carrots - 15kg" location="5km away" />
        </div>
      </div>
    </div>
  );

  const CommunityPage = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Community Forum</h2>
      
      {/* Post Question */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold mb-3">Ask the Community</h3>
        <textarea 
          placeholder="Describe your farming question or challenge..."
          className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          rows="3"
        ></textarea>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
          Post Question
        </button>
      </div>

      {/* Forum Posts */}
      <div className="space-y-4">
        <ForumPost 
          author="Vikram Patel"
          question="My tomato leaves are turning yellow. What could be the issue?"
          answers={12}
          upvotes={28}
          time="2 hours ago"
        />
        <ForumPost 
          author="Sunita Rao"
          question="Best organic pest control methods for wheat crops?"
          answers={8}
          upvotes={15}
          time="5 hours ago"
        />
        <ForumPost 
          author="Mohan Kumar"
          question="How to improve soil fertility naturally?"
          answers={22}
          upvotes={45}
          time="1 day ago"
        />
      </div>

      {/* Success Stories */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Award size={24} />
          Success Stories
        </h3>
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <p className="font-semibold mb-2">Increased yield by 30% with drip irrigation</p>
          <p className="text-green-50 text-sm mb-2">
            "After implementing the AI recommendations and switching to drip irrigation, 
            my water costs decreased by 40% and crop yield increased significantly."
          </p>
          <p className="text-green-100 text-xs">- Ramesh Verma, Haryana</p>
        </div>
      </div>

      {/* Ask an Expert */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4">Ask an Expert</h3>
        <p className="text-gray-600 text-sm mb-4">Get professional advice from agricultural experts</p>
        <button className="border-2 border-green-600 text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
          Submit Question to Expert
        </button>
      </div>
    </div>
  );

  const FinancePage = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Financial Management</h2>
      
      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FinanceCard label="Total Income" value="₹1,24,500" change="+12%" color="green" />
        <FinanceCard label="Total Expenses" value="₹79,200" change="-5%" color="red" />
        <FinanceCard label="Net Profit" value="₹45,300" change="+18%" color="blue" />
      </div>

      {/* Expense Breakdown */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4">Expense Breakdown</h3>
        <div className="space-y-3">
          <ExpenseItem category="Seeds & Fertilizer" amount="₹32,000" percentage="40%" />
          <ExpenseItem category="Water & Irrigation" amount="₹18,500" percentage="23%" />
          <ExpenseItem category="Equipment" amount="₹15,200" percentage="19%" />
          <ExpenseItem category="Labor" amount="₹13,500" percentage="18%" />
        </div>
      </div>

      {/* Crop Profitability */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4">Crop Profitability</h3>
        <div className="space-y-3">
          <ProfitItem crop="Tomatoes" revenue="₹52,000" cost="₹28,000" profit="₹24,000" />
          <ProfitItem crop="Wheat" revenue="₹45,000" cost="₹32,000" profit="₹13,000" />
          <ProfitItem crop="Vegetables" revenue="₹27,500" cost="₹19,200" profit="₹8,300" />
        </div>
      </div>

      {/* Government Schemes */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4">Available Government Schemes</h3>
        <div className="space-y-3">
          <SchemeCard 
            name="PM-KISAN Subsidy" 
            amount="₹6,000/year" 
            description="Direct income support for farmers"
            status="Eligible"
          />
          <SchemeCard 
            name="Drip Irrigation Subsidy" 
            amount="Up to 50%" 
            description="Financial support for water-saving equipment"
            status="Apply Now"
          />
        </div>
      </div>
    </div>
  );

  const LearningPage = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Learning Resources</h2>
      
      {/* Video Tutorials */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4">Video Tutorials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <VideoCard title="Organic Pest Control Methods" duration="12 min" views="2.3K" />
          <VideoCard title="Soil Preparation Techniques" duration="18 min" views="4.1K" />
          <VideoCard title="Water Conservation Strategies" duration="15 min" views="3.5K" />
          <VideoCard title="Crop Rotation Best Practices" duration="20 min" views="5.2K" />
        </div>
      </div>

      {/* Seasonal Tips */}
      <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl p-6 text-white">
        <h3 className="font-bold text-lg mb-3">This Month's Tips</h3>
        <ul className="space-y-2 text-orange-50">
          <li>• Perfect time to plant winter vegetables</li>
          <li>• Prepare soil with organic compost</li>
          <li>• Check irrigation systems before winter</li>
        </ul>
      </div>

      {/* Tool Finder */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-lg mb-4">Recommended Tools</h3>
        <div className="space-y-3">
          <ToolCard name="Soil pH Tester" price="₹450" description="Digital pH meter for soil testing" />
          <ToolCard name="Drip Irrigation Kit" price="₹2,800" description="Water-saving irrigation system" />
          <ToolCard name="Manual Sprayer" price="₹650" description="For organic pesticide application" />
        </div>
      </div>
    </div>
  );

  // Helper Components
  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className={`bg-${color}-100 p-3 rounded-lg`}>
          <Icon className={`text-${color}-600`} size={24} />
        </div>
        <div>
          <p className="text-gray-600 text-sm">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );

  const QuickActionCard = ({ icon: Icon, label, onClick }) => (
    <button 
      onClick={onClick}
      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition text-center"
    >
      <Icon className="mx-auto mb-2 text-green-600" size={32} />
      <p className="font-semibold text-sm">{label}</p>
    </button>
  );

  const ActivityItem = ({ icon: Icon, text, time, color }) => (
    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
      <Icon className={`text-${color}-600 flex-shrink-0 mt-1`} size={20} />
      <div className="flex-1">
        <p className="text-sm text-gray-800">{text}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );

  const ScanHistoryItem = ({ crop, issue, date, status }) => (
    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
      <div>
        <p className="font-semibold text-sm">{crop}</p>
        <p className="text-xs text-gray-600">{issue} • {date}</p>
      </div>
      <span className={`text-xs px-3 py-1 rounded-full ${
        status === 'Healthy' ? 'bg-green-100 text-green-800' :
        status === 'Treated' ? 'bg-blue-100 text-blue-800' :
        'bg-yellow-100 text-yellow-800'
      }`}>
        {status}
      </span>
    </div>
  );

  const MetricCard = ({ label, value, status, color }) => (
    <div className="border border-gray-200 rounded-lg p-4">
      <p className="text-gray-600 text-sm mb-1">{label}</p>
      <p className="text-2xl font-bold mb-1">{value}</p>
      <span className={`text-xs px-2 py-1 rounded-full bg-${color}-100 text-${color}-800`}>
        {status}
      </span>
    </div>
  );

  const RecommendationCard = ({ title, description, priority }) => (
    <div className={`p-4 rounded-lg border-l-4 ${
      priority === 'high' ? 'bg-red-50 border-red-500' :
      priority === 'medium' ? 'bg-yellow-50 border-yellow-500' :
      'bg-blue-50 border-blue-500'
    }`}>
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="text-sm text-gray-700 mt-1">{description}</p>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${
          priority === 'high' ? 'bg-red-200 text-red-800' :
          priority === 'medium' ? 'bg-yellow-200 text-yellow-800' :
          'bg-blue-200 text-blue-800'
        }`}>
          {priority}
        </span>
      </div>
    </div>
  );

  const DayForecast = ({ day, temp, icon: Icon }) => (
    <div className="bg-gray-50 rounded-lg p-3 text-center">
      <p className="text-sm font-semibold mb-2">{day}</p>
      <Icon className="mx-auto text-blue-600 mb-2" size={24} />
      <p className="text-sm font-bold">{temp}</p>
    </div>
  );

  const AlertCard = ({ type, title, description, icon: Icon }) => (
    <div className={`rounded-lg p-4 ${
      type === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
      'bg-blue-50 border border-blue-200'
    }`}>
      <div className="flex items-start gap-3">
        <Icon className={type === 'warning' ? 'text-yellow-600' : 'text-blue-600'} size={24} />
        <div>
          <h4 className="font-semibold mb-1">{title}</h4>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );

  const CalendarItem = ({ month, action, crops }) => (
    <div className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
      <Calendar className="text-green-600 flex-shrink-0" size={20} />
      <div>
        <p className="font-semibold text-sm">{month}</p>
        <p className="text-sm text-gray-700">{action}</p>
        <p className="text-xs text-gray-500 mt-1">{crops}</p>
      </div>
    </div>
  );

  const ProductCard = ({ name, price, stock, image }) => (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
      <div className="text-5xl text-center mb-3">{image}</div>
      <h4 className="font-semibold mb-1">{name}</h4>
      <p className="text-green-600 font-bold mb-2">{price}</p>
      <p className="text-sm text-gray-600">Stock: {stock}</p>
      <button className="w-full mt-3 bg-green-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition">
        Edit Listing
      </button>
    </div>
  );

  const OrderItem = ({ customer, product, amount, status }) => (
    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
      <div>
        <p className="font-semibold text-sm">{customer}</p>
        <p className="text-xs text-gray-600">{product}</p>
      </div>
      <div className="text-right">
        <p className="font-bold text-sm">{amount}</p>
        <span className={`text-xs px-2 py-1 rounded-full ${
          status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {status}
        </span>
      </div>
    </div>
  );

  const WasteExchangeItem = ({ farmer, product, location }) => (
    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
      <div>
        <p className="font-semibold text-sm">{farmer}</p>
        <p className="text-xs text-gray-600">{product}</p>
        <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
          <MapPin size={12} /> {location}
        </p>
      </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition">
        Claim
      </button>
    </div>
  );

  const ForumPost = ({ author, question, answers, upvotes, time }) => (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
          <User className="text-green-600" size={20} />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-sm">{author}</p>
          <p className="text-gray-800 mt-1">{question}</p>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <MessageSquare size={16} /> {answers} answers
            </span>
            <span className="flex items-center gap-1">
              <ArrowRight size={16} /> {upvotes} upvotes
            </span>
            <span className="text-xs">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const FinanceCard = ({ label, value, change, color }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <p className="text-gray-600 text-sm mb-2">{label}</p>
      <p className="text-3xl font-bold mb-2">{value}</p>
      <span className={`text-sm font-semibold ${
        color === 'green' ? 'text-green-600' : color === 'red' ? 'text-red-600' : 'text-blue-600'
      }`}>
        {change}
      </span>
    </div>
  );

  const ExpenseItem = ({ category, amount, percentage }) => (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-semibold">{category}</span>
        <span className="text-sm">{amount}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-green-600 h-2 rounded-full" style={{width: percentage}}></div>
      </div>
    </div>
  );

  const ProfitItem = ({ crop, revenue, cost, profit }) => (
    <div className="p-3 border border-gray-200 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold">{crop}</span>
        <span className="text-green-600 font-bold">{profit}</span>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>Revenue: {revenue}</span>
        <span>Cost: {cost}</span>
      </div>
    </div>
  );

  const SchemeCard = ({ name, amount, description, status }) => (
    <div className="p-4 border border-gray-200 rounded-lg">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-green-600 font-bold text-sm">{amount}</p>
        </div>
        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">
          {status}
        </span>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  const VideoCard = ({ title, duration, views }) => (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition cursor-pointer">
      <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg h-32 mb-3 flex items-center justify-center">
        <BookOpen className="text-white" size={48} />
      </div>
      <h4 className="font-semibold text-sm mb-2">{title}</h4>
      <div className="flex items-center justify-between text-xs text-gray-600">
        <span>{duration}</span>
        <span>{views} views</span>
      </div>
    </div>
  );

  const ToolCard = ({ name, price, description }) => (
    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
      <div>
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
      <div className="text-right">
        <p className="font-bold text-sm text-green-600">{price}</p>
        <button className="text-xs text-blue-600 hover:underline">View</button>
      </div>
    </div>
  );

  // Main Render
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sprout className="text-green-600" size={32} />
              <div>
                <h1 className="text-xl font-bold text-gray-900">SmartFarmConnect</h1>
                <p className="text-xs text-gray-600">AI-Powered Farming Platform</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <Bell size={24} className="text-gray-600" />
                {notifications > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Settings size={24} className="text-gray-600" />
              </button>
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Navigation */}
          <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
            <div className="bg-white rounded-xl shadow-sm p-4 space-y-2">
              {navItems.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      currentPage === item.id
                        ? 'bg-green-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* User Profile Card */}
            <div className="bg-white rounded-xl shadow-sm p-4 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <User className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-sm">{user?.name}</p>
                  <p className="text-xs text-gray-600">{user?.location}</p>
                </div>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <p>Farm Size: {user?.farmSize}</p>
                <p>Crops: {user?.crops.join(', ')}</p>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'scanner' && <CropScannerPage />}
            {currentPage === 'dashboard' && <DashboardPage />}
            {currentPage === 'weather' && <WeatherPage />}
            {currentPage === 'marketplace' && <MarketplacePage />}
            {currentPage === 'community' && <CommunityPage />}
            {currentPage === 'finance' && <FinancePage />}
            {currentPage === 'learning' && <LearningPage />}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-600">
            <p className="font-semibold mb-2">SmartFarmConnect - Empowering Farmers with AI</p>
            <p>© 2024 SmartFarmConnect. Supporting local farmers worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartFarmConnect;