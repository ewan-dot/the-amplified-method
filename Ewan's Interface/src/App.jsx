import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, 
  MessageSquare, 
  FileText, 
  Settings, 
  UploadCloud, 
  Database,
  Activity,
  Box,
  BrainCircuit
} from 'lucide-react';
import './index.css';
import './radio.css';

function App() {
  const [activeTab, setActiveTab] = useState('morning-meeting');
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);

  // Initialize Speech Recognition
  React.useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = true;
      rec.interimResults = true;
      
      rec.onresult = (event) => {
        let finalTrans = '';
        let interimTrans = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTrans += event.results[i][0].transcript + ' ';
          } else {
            interimTrans += event.results[i][0].transcript;
          }
        }
        
        if (finalTrans) {
          setTranscript(prev => prev + finalTrans);
        }
        setInterimTranscript(interimTrans);
      };

      rec.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsRecording(false);
        setInterimTranscript('');
      };

      setRecognition(rec);
    }
  }, []);

  const toggleRecording = () => {
    if (isRecording) {
      recognition?.stop();
      setIsRecording(false);
      setInterimTranscript('');
    } else {
      setTranscript(''); // Clear previous on new recording
      setInterimTranscript('');
      recognition?.start();
      setIsRecording(true);
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar glass-panel">
        <div className="brand">
          <Box className="text-indigo-400" size={28} color="#a5b4fc" />
          <h1>Antigravity Spine</h1>
        </div>
        
        <nav className="nav-menu">
          <a 
            className={`nav-item ${activeTab === 'morning-meeting' ? 'active' : ''}`}
            onClick={() => setActiveTab('morning-meeting')}
          >
            <MessageSquare size={20} />
            Morning Meeting
          </a>
          <a 
            className={`nav-item ${activeTab === 'content-factory' ? 'active' : ''}`}
            onClick={() => setActiveTab('content-factory')}
          >
            <FileText size={20} />
            Content Factory
          </a>
          <a 
            className={`nav-item ${activeTab === 'vault' ? 'active' : ''}`}
            onClick={() => setActiveTab('vault')}
          >
            <Database size={20} />
            The Vault
          </a>
          <a 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={20} />
            System Rules
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header-status">
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '8px' }}>
              {activeTab === 'morning-meeting' && "Morning Sync"}
              {activeTab === 'content-factory' && "Extraction & Creation"}
              {activeTab === 'vault' && "FalkorDB Graph"}
              {activeTab === 'settings' && "Layer 0 Laws"}
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>Welcome to the bridge, Ewan.</p>
          </div>
          
          <div className="status-badges">
            <div className="badge">
              <Activity size={14} />
              <span className="status-dot"></span>
              Tier 2 (Beast) Online
            </div>
            <div className="badge openclaw">
              <BrainCircuit size={14} />
              <span className="status-dot"></span>
              OpenClaw Bound
            </div>
          </div>
        </header>

        <div className="workspace-grid">
          {/* Left Column: Radio / Voice & Transcription */}
          <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* The Floating Radio */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div 
                className={`floating-radio ${isRecording ? 'active' : ''}`}
                onClick={toggleRecording}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="radio-grille">
                  {Array.from({ length: 70 }).map((_, i) => (
                    <div key={i} className="grille-hole"></div>
                  ))}
                </div>
                <div className="radio-screen">
                  <div className="screen-text">Default</div>
                  <div className="waveform-container">
                    {isRecording ? (
                      <div className="waveform-active"></div>
                    ) : (
                      <div className="waveform-idle"></div>
                    )}
                  </div>
                  <div className="screen-text">Modes</div>
                </div>
              </motion.div>
            </div>

            {/* Transcription Area */}
            <div className="transcription-container">
              <div className="content-header" style={{ marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Transcribed Notes</h3>
                {isRecording && <span style={{ color: '#ef4444', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}><Activity size={12} /> Listening...</span>}
              </div>
              <textarea 
                className="transcription-box" 
                placeholder="Chaotic speech will appear here exactly as you say it..."
                readOnly
                value={transcript + interimTranscript}
              ></textarea>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Language parsing separated from extraction.
                </p>
                <button className="btn-send-openclaw">
                  Send to OpenClaw
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Content Area */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <div className="content-area">
              <div className="content-header">
                <h3>Perplexity Data & Artifacts</h3>
                <button style={{ 
                  background: 'rgba(255,255,255,0.1)', 
                  border: 'none', 
                  color: 'white', 
                  padding: '8px 16px', 
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}>
                  Browse Vault
                </button>
              </div>

              <div className="drag-drop-zone">
                <UploadCloud size={32} style={{ margin: '0 auto 16px', color: 'var(--accent-primary)' }} />
                <p style={{ fontWeight: 500, marginBottom: '4px' }}>Drop Perplexity files here</p>
                <p style={{ fontSize: '0.85rem' }}>OpenClaw will extract and synthesise</p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', marginTop: '8px' }}>
                  Recent Transcripts
                </h4>
                <div className="recent-items">
                  <div className="item-row">
                    <div className="item-icon">
                      <Mic size={20} />
                    </div>
                    <div className="item-details">
                      <div className="item-title">Brainstorm: Marketing Swarm Sync</div>
                      <div className="item-meta">Parsed 2 hours ago • 4 tasks generated</div>
                    </div>
                  </div>
                  <div className="item-row">
                    <div className="item-icon">
                      <FileText size={20} style={{ color: 'var(--accent-secondary)' }} />
                    </div>
                    <div className="item-details">
                      <div className="item-title">Perplexity: Altman Z-Score Research</div>
                      <div className="item-meta">Ingested to Vault • OpenClaw processed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
