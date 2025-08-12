import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // import here
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import HomeStealth from "./pages/HomeStealth";
import HomeAttack from "./pages/HomeAttack";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Career from "./pages/Career";
import Portfolio from "./pages/Portfolio";

// Portfolio Case Pages
import Smm1 from "./pages/portfolio/Smm1";
import Smm2 from "./pages/portfolio/Smm2";
import PMS from "./pages/portfolio/PMS";
import OCS from "./pages/portfolio/OCS";
import CB2B from "./pages/portfolio/CB2B";

// Services
import Automation from "./pages/services/Automation";
import B2B from "./pages/services/B2B";
import Blog from "./pages/services/Blog";
import CommunityEngagement from "./pages/services/CommunityEngagement";
import CommunityManagement from "./pages/services/CommunityManagement";
import ContentCreation from "./pages/services/ContentCreation";
import CopyWriting from "./pages/services/CopyWriting";
import Ecommerce from "./pages/services/Ecommerce";
import EmailCampaigns from "./pages/services/EmailCampaigns";
import EmailMarketing from "./pages/services/EmailMarketing";
import FacebookMarketing from "./pages/services/FacebookMarketing";
import Feedback from "./pages/services/Feedback";
import InstaMarketing from "./pages/services/InstaMarketing";
import OnlineEngagement from "./pages/services/OnlineEngagement";
import SocialListening from "./pages/services/SocialListening";
import VideoContent from "./pages/services/VideoContent";

export default function App() {
  const [isStealth, setIsStealth] = useState(false);

  const toggleMode = () => {
    setIsStealth((prev) => !prev);
  };

  return (
    <Router>
     <ScrollToTop /> {/* Add here so it runs on every route change */}
      <Navbar toggleMode={toggleMode} isStealth={isStealth} />
      <Routes>
        <Route path="/" element={isStealth ? <HomeStealth /> : <HomeAttack />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Portfolio Cases */}
        <Route path="/portfolio/smm1" element={<Smm1 />} />
        <Route path="/portfolio/smm2" element={<Smm2 />} />
        <Route path="/portfolio/pms" element={<PMS />} />
        <Route path="/portfolio/ocs" element={<OCS />} />
        <Route path="/portfolio/cb2b" element={<CB2B />} />

        {/* Services */}
        <Route path="/services/automation" element={<Automation />} />
        <Route path="/services/b2b" element={<B2B />} />
        <Route path="/services/blog" element={<Blog />} />
        <Route path="/services/communityengagement" element={<CommunityEngagement />} />
        <Route path="/services/communitymanagement" element={<CommunityManagement />} />
        <Route path="/services/contentcreation" element={<ContentCreation />} />
        <Route path="/services/copywriting" element={<CopyWriting />} />
        <Route path="/services/ecommerce" element={<Ecommerce />} />
        <Route path="/services/emailcampaign" element={<EmailCampaigns />} />
        <Route path="/services/emailmarketing" element={<EmailMarketing />} />
        <Route path="/services/facebookmarketing" element={<FacebookMarketing />} />
        <Route path="/services/feedback" element={<Feedback />} />
        <Route path="/services/instamarketing" element={<InstaMarketing />} />
        <Route path="/services/onlineengagement" element={<OnlineEngagement />} />
        <Route path="/services/sociallistening" element={<SocialListening />} />
        <Route path="/services/videocontent" element={<VideoContent />} />
      </Routes>
      <Footer />
    </Router>
  );
}
