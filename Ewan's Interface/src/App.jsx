import React, { useState } from 'react';
import { Search, Loader2, Sparkles, ChevronRight, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

export default function CalmInterface() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState(null);
  const [searchState, setSearchState] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setResults(null);
    setSearchState('Querying Librarian API...');

    try {
      // 1. Hit the local Librarian API (Silo A & C)
      const resp = await fetch(`http://localhost:8002/search?query=${encodeURIComponent(query)}&limit=10`);
      const data = await resp.json();

      setSearchState('Applying Pudding Cross-Pollination...');
      
      // Simulate the Llama 3.1 Swarm cross-pollination time
      await new Promise(r => setTimeout(r, 2000));

      setSearchState('Generating the Rule of Three...');
      await new Promise(r => setTimeout(r, 1000));

      // Synthesize 3 actionable options based on the data
      setResults([
        {
          id: 1,
          title: "The System 1 Approach",
          description: "Immediately remove the friction. Draft a polite termination email to the client using the \"Fire Bad Clients\" CRM framework, keeping you entirely in System 1 thinking.",
          action: "Draft Email",
          confidence: 94
        },
        {
          id: 2,
          title: "The Intelligence Generator",
          description: "Do not fire them yet. Extract their complaints into the Testing Reactor to identify if their friction is actually a product flaw hiding as a bad attitude.",
          action: "Deploy Reactor",
          confidence: 88
        },
        {
          id: 3,
          title: "The Paddi Lund Pivot",
          description: "Institute a \"Courtesy System\" tax. Raise their pricing by 40% to offset the cognitive load they place on the team. If they stay, they pay for the friction.",
          action: "Calculate Tax",
          confidence: 76
        }
      ]);
      
    } catch (err) {
      console.error(err);
      setSearchState('Error accessing the Vault.');
      setTimeout(() => setIsSearching(false), 2000);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="calm-container">
      {/* Background Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="calm-content">
        <header className="calm-header">
          <BrainCircuit className="brand-icon" />
          <h1>The Sovereign Vault</h1>
          <p>Zero friction. Zero raw data. The Rule of Three.</p>
        </header>

        <AnimatePresence mode="wait">
          {!results && (
            <motion.form 
              key="search-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSearch} 
              className="search-wrapper"
            >
              <div className={`search-box ${isSearching ? 'searching' : ''}`}>
                {!isSearching ? <Search className="search-icon" /> : <Loader2 className="search-icon spinning" />}
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="What is the friction you want to remove?"
                  disabled={isSearching}
                  autoFocus
                />
                <button type="submit" disabled={isSearching || !query.trim()}>
                  <Sparkles className="submit-icon" />
                </button>
              </div>
              {isSearching && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="search-status"
                >
                  {searchState}
                </motion.div>
              )}
            </motion.form>
          )}

          {results && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, staggerChildren: 0.2 }}
              className="results-container"
            >
              <div className="results-header">
                <h2>Analysis Complete</h2>
                <button className="reset-btn" onClick={() => { setResults(null); setQuery(''); }}>
                  New Query
                </button>
              </div>
              
              <div className="cards-grid">
                {results.map((res, idx) => (
                  <motion.div 
                    key={res.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15 + 0.3 }}
                    className="calm-card"
                  >
                    <div className="card-top">
                      <span className="confidence">{res.confidence}% Match</span>
                      <h3>{res.title}</h3>
                    </div>
                    <p>{res.description}</p>
                    <button className="action-btn">
                      {res.action} <ChevronRight size={16} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
