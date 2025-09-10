import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowUp, ChevronUp } from 'lucide-react';
import './App.css';

// Import state images
import wisconsinImg from './assets/wisconsin.png';
import minnesotaImg from './assets/minnesota.png';
import michiganImg from './assets/michigan_final.png';
import illinoisImg from './assets/illinois_final.png';
import ohioImg from './assets/ohio.png';
import wccrLogo from './assets/wccr_logo.png';

// Button component
const Button = ({ children, onClick, className = '', variant = 'default', size = 'default', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };
  
  const sizes = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-11 px-8 rounded-md',
    icon: 'h-10 w-10',
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

function App() {
  const [currentChapter, setCurrentChapter] = useState(1)
  const [selectedState, setSelectedState] = useState('minnesota')
  const [showScrollTop, setShowScrollTop] = useState(false)

  // State data
  const stateData = {
    minnesota: {
      name: 'Minnesota',
      taxRevenue: '$150M',
      jobs: '3,500',
      population: '5.7M',
      status: 'Full recreational and medical (2023)',
      successStory: 'Since legalizing cannabis in 2023, Minnesota has generated $150M in tax revenue and created 3,500 jobs, demonstrating the economic benefits of legalization.',
      isLegal: true
    },
    michigan: {
      name: 'Michigan',
      taxRevenue: '$270M',
      jobs: '46,746',
      population: '10M',
      status: 'Full recreational and medical (2018)',
      successStory: 'Since legalizing cannabis in 2018, Michigan has generated $270M in tax revenue and created 46,746 jobs, demonstrating the economic benefits of legalization.',
      isLegal: true
    },
    illinois: {
      name: 'Illinois',
      taxRevenue: '$490M',
      jobs: '9,176',
      population: '12.6M',
      status: 'Full recreational and medical (2020)',
      successStory: 'Since legalizing cannabis in 2020, Illinois has generated $490M in tax revenue and created 9,176 jobs, demonstrating the economic benefits of legalization.',
      isLegal: true
    },
    wisconsin: {
      name: 'Wisconsin',
      taxRevenue: '$0M',
      jobs: '0',
      population: '5.9M',
      status: 'No legal cannabis program',
      successStory: 'Wisconsin residents are driving to neighboring states to purchase cannabis, taking tax revenue and economic benefits with them. $121M annually flowing out of Wisconsin.',
      isLegal: false
    },
    ohio: {
      name: 'Ohio',
      taxRevenue: '$270M',
      jobs: '46,746',
      population: '10M',
      status: 'Full recreational and medical (2018)',
      successStory: 'Since legalizing cannabis in 2018, Ohio has generated $270M in tax revenue and created 46,746 jobs, demonstrating the economic benefits of legalization.',
      isLegal: true
    }
  }

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const nextChapter = () => {
    if (currentChapter < 6) {
      setCurrentChapter(currentChapter + 1)
      const sections = ['hero', 'surrounded-by-green', 'economic-opportunity', 'public-safety', 'agricultural-heritage', 'path-forward']
      scrollToSection(sections[currentChapter])
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Chapter Indicator */}
      <div className="chapter-indicator">
        Chapter {currentChapter} of 6
      </div>

      {/* Hero Section */}
      <section id="hero" className="hero-section min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src={wccrLogo} 
              alt="Wisconsin Coalition for Cannabis Reform" 
              className="wccr-logo mx-auto"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Make Wisconsin<br />
            <span className="text-primary">Green Again</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
            Explore the compelling case for cannabis legalization in Wisconsin through interactive data, economic benefits, and community impact stories.
          </p>
          
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <Button 
              onClick={() => scrollToSection('surrounded-by-green')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
            >
              Begin the Journey
            </Button>
            <a 
              href="https://www.joinwccr.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
            >
              Take Action Now
            </a>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">67%</span>
              <div className="stat-label">Public Support</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">$166M</span>
              <div className="stat-label">Tax Revenue</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">5,000</span>
              <div className="stat-label">New Jobs</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">8th</span>
              <div className="stat-label">Last State</div>
            </div>
          </div>

          <div className="sources">
            Sources: Marquette Law School Poll (2024), Wisconsin Legislative Fiscal Bureau, New Frontier Data, NCSL
          </div>
        </div>
      </section>

      {/* Surrounded by Green Section */}
      <section id="surrounded-by-green" className="section-bg py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 text-primary">Surrounded by Green</h2>
          <p className="text-xl text-center mb-4 text-muted-foreground max-w-4xl mx-auto">
            Wisconsin is one of only 8 states without any form of legal marijuana, while all neighboring states have embraced legalization.
          </p>
          <p className="text-lg text-center mb-12 text-accent">
            Click on each state on the map below to compare their cannabis statistics and success stories.
          </p>

          {/* Two-column layout: Map on left, State data on right */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Interactive Map */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6">Midwest Cannabis Landscape</h3>
              
              {/* Interactive State Images - Rows of 2 */}
              <div className="state-images-rows">
                {/* Row 1: Minnesota and Michigan */}
                <div className="state-row">
                  <button 
                    className={`state-image-button ${selectedState === 'minnesota' ? 'selected' : ''}`}
                    onClick={() => setSelectedState('minnesota')}
                    title="Click to view Minnesota data"
                  >
                    <img 
                      src={minnesotaImg} 
                      alt="Minnesota" 
                      className="state-image"
                    />
                  </button>
                  
                  <button 
                    className={`state-image-button ${selectedState === 'michigan' ? 'selected' : ''}`}
                    onClick={() => setSelectedState('michigan')}
                    title="Click to view Michigan data"
                  >
                    <img 
                      src={michiganImg} 
                      alt="Michigan" 
                      className="state-image"
                    />
                  </button>
                </div>
                
                {/* Row 2: Illinois and Ohio */}
                <div className="state-row">
                  <button 
                    className={`state-image-button ${selectedState === 'illinois' ? 'selected' : ''}`}
                    onClick={() => setSelectedState('illinois')}
                    title="Click to view Illinois data"
                  >
                    <img 
                      src={illinoisImg} 
                      alt="Illinois" 
                      className="state-image"
                    />
                  </button>
                  
                  <button 
                    className={`state-image-button ${selectedState === 'ohio' ? 'selected' : ''}`}
                    onClick={() => setSelectedState('ohio')}
                    title="Click to view Ohio data"
                  >
                    <img 
                      src={ohioImg} 
                      alt="Ohio" 
                      className="state-image"
                    />
                  </button>
                </div>
                
                {/* Row 3: Wisconsin (centered) */}
                <div className="state-row wisconsin-row">
                  <button 
                    className={`state-image-button ${selectedState === 'wisconsin' ? 'selected' : ''}`}
                    onClick={() => setSelectedState('wisconsin')}
                    title="Click to view Wisconsin data"
                  >
                    <img 
                      src={wisconsinImg} 
                      alt="Wisconsin" 
                      className="state-image"
                    />
                  </button>
                </div>
              </div>

              {/* Legend */}
              <div className="flex justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary rounded"></div>
                  <span className="text-sm">Legal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-destructive rounded"></div>
                  <span className="text-sm">Illegal/Limited</span>
                </div>
              </div>
            </div>

            {/* Right Column: State Detail Card */}
            <div className={`state-detail-card ${!stateData[selectedState].isLegal ? 'wisconsin' : ''}`}>
              <h3 className="text-3xl font-bold mb-6 text-center text-primary">
                {stateData[selectedState].name}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="text-center">
                  <div className="text-lg text-muted-foreground">Tax Revenue</div>
                  <div className="text-4xl font-bold text-primary">{stateData[selectedState].taxRevenue}</div>
                </div>
                <div className="text-center">
                  <div className="text-lg text-muted-foreground">Jobs</div>
                  <div className="text-4xl font-bold text-primary">{stateData[selectedState].jobs}</div>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="text-sm text-muted-foreground">Population: {stateData[selectedState].population}</div>
                <div className="text-sm text-muted-foreground">Status: {stateData[selectedState].status}</div>
              </div>

              <div className="bg-card p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-primary">
                  {stateData[selectedState].isLegal ? `${stateData[selectedState].name} Success Story` : 'Money Flowing Out of Wisconsin'}
                </h4>
                <p className="text-muted-foreground">{stateData[selectedState].successStory}</p>
              </div>
            </div>
          </div>

          <div className="sources">
            Sources: NCSL state cannabis tracking, Illinois IDFPR, Michigan CRA, Minnesota OCM, state regulatory agencies (2024)
          </div>

          <button onClick={nextChapter} className="next-chapter-btn">
            Next Chapter
          </button>
        </div>
      </section>

      {/* Economic Opportunity Section */}
      <section id="economic-opportunity" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 text-primary">Economic Opportunity</h2>
          <p className="text-xl text-center mb-12 text-muted-foreground max-w-4xl mx-auto">
            Cannabis legalization could generate significant tax revenue and create thousands of jobs across Wisconsin.
          </p>

          <div className="benefits-grid benefits-grid-3">
            <div className="benefit-card">
              <span className="benefit-percentage">$166M</span>
              <div className="benefit-description">
                <strong>Annual Tax Revenue</strong><br />
                Projected annual tax revenue
              </div>
              <div className="benefit-source">Wisconsin Legislative Fiscal Bureau</div>
            </div>
            <div className="benefit-card">
              <span className="benefit-percentage">5,000</span>
              <div className="benefit-description">
                <strong>Job Creation</strong><br />
                Direct jobs potential
              </div>
              <div className="benefit-source">New Frontier Data</div>
            </div>
            <div className="benefit-card">
              <span className="benefit-percentage">3x</span>
              <div className="benefit-description">
                <strong>Economic Multiplier</strong><br />
                Effect for every $1 spent
              </div>
              <div className="benefit-source">U.S. Bureau of Labor Statistics</div>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-center mb-8 text-primary">Economic Impact Comparison</h3>
          <div className="economic-comparison">
            <div className="comparison-item">
              <div className="comparison-amount">$166M</div>
              <div className="comparison-state">Wisconsin (Projected)</div>
            </div>
            <div className="comparison-item">
              <div className="comparison-amount">$490M</div>
              <div className="comparison-state">Illinois</div>
            </div>
            <div className="comparison-item">
              <div className="comparison-amount">$270M</div>
              <div className="comparison-state">Michigan</div>
            </div>
            <div className="comparison-item">
              <div className="comparison-amount">$150M</div>
              <div className="comparison-state">Minnesota</div>
            </div>
            <div className="comparison-item">
              <div className="comparison-amount">$270M</div>
              <div className="comparison-state">Ohio</div>
            </div>
          </div>

          <div className="sources">
            Sources: Wisconsin Legislative Fiscal Bureau (projections), Illinois IDFPR, Michigan CRA, Minnesota OCM (2024 data)
          </div>

          <button onClick={nextChapter} className="next-chapter-btn">
            Next Chapter
          </button>
        </div>
      </section>

      {/* Public Safety & Health Section */}
      <section id="public-safety" className="section-bg py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 text-primary">Public Safety & Health</h2>
          <p className="text-xl text-center mb-12 text-muted-foreground max-w-4xl mx-auto">
            Evidence from legal states shows improved public safety outcomes, reduced arrests, and significant health benefits for patients.
          </p>

          <div className="benefits-grid benefits-grid-5">
            <div className="benefit-card">
              <span className="benefit-percentage">18%</span>
              <div className="benefit-description">
                <strong>Crime Reduction</strong><br />
                Neighborhood crime decrease
              </div>
              <div className="benefit-source">Economic Inquiry journal (2017)</div>
            </div>
            <div className="benefit-card">
              <span className="benefit-percentage">76%</span>
              <div className="benefit-description">
                <strong>Arrest Reduction</strong><br />
                Cannabis possession arrests decreased
              </div>
              <div className="benefit-source">Multi-state legalization study</div>
            </div>
            <div className="benefit-card">
              <span className="benefit-percentage">13,400</span>
              <div className="benefit-description">
                <strong>Wisconsin Arrests</strong><br />
                Cannabis arrests in 2022 alone
              </div>
              <div className="benefit-source">Wisconsin Department of Justice</div>
            </div>
            <div className="benefit-card">
              <span className="benefit-percentage">62%</span>
              <div className="benefit-description">
                <strong>Opioid Reduction</strong><br />
                Michigan patients reduced opioid use
              </div>
              <div className="benefit-source">Michigan Cannabis Regulatory Agency</div>
            </div>
            <div className="benefit-card">
              <span className="benefit-percentage">75%</span>
              <div className="benefit-description">
                <strong>Youth Protection</strong><br />
                Youth drug arrest reduction in legal states
              </div>
              <div className="benefit-source">Multi-state decriminalization study</div>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-center mb-8 text-primary">Law Enforcement Benefits</h3>
          <div className="advantages-grid">
            <div className="advantage-item">
              <CheckCircle className="advantage-icon" />
              <div className="advantage-text">
                <strong>Resource Reallocation</strong><br />
                Officers focus on violent crimes
              </div>
            </div>
            <div className="advantage-item">
              <CheckCircle className="advantage-icon" />
              <div className="advantage-text">
                <strong>Improved Clearance Rates</strong><br />
                Better solve rates for serious crimes
              </div>
            </div>
          </div>

          <div className="sources">
            Sources: Colorado & Washington post-legalization studies
          </div>

          <button onClick={nextChapter} className="next-chapter-btn">
            Next Chapter
          </button>
        </div>
      </section>

      {/* Agricultural Heritage Section */}
      <section id="agricultural-heritage" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 text-primary">Agricultural Heritage</h2>
          <p className="text-xl text-center mb-12 text-muted-foreground max-w-4xl mx-auto">
            Wisconsin's rich agricultural history and existing infrastructure position it to become a nationwide leader in cannabis production.
          </p>

          <div className="agricultural-timeline">
            <div className="timeline-item">
              <div className="timeline-year">1940s</div>
              <div className="timeline-content">
                <h4>Nation's #1 Hemp Producer</h4>
                <p>Leading hemp state in America - Wisconsin Historical Society</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1958</div>
              <div className="timeline-content">
                <h4>Last Legal Hemp Company</h4>
                <p>Rens Hemp Company closed - Wisconsin State Historical Society Archives</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2017</div>
              <div className="timeline-content">
                <h4>Hemp Reauthorized</h4>
                <p>Unanimous legislative passage - Wisconsin Legislature</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>$50M Current Hemp Market</h4>
                <p>Senior market annually - New Frontier Data Cannabis Market Report 2024</p>
              </div>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-center mb-8 text-primary">Wisconsin Cannabis Market Potential</h3>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-percentage">30%</span>
              <div className="benefit-description">
                <strong>Geographic Advantage</strong><br />
                Residents within 1 hour of legal dispensary
              </div>
            </div>
            <div className="benefit-card">
              <span className="benefit-percentage">50%</span>
              <div className="benefit-description">
                <strong>Market Reach</strong><br />
                Within 75 minutes (2.16M people)
              </div>
            </div>
            <div className="benefit-card">
              <span className="benefit-percentage">12.67%</span>
              <div className="benefit-description">
                <strong>Market Growth</strong><br />
                Hemp industry annual growth rate
              </div>
            </div>
            <div className="benefit-card">
              <span className="benefit-percentage">46%</span>
              <div className="benefit-description">
                <strong>Senior Market</strong><br />
                Senior cannabis use increase (2007-2018)
              </div>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-center mb-8 text-primary">Agricultural Infrastructure Advantages</h3>
          <div className="advantages-grid">
            <div className="advantage-item">
              <CheckCircle className="advantage-icon" />
              <div className="advantage-text">
                <strong>Excellent Climate</strong><br />
                Ideal soil & weather conditions
              </div>
            </div>
            <div className="advantage-item">
              <CheckCircle className="advantage-icon" />
              <div className="advantage-text">
                <strong>Water Resources</strong><br />
                Abundant irrigation supply
              </div>
            </div>
            <div className="advantage-item">
              <CheckCircle className="advantage-icon" />
              <div className="advantage-text">
                <strong>Hemp Expertise</strong><br />
                Existing cultivation technology
              </div>
            </div>
            <div className="advantage-item">
              <CheckCircle className="advantage-icon" />
              <div className="advantage-text">
                <strong>Tech Hub Potential</strong><br />
                Regional cannabis innovation
              </div>
            </div>
          </div>

          <div className="sources">
            Sources: Wisconsin Historical Society Archives (2024), New Frontier Data Cannabis Market Report (2024), USDA Agricultural Census (2022), Wisconsin Department of Agriculture Trade & Consumer Protection (2024)
          </div>

          <button onClick={nextChapter} className="next-chapter-btn">
            Next Chapter
          </button>
        </div>
      </section>

      {/* The Path Forward Section */}
      <section id="path-forward" className="section-bg py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 text-primary">The Path Forward</h2>
          <p className="text-xl text-center mb-12 text-muted-foreground max-w-4xl mx-auto">
            Public opinion strongly supports legalization, and Wisconsin has the opportunity to lead the Midwest in responsible cannabis policy.
          </p>

          <div className="benefits-grid benefits-grid-3">
            <div className="benefit-card">
              <span className="benefit-percentage">67%</span>
              <div className="benefit-description">
                <strong>Public Support</strong><br />
                Wisconsin voters support legalization
              </div>
              <div className="benefit-source">Marquette Law School Poll (2024)</div>
            </div>
            <div className="benefit-card">
              <span className="benefit-percentage">83%</span>
              <div className="benefit-description">
                <strong>Medical Support</strong><br />
                Support medical marijuana
              </div>
              <div className="benefit-source">Marquette Law School Poll (2024)</div>
            </div>
            <div className="benefit-card">
              <span className="benefit-percentage">58%</span>
              <div className="benefit-description">
                <strong>Rural Support</strong><br />
                Rural Wisconsin voters support
              </div>
              <div className="benefit-source">Marquette Law School Poll</div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg my-12">
            <h3 className="text-3xl font-bold text-center mb-6 text-primary">Wisconsin's Cannabis Future</h3>
            <p className="text-lg text-center text-muted-foreground">
              The convergence of public opinion, economic pressure, and neighboring state success creates an unprecedented opportunity for Wisconsin cannabis legalization.
            </p>
          </div>

          <div className="cta-section">
            <h3 className="text-4xl font-bold mb-6">Take Action Today</h3>
            <p className="text-xl mb-8">
              Join the movement to make Wisconsin green again. Contact your representatives and learn more about cannabis policy.
            </p>
            <div className="cta-buttons">
              <a href="#" className="cta-button">Contact Your Representatives</a>
              <a href="#" className="cta-button">Learn More About Cannabis Policy</a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="scroll-to-top bg-primary hover:bg-primary/90 text-primary-foreground"
          size="icon"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

export default App

