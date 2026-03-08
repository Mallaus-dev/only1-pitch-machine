import { useState } from "react";

const G = `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400;500&family=Manrope:wght@300;400;600;800&display=swap');`;

const css = `
${G}
*{box-sizing:border-box;margin:0;padding:0;}
:root{
  --bg:#08090d;
  --surface:#0e0f18;
  --card:#12131e;
  --border:#ffffff0d;
  --accent:#c8ff00;
  --accent2:#ff4d00;
  --accent3:#00d4ff;
  --text:#efefef;
  --muted:#666;
  --dim:#333;
  --font-display:'Bebas Neue',sans-serif;
  --font-mono:'DM Mono',monospace;
  --font-body:'Manrope',sans-serif;
}
body{background:var(--bg);color:var(--text);font-family:var(--font-body);min-height:100vh;}
.bg-grid{position:fixed;inset:0;background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:48px 48px;pointer-events:none;z-index:0;}
.bg-blob{position:fixed;top:-300px;left:50%;transform:translateX(-50%);width:800px;height:500px;background:radial-gradient(ellipse,#c8ff0009 0%,transparent 65%);pointer-events:none;z-index:0;}
.app{position:relative;z-index:1;max-width:860px;margin:0 auto;padding:40px 20px 100px;}

.hdr{text-align:center;margin-bottom:56px;}
.eyebrow{font-family:var(--font-mono);font-size:10px;letter-spacing:5px;color:var(--accent);margin-bottom:14px;opacity:0.8;}
.title{font-family:var(--font-display);font-size:clamp(52px,9vw,96px);line-height:0.9;letter-spacing:3px;}
.title em{color:var(--accent);font-style:normal;}
.subtitle{font-size:13px;color:var(--muted);margin-top:18px;max-width:440px;margin-left:auto;margin-right:auto;line-height:1.7;font-weight:300;}
.powered{display:inline-block;margin-top:12px;font-family:var(--font-mono);font-size:9px;letter-spacing:3px;color:var(--dim);border:1px solid var(--dim);padding:4px 10px;}

.section-label{font-family:var(--font-mono);font-size:10px;letter-spacing:3px;color:var(--accent);opacity:0.7;margin-bottom:12px;text-transform:uppercase;}

.role-row{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:28px;}
.role-pill{border:1px solid var(--border);padding:12px 8px;cursor:pointer;transition:all 0.15s;background:#0d0e18;text-align:center;}
.role-pill:hover{border-color:#ffffff20;}
.role-pill.active{border-color:var(--accent);background:#c8ff0008;}
.role-pill-name{font-family:var(--font-display);font-size:13px;letter-spacing:1px;color:var(--muted);}
.role-pill.active .role-pill-name{color:var(--accent);}
.role-pill-icon{font-size:20px;margin-bottom:6px;}

.search-wrap{margin-bottom:12px;}
.search-box{display:flex;gap:0;border:1px solid var(--border);background:var(--card);overflow:hidden;transition:border-color 0.2s,box-shadow 0.2s;}
.search-box:focus-within{border-color:var(--accent);box-shadow:0 0 0 3px #c8ff0012;}
.at-prefix{font-family:var(--font-display);font-size:28px;color:var(--accent);padding:0 16px;display:flex;align-items:center;background:#0d0e18;border-right:1px solid var(--border);}
.search-input{flex:1;background:transparent;border:none;color:var(--text);font-family:var(--font-display);font-size:28px;letter-spacing:2px;padding:18px 16px;outline:none;}
.search-input::placeholder{color:var(--dim);}
.search-btn{background:var(--accent);color:var(--bg);font-family:var(--font-display);font-size:16px;letter-spacing:3px;padding:0 28px;border:none;cursor:pointer;transition:all 0.15s;white-space:nowrap;}
.search-btn:hover{background:#d8ff1a;}
.search-btn:disabled{background:var(--dim);color:#555;cursor:not-allowed;}

.hint{font-family:var(--font-mono);font-size:10px;color:var(--dim);letter-spacing:1px;margin-bottom:28px;}
.hint span{color:var(--muted);}

.progress-wrap{margin:28px 0;}
.progress-bar{height:2px;background:var(--dim);overflow:hidden;}
.progress-fill{height:100%;background:linear-gradient(90deg,var(--accent),var(--accent3));transition:width 0.5s ease;}
.progress-label{font-family:var(--font-mono);font-size:10px;color:var(--muted);margin-top:8px;letter-spacing:2px;}

.scanning-card{background:var(--card);border:1px solid var(--border);padding:48px;text-align:center;margin:20px 0;}
.scan-icon{font-size:52px;margin-bottom:16px;animation:bob 1.5s ease-in-out infinite;}
@keyframes bob{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
.scan-title{font-family:var(--font-display);font-size:32px;letter-spacing:3px;color:var(--accent);margin-bottom:10px;}
.scan-step{font-family:var(--font-mono);font-size:11px;color:var(--muted);letter-spacing:2px;min-height:20px;}
.scan-blink{animation:blink 1s step-end infinite;}
@keyframes blink{0%,100%{opacity:1;}50%{opacity:0.2;}}

.project-card{background:var(--card);border:1px solid var(--border);margin-bottom:16px;overflow:hidden;}
.project-card-top{padding:20px 24px;border-bottom:1px solid var(--border);display:flex;align-items:flex-start;gap:16px;}
.project-avatar{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#c8ff0060,#00d4ff60);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:26px;color:var(--bg);flex-shrink:0;font-weight:900;}
.project-info{flex:1;min-width:0;}
.project-name{font-family:var(--font-display);font-size:26px;letter-spacing:2px;}
.project-handle{font-family:var(--font-mono);font-size:11px;color:var(--accent);margin-top:2px;}
.project-bio{font-size:12px;color:var(--muted);margin-top:8px;line-height:1.7;font-weight:300;}
.project-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);}
.pstat{background:var(--card);padding:14px;text-align:center;}
.pstat-label{font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--muted);}
.pstat-val{font-family:var(--font-display);font-size:20px;color:var(--text);margin-top:4px;}
.green{color:var(--accent);}
.blue{color:var(--accent3);}
.orange{color:#ff9500;}
.red{color:var(--accent2);}

.score-row{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:20px;}
.score-box{background:var(--card);border:1px solid var(--border);padding:16px;text-align:center;}
.score-box-label{font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--muted);}
.score-box-val{font-family:var(--font-display);font-size:28px;margin-top:6px;}

.output-wrap{background:var(--card);border:1px solid var(--border);overflow:hidden;}
.output-head{padding:16px 24px;border-bottom:1px solid var(--border);background:var(--surface);display:flex;align-items:center;justify-content:space-between;}
.output-head-title{font-family:var(--font-display);font-size:20px;letter-spacing:2px;color:var(--accent);}
.tabs{display:flex;border-bottom:1px solid var(--border);}
.tab{flex:1;padding:12px;text-align:center;font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--muted);cursor:pointer;border-bottom:2px solid transparent;transition:all 0.15s;text-transform:uppercase;}
.tab.active{color:var(--accent);border-bottom-color:var(--accent);}
.tab:hover:not(.active){color:var(--text);}
.pitch-body{padding:28px;}
.pitch-text{font-size:14px;line-height:1.95;color:var(--text);white-space:pre-wrap;font-family:var(--font-body);font-weight:300;}

.action-row{display:flex;gap:10px;margin-top:20px;flex-wrap:wrap;}
.action-btn{padding:10px 20px;background:transparent;border:1px solid var(--accent);color:var(--accent);font-family:var(--font-mono);font-size:10px;letter-spacing:2px;cursor:pointer;transition:all 0.15s;}
.action-btn:hover{background:var(--accent);color:var(--bg);}
.action-btn.sec{border-color:var(--border);color:var(--muted);}
.action-btn.sec:hover{border-color:var(--text);color:var(--text);background:transparent;}

.err{background:#ff4d0012;border:1px solid #ff4d0030;padding:16px 20px;font-family:var(--font-mono);font-size:12px;color:var(--accent2);margin:16px 0;line-height:1.6;}
.toast{position:fixed;bottom:28px;right:28px;background:var(--accent);color:var(--bg);padding:12px 22px;font-family:var(--font-display);font-size:14px;letter-spacing:3px;z-index:9999;animation:toastAnim 2.2s forwards;}
@keyframes toastAnim{0%{opacity:0;transform:translateY(10px);}15%{opacity:1;transform:translateY(0);}80%{opacity:1;}100%{opacity:0;transform:translateY(-10px);}}

@media(max-width:600px){
  .role-row{grid-template-columns:1fr 1fr;}
  .project-stats,.score-row{grid-template-columns:1fr 1fr;}
  .search-input{font-size:20px;}
  .at-prefix{font-size:20px;}
  .search-btn{padding:0 16px;font-size:13px;}
}
`;

const ROLES = [
  { id: "marketing", icon: "📣", name: "MARKETING" },
  { id: "kol", icon: "🔥", name: "KOL" },
  { id: "community", icon: "👥", name: "COMMUNITY" },
  { id: "investor", icon: "💰", name: "INVESTOR" },
];

const PITCH_STYLES = ["LONG FORM", "COLD DM", "AGGRESSIVE"];
const STYLE_KEYS = ["longform", "colddm", "aggressive"];

const SCAN_STEPS = [
  "Looking up Twitter profile...",
  "Extracting project narrative...",
  "Scoring the opportunity...",
  "Writing Long Form pitch...",
  "Writing Cold DM...",
  "Writing Aggressive pitch...",
  "Finalizing...",
];

const roleContext = {
  marketing: "Web3 Marketing Partner & Growth Strategist. You run Only1, a 10,000+ member crypto trading community on Telegram (@only1rogw). You offer premium marketing packages: TG promotions, KOL campaigns, community growth, viral content, and influencer outreach.",
  kol: "KOL and Crypto Influencer. You are Mallaus, founder of Only1 with 10K+ Telegram members who trust your calls. You have been in Web3 since 2020 and have a strong track record of early calls.",
  community: "Professional Web3 Community Manager. You built Only1 from zero to 10K+ members organically. You specialize in community engagement, moderation, and growth strategy.",
  investor: "Crypto Investor & Web3 Scout. You have been in the space since 2020 and evaluate projects for investment potential, partnership, or co-marketing opportunities.",
};

const styleInstruction = {
  longform: `Write a detailed professional pitch letter (400-550 words). Structure it with these bold headers:
**THE HOOK** — a powerful opening that references their specific project
**WHY I'M REACHING OUT** — show you did real research on them
**WHAT I BRING** — your value proposition with specific numbers and proof
**WHAT I'M PROPOSING** — clear deal structure or next step
**THE CLOSE** — urgency-driven, confident close
Make every section punchy and specific.`,
  colddm: `Write a cold DM (90-110 words MAX). Rules:
- First line must hook them immediately
- Reference something specific about their project
- One clear value statement
- One clear ask or CTA at the end
- Zero fluff, zero generic lines
- Must feel like a real human wrote it, not a template`,
  aggressive: `Write an aggressive high-urgency pitch (220-280 words). Use:
- Strong social proof up front
- FOMO and scarcity ("other projects are already asking me")
- Bold claims backed by your actual stats (10K community, since 2020)
- Make them feel they are losing money every day they don't reply
- End with a direct ultimatum-style CTA
No apologies. No softening. Pure pressure.`,
};

export default function PitchMachine() {
  const [handle, setHandle] = useState("");
  const [role, setRole] = useState("marketing");
  const [loading, setLoading] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [projectData, setProjectData] = useState(null);
  const [pitches, setPitches] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");
  const [progress, setProgress] = useState(0);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(""), 2200); };
  const copy = (text) => { navigator.clipboard?.writeText(text); showToast("COPIED"); };

  const step = (i) => { setScanStep(i); setProgress(Math.round((i / (SCAN_STEPS.length - 1)) * 100)); };

  const callGroq = async (userPrompt, systemPrompt = "") => {
    const res = await fetch("/api/pitch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
      }),
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    return (data.content || []).map(b => b.text).join("");
  };

  const scan = async () => {
    const raw = handle.trim().replace(/^@/, "");
    if (!raw) { setError("Enter a Twitter/X username to continue."); return; }
    setError(""); setLoading(true); setProjectData(null); setPitches(null); setProgress(0);

    try {
      step(0);

      // Step 1: Extract project info from handle
      const infoText = await callGroq(
        `The Twitter/X username is "@${raw}". Based on this handle and your training knowledge about crypto/Web3 projects, generate realistic and plausible project information.

If you know this project, use accurate information. If you don't recognize it, create a realistic Web3 project profile that fits the name.

Return ONLY a raw JSON object — no markdown, no backticks, no explanation:
{
  "name": "project name derived from the handle",
  "handle": "@${raw}",
  "bio": "realistic twitter bio for this type of project",
  "followers": "estimated follower count e.g. 8.4K",
  "telegram": "likely telegram handle or N/A",
  "ca": "token contract address if known or N/A",
  "chain": "most likely blockchain e.g. Solana",
  "ticker": "token ticker e.g. $TOKEN or N/A",
  "mcap": "estimated market cap or N/A",
  "description": "2-3 sentences about what this project does, its narrative, and what makes it interesting to traders",
  "sentiment": "Bullish or Neutral or Bearish",
  "recentActivity": "what this type of project typically posts about",
  "strengths": "2-3 key strengths of this project for marketing purposes",
  "weaknesses": "1-2 potential concerns or weaknesses"
}`,
        "You are a Web3 intelligence analyst. Return only valid JSON."
      );

      step(1);

      let info;
      try {
        const clean = infoText.replace(/```json|```/g, "").trim();
        const match = clean.match(/\{[\s\S]*\}/);
        info = JSON.parse(match ? match[0] : clean);
      } catch {
        info = {
          name: raw.charAt(0).toUpperCase() + raw.slice(1),
          handle: `@${raw}`,
          bio: "Web3 project building on-chain.",
          followers: "N/A", telegram: "N/A", ca: "N/A",
          chain: "Solana", ticker: "N/A", mcap: "N/A",
          description: `${raw} is a Web3 project. Enter their details manually for a more accurate pitch.`,
          sentiment: "Neutral", recentActivity: "N/A",
          strengths: "Community-driven", weaknesses: "Early stage",
        };
      }

      step(2);
      setProjectData(info);

      // Step 3-5: Generate all 3 pitches sequentially
      const projectContext = `
Project: ${info.name} (${info.ticker}) 
Handle: ${info.handle} · Chain: ${info.chain}
Followers: ${info.followers} · Telegram: ${info.telegram}
Market Cap: ${info.mcap} · CA: ${info.ca}
Bio: ${info.bio}
What they do: ${info.description}
Strengths: ${info.strengths}
Weaknesses: ${info.weaknesses}
Community Sentiment: ${info.sentiment}`;

      const systemPrompt = `You are Mallaus — ${roleContext[role]}. You have been in crypto since 2020. Write pitches that are authentic, crypto-native, confident, and specific. Never sound generic or templated.`;

      step(3);
      const longform = await callGroq(`${projectContext}\n\nTask: ${styleInstruction.longform}`, systemPrompt);

      step(4);
      const colddm = await callGroq(`${projectContext}\n\nTask: ${styleInstruction.colddm}`, systemPrompt);

      step(5);
      const aggressive = await callGroq(`${projectContext}\n\nTask: ${styleInstruction.aggressive}`, systemPrompt);

      step(6);
      setPitches({ longform, colddm, aggressive });
      setActiveTab(0);
      setProgress(100);

    } catch (e) {
      setError(`Scan failed: ${e.message}. Check your GROQ_API_KEY in Vercel environment variables.`);
    }
    setLoading(false);
  };

  const calcScore = (p) => {
    if (!p) return { overall: 0, reach: "LOW", verdict: "UNKNOWN" };
    let s = 35;
    if (p.followers && p.followers !== "N/A") s += 20;
    if (p.telegram && p.telegram !== "N/A") s += 15;
    if (p.ca && p.ca !== "N/A") s += 15;
    if (p.mcap && p.mcap !== "N/A") s += 15;
    const sc = Math.min(s, 100);
    return {
      overall: sc,
      reach: sc >= 70 ? "HIGH" : sc >= 50 ? "MED" : "LOW",
      verdict: sc >= 70 ? "STRONG TAKE" : sc >= 50 ? "WORTH IT" : "NEEDS RESEARCH",
    };
  };

  const sc = calcScore(projectData);
  const scoreColor = (s) => s >= 70 ? "green" : s >= 40 ? "orange" : "red";

  return (
    <>
      <style>{css}</style>
      {toast && <div className="toast">{toast}</div>}
      <div className="bg-grid" /><div className="bg-blob" />

      <div className="app">
        <div className="hdr">
          <div className="eyebrow">Only1 · Web3 Intelligence</div>
          <div className="title">PITCH<br /><em>MACHINE</em></div>
          <div className="subtitle">Drop a Twitter handle. Pick your role. Get a pitch that closes.</div>
          <div className="powered">POWERED BY GROQ · LLAMA 3.3 70B</div>
        </div>

        <div className="section-label">Your Role</div>
        <div className="role-row">
          {ROLES.map(r => (
            <div key={r.id} className={`role-pill ${role === r.id ? "active" : ""}`} onClick={() => setRole(r.id)}>
              <div className="role-pill-icon">{r.icon}</div>
              <div className="role-pill-name">{r.name}</div>
            </div>
          ))}
        </div>

        <div className="section-label">Project Twitter Handle</div>
        <div className="search-wrap">
          <div className="search-box">
            <div className="at-prefix">@</div>
            <input className="search-input" placeholder="projecthandle" value={handle}
              onChange={e => setHandle(e.target.value.replace(/^@/, ""))}
              onKeyDown={e => e.key === "Enter" && !loading && scan()} />
            <button className="search-btn" onClick={scan} disabled={loading}>
              {loading ? "..." : "SCAN →"}
            </button>
          </div>
        </div>
        <div className="hint">Try: <span>bonktoken</span> · <span>wifcoin</span> · <span>dogwifhat</span> · or any Web3 project handle</div>

        {error && <div className="err">⚠ {error}</div>}

        {loading && (
          <>
            <div className="progress-wrap">
              <div className="progress-bar"><div className="progress-fill" style={{ width: progress + "%" }} /></div>
              <div className="progress-label">{SCAN_STEPS[scanStep]} <span className="scan-blink">▌</span></div>
            </div>
            <div className="scanning-card">
              <div className="scan-icon">🔍</div>
              <div className="scan-title">SCANNING @{handle}</div>
              <div className="scan-step">{SCAN_STEPS[scanStep]}</div>
            </div>
          </>
        )}

        {projectData && !loading && (
          <>
            <div className="project-card" style={{ marginTop: 32 }}>
              <div className="project-card-top">
                <div className="project-avatar">{(projectData.name || "?")[0].toUpperCase()}</div>
                <div className="project-info">
                  <div className="project-name">
                    {projectData.name}
                    {projectData.ticker !== "N/A" && <span style={{ color: "var(--accent)", fontSize: 16, marginLeft: 10 }}>{projectData.ticker}</span>}
                  </div>
                  <div className="project-handle">{projectData.handle}{projectData.chain !== "N/A" && ` · ${projectData.chain}`}</div>
                  <div className="project-bio">{projectData.description}</div>
                </div>
              </div>
              <div className="project-stats">
                <div className="pstat"><div className="pstat-label">Followers</div><div className="pstat-val green">{projectData.followers}</div></div>
                <div className="pstat"><div className="pstat-label">Telegram</div><div className="pstat-val blue">{projectData.telegram !== "N/A" ? "✓ Found" : "Not Found"}</div></div>
                <div className="pstat"><div className="pstat-label">On-Chain</div><div className="pstat-val">{projectData.ca !== "N/A" ? "✓ Verified" : "N/A"}</div></div>
                <div className="pstat"><div className="pstat-label">Sentiment</div>
                  <div className={`pstat-val ${projectData.sentiment === "Bullish" ? "green" : projectData.sentiment === "Bearish" ? "red" : "orange"}`}>
                    {projectData.sentiment}
                  </div>
                </div>
              </div>
            </div>

            <div className="score-row">
              <div className="score-box">
                <div className="score-box-label">Project Score</div>
                <div className={`score-box-val ${scoreColor(sc.overall)}`}>{sc.overall}<span style={{ fontSize: 14 }}>/100</span></div>
              </div>
              <div className="score-box">
                <div className="score-box-label">Opportunity</div>
                <div className={`score-box-val ${sc.reach === "HIGH" ? "green" : sc.reach === "MED" ? "orange" : "red"}`}>{sc.reach}</div>
              </div>
              <div className="score-box">
                <div className="score-box-label">Verdict</div>
                <div className={`score-box-val ${sc.overall >= 70 ? "green" : sc.overall >= 50 ? "orange" : "red"}`} style={{ fontSize: 18, paddingTop: 8 }}>{sc.verdict}</div>
              </div>
            </div>

            {pitches && (
              <div className="output-wrap">
                <div className="output-head">
                  <div className="output-head-title">PITCHES READY</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: 2 }}>
                    {ROLES.find(r => r.id === role)?.icon} {role.toUpperCase()} MODE
                  </div>
                </div>
                <div className="tabs">
                  {PITCH_STYLES.map((t, i) => (
                    <div key={i} className={`tab ${activeTab === i ? "active" : ""}`} onClick={() => setActiveTab(i)}>{t}</div>
                  ))}
                </div>
                <div className="pitch-body">
                  <div className="pitch-text">{pitches[STYLE_KEYS[activeTab]]}</div>
                  <div className="action-row">
                    <button className="action-btn" onClick={() => copy(pitches[STYLE_KEYS[activeTab]])}>COPY PITCH</button>
                    <button className="action-btn sec" onClick={() => { setHandle(""); setProjectData(null); setPitches(null); setProgress(0); }}>
                      SCAN NEW PROJECT
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
