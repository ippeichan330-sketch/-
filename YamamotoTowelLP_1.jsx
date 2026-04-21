import { useState, useEffect, useRef } from "react";
import { Droplets, Clock, Award, Leaf, ChevronDown, Star, ArrowRight, Zap } from "lucide-react";

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`
    }}>
      {children}
    </div>
  );
};

export default function YamamotoTowelLP() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Noto Serif JP', 'Georgia', serif", background: "#F5F2ED", color: "#1C1A17", overflowX: "hidden" }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: #B4A992; color: #fff; }

        .cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: #1C1A17; color: #F5F2ED;
          padding: 18px 48px; font-size: 13px; letter-spacing: 0.18em;
          text-transform: uppercase; border: none; cursor: pointer;
          font-family: 'Noto Serif JP', serif; font-weight: 400;
          transition: background 0.3s ease, transform 0.2s ease;
          text-decoration: none;
        }
        .cta-btn:hover { background: #3A3529; transform: translateY(-1px); }
        .cta-btn-outline {
          display: inline-flex; align-items: center; gap: 10px;
          background: transparent; color: #1C1A17;
          padding: 16px 44px; font-size: 13px; letter-spacing: 0.18em;
          text-transform: uppercase; border: 1px solid #1C1A17; cursor: pointer;
          font-family: 'Noto Serif JP', serif; font-weight: 400;
          transition: all 0.3s ease; text-decoration: none;
        }
        .cta-btn-outline:hover { background: #1C1A17; color: #F5F2ED; }

        .nav-link { color: #1C1A17; text-decoration: none; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; opacity: 0.7; transition: opacity 0.2s; }
        .nav-link:hover { opacity: 1; }

        .feature-card {
          padding: 40px 32px;
          border: 1px solid #D8D2C8;
          transition: border-color 0.3s, transform 0.3s;
          background: #FAF8F4;
        }
        .feature-card:hover { border-color: #8C7B6A; transform: translateY(-4px); }

        .testimonial-card {
          padding: 36px;
          background: #fff;
          border-left: 2px solid #8C7B6A;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: clamp(36px, 10vw, 72px) !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .hero-layout { flex-direction: column !important; }
          .problem-layout { flex-direction: column !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(245,242,237,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #D8D2C8" : "none",
        transition: "all 0.4s ease",
        padding: "20px 48px", display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 300, letterSpacing: "0.06em" }}>
          山本タオル
        </div>
        <div style={{ display: "flex", gap: "36px" }}>
          <a href="#story" className="nav-link">こだわり</a>
          <a href="#features" className="nav-link">品質</a>
          <a href="#cta" className="nav-link">購入</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh", position: "relative", display: "flex", alignItems: "center",
        padding: "120px 48px 80px",
        background: "linear-gradient(160deg, #EDE8E0 0%, #F5F2ED 55%, #E8E2D8 100%)"
      }}>
        {/* Decorative lines */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "45%", height: "100%", overflow: "hidden", pointerEvents: "none" }}>
          <svg width="100%" height="100%" viewBox="0 0 500 900" preserveAspectRatio="xMidYMid slice">
            {[...Array(18)].map((_, i) => (
              <line key={i} x1={i * 30} y1="0" x2={i * 30 + 150} y2="900"
                stroke="#C8BFB0" strokeWidth="0.5" opacity="0.5" />
            ))}
          </svg>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", display: "flex", gap: "80px", alignItems: "center" }} className="hero-layout">

          {/* Left — copy */}
          <div style={{ flex: "1 1 55%", zIndex: 1 }}>
            <div style={{ overflow: "hidden", marginBottom: "20px" }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
                fontSize: "15px", letterSpacing: "0.22em", color: "#8C7B6A",
                animation: "slideUp 1s ease 0.2s both",
              }}>
                Since 1953 — 老舗の矜持と革新
              </p>
            </div>

            <h1 className="hero-title" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(52px, 6vw, 84px)",
              fontWeight: 300, lineHeight: 1.1,
              letterSpacing: "-0.01em", marginBottom: "32px",
              animation: "fadeUp 1.1s ease 0.35s both"
            }}>
              妥協しない朝が、<br />
              <em style={{ fontStyle: "italic", color: "#6B5D4E" }}>あなたを<br />
              かたちづくる。</em>
            </h1>

            <p style={{
              fontSize: "16px", lineHeight: 1.9, color: "#5A5248",
              maxWidth: "420px", marginBottom: "48px", fontWeight: 300,
              fontFamily: "'Noto Serif JP', serif",
              animation: "fadeUp 1.1s ease 0.55s both"
            }}>
              朝のルーティンは、あなたの人生の基準そのものです。<br />
              山本タオルは、その一瞬に選ばれてきた理由があります。
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", animation: "fadeUp 1.1s ease 0.7s both" }}>
              <a href="#cta" className="cta-btn">
                今すぐ体験する <ArrowRight size={14} />
              </a>
              <a href="#story" className="cta-btn-outline">
                こだわりを知る
              </a>
            </div>

            <div style={{ marginTop: "64px", display: "flex", gap: "40px", animation: "fadeUp 1.1s ease 0.85s both" }}>
              {[["70", "年以上の歴史"], ["99", "%の吸水速度"], ["12", "の厳選素材"]].map(([num, label]) => (
                <div key={label}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 300, lineHeight: 1 }}>{num}<span style={{ fontSize: "18px" }}>+</span></p>
                  <p style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#8C7B6A", marginTop: "4px" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div style={{ flex: "1 1 40%", position: "relative", display: "flex", justifyContent: "center", animation: "fadeIn 1.4s ease 0.4s both" }}>
            <div style={{
              width: "100%", maxWidth: "400px", aspectRatio: "3/4",
              background: "linear-gradient(135deg, #D8D0C4 0%, #C8BDB0 40%, #B8ADA0 100%)",
              position: "relative", overflow: "hidden"
            }}>
              {/* Abstract towel texture */}
              <div style={{ position: "absolute", inset: 0 }}>
                <svg width="100%" height="100%" viewBox="0 0 400 533">
                  <defs>
                    <pattern id="weave" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="6" height="6" fill="rgba(255,255,255,0.06)" />
                      <rect x="6" y="6" width="6" height="6" fill="rgba(255,255,255,0.06)" />
                    </pattern>
                  </defs>
                  <rect width="400" height="533" fill="url(#weave)" />
                  {/* Fold lines */}
                  <line x1="0" y1="180" x2="400" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  <line x1="0" y1="360" x2="400" y2="360" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                  {/* Loop texture */}
                  {[...Array(20)].map((_, r) =>
                    [...Array(16)].map((_, c) => (
                      <circle key={`${r}-${c}`} cx={12 + c * 24} cy={12 + r * 26} r="3"
                        fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
                    ))
                  )}
                </svg>
              </div>

              {/* Label overlay */}
              <div style={{
                position: "absolute", bottom: "36px", left: "28px", right: "28px",
                background: "rgba(245,242,237,0.92)", padding: "20px 24px"
              }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "11px", letterSpacing: "0.22em", color: "#8C7B6A", marginBottom: "6px" }}>
                  PREMIUM COLLECTION 2025
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 300 }}>
                  Morning Ritual
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute", top: "-16px", right: "-12px",
              background: "#1C1A17", color: "#F5F2ED",
              width: "80px", height: "80px", borderRadius: "50%",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              fontSize: "10px", letterSpacing: "0.1em", lineHeight: 1.6, textAlign: "center",
              fontFamily: "'Noto Serif JP', serif"
            }}>
              <span style={{ fontSize: "18px", fontFamily: "'Cormorant Garamond', serif", lineHeight: 1 }}>今治</span>
              認定
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          opacity: 0.5, animation: "bob 2s ease-in-out infinite"
        }}>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</p>
          <ChevronDown size={16} />
        </div>

        <style>{`
          @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
          @keyframes fadeUp { from { transform: translateY(28px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes bob { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(6px); } }
        `}</style>
      </section>

      {/* ── PROBLEM & EMPATHY ── */}
      <section id="story" style={{ padding: "120px 48px", background: "#1C1A17", color: "#F5F2ED" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>

          <FadeIn>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "13px", letterSpacing: "0.24em", color: "#8C7B6A", marginBottom: "40px" }}>
              — A question for you
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 4vw, 54px)",
              fontWeight: 300, lineHeight: 1.3, marginBottom: "48px",
              letterSpacing: "-0.01em"
            }}>
              あなたは今朝、<br />
              <em style={{ color: "#C8BFB0" }}>どんなタオルで<br />1日を始めましたか？</em>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", marginBottom: "64px" }} className="grid-2">
              {[
                { q: "「なんとなく」で選んだタオルが、あなたの朝の基準を決めていませんか？", sub: "妥協した道具は、妥協した自分を再確認させます。" },
                { q: "ごわつきや、乾きにくさに、もう諦めていませんか？", sub: "本来、タオルはあなたの1日を、軽やかに始めるためにあります。" }
              ].map(({ q, sub }) => (
                <div key={q} style={{ borderLeft: "1px solid #3A3529", paddingLeft: "28px" }}>
                  <p style={{ fontSize: "17px", lineHeight: 1.7, marginBottom: "16px", fontWeight: 300 }}>{q}</p>
                  <p style={{ fontSize: "14px", color: "#8C7B6A", lineHeight: 1.8, fontFamily: "'Noto Serif JP', serif" }}>{sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div style={{ borderTop: "1px solid #3A3529", paddingTop: "48px" }}>
              <p style={{ fontSize: "18px", lineHeight: 1.9, color: "#C8BFB0", fontWeight: 300, maxWidth: "680px" }}>
                忙しい毎日の中でも、<strong style={{ color: "#F5F2ED", fontWeight: 400 }}>自分のルーティンには理由を持ちたい</strong>——<br />
                そのこだわりこそが、あなたを「ただ流されて生きていない人」に<br />
                している証拠です。
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── SOLUTION & RTB ── */}
      <section id="features" style={{ padding: "120px 48px", background: "#F5F2ED" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "80px" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "13px", letterSpacing: "0.24em", color: "#8C7B6A", marginBottom: "20px" }}>
                — The reason to believe
              </p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                老舗70年が培った、<br />
                <em>妥協なき品質の根拠</em>
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "80px" }} className="grid-3">
            {[
              { Icon: Droplets, title: "超高速吸水性", sub: "わずか3秒", body: "国際基準をはるかに超える吸水速度。入浴後の肌に触れた瞬間、水分を引き受ける感触は、他では代えられません。" },
              { Icon: Clock, title: "朝の時短を実現", sub: "タイパの革命", body: "乾きが早く、しっかり吸う。身支度の時間を短縮し、あなたの朝をより豊かに使うための投資です。" },
              { Icon: Award, title: "今治タオル認定", sub: "品質の証明", body: "日本最高峰の産地・今治で培われた職人技と、当社70年の品質管理が融合した逸品です。" },
              { Icon: Leaf, title: "素材へのこだわり", sub: "12種の厳選綿", body: "世界12か国から厳選した長繊維コットンのみを使用。柔らかさと耐久性を両立した、唯一無二の織りです。" },
              { Icon: Star, title: "使い続ける価値", sub: "100回洗っても", body: "型崩れせず、ふんわりが長続き。「長く使えるもの」を選ぶあなたのエシカルな視点にも応えます。" },
              { Icon: Zap, title: "感触の設計", sub: "肌が覚える柔らかさ", body: "ループの高さと密度を1mm単位で調整。肌に触れる面積と空気感を最適化した、理論的な「気持ちよさ」。" },
            ].map(({ Icon, title, sub, body }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="feature-card">
                  <div style={{ marginBottom: "20px" }}>
                    <Icon size={24} strokeWidth={1.5} color="#8C7B6A" />
                  </div>
                  <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "#8C7B6A", marginBottom: "8px", textTransform: "uppercase" }}>{sub}</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 400, marginBottom: "16px", letterSpacing: "0.02em" }}>{title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.85, color: "#5A5248", fontWeight: 300 }}>{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Timeline strip */}
          <FadeIn>
            <div style={{ background: "#1C1A17", color: "#F5F2ED", padding: "48px 64px", display: "flex", gap: "0", overflow: "hidden" }} className="grid-2">
              <div style={{ flex: 1, borderRight: "1px solid #3A3529", paddingRight: "48px" }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "11px", letterSpacing: "0.22em", color: "#8C7B6A", marginBottom: "16px" }}>1953</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 300, marginBottom: "12px" }}>創業。一枚の誠実さから。</p>
                <p style={{ fontSize: "13px", color: "#8C7B6A", lineHeight: 1.8, fontWeight: 300 }}>終戦後の日本で、山本織物は「本当に良いものを届けたい」という一念から始まりました。</p>
              </div>
              <div style={{ flex: 1, paddingLeft: "48px" }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "11px", letterSpacing: "0.22em", color: "#8C7B6A", marginBottom: "16px" }}>現在</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 300, marginBottom: "12px" }}>革新を纏い、伝統を守る。</p>
                <p style={{ fontSize: "13px", color: "#8C7B6A", lineHeight: 1.8, fontWeight: 300 }}>最新の繊維技術と、職人の手仕事。相反するものを共存させることが、山本タオルの哲学です。</p>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "80px 48px", background: "#EDE8E0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "13px", letterSpacing: "0.24em", color: "#8C7B6A", marginBottom: "48px", textAlign: "center" }}>
              — Voices of discerning users
            </p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="grid-3">
            {[
              { name: "Y.T. さん", role: "コンサルタント・35歳", text: "朝の時間は1分も無駄にできない私にとって、乾くのが早いのは想像以上に大きな差でした。毎朝の小さな感動が、1日のテンションを変えます。" },
              { name: "A.M. さん", role: "フリーランスデザイナー・28歳", text: "モノへのこだわりを大事にしていて、コスパ以上の理由で選ぶようにしています。山本タオルはその理由が明確で、使うたびに「いい選択をした」と思えます。" },
              { name: "K.S. さん", role: "医師・42歳", text: "肌が敏感なので素材選びには慎重でした。これだけ柔らかく、なおかつ洗っても型崩れしないものは初めてです。上質さが長続きする感覚があります。" },
            ].map(({ name, role, text }) => (
              <FadeIn key={name}>
                <div className="testimonial-card">
                  <p style={{ fontSize: "14px", lineHeight: 1.9, marginBottom: "24px", fontWeight: 300, color: "#3A3529", fontStyle: "italic", fontFamily: "'Cormorant Garamond', serif", fontSize: "17px" }}>
                    「{text}」
                  </p>
                  <p style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.06em" }}>{name}</p>
                  <p style={{ fontSize: "11px", color: "#8C7B6A", letterSpacing: "0.1em", marginTop: "4px" }}>{role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE PROPOSITION ── */}
      <section style={{ padding: "140px 48px", background: "#F5F2ED", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Large background text */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(80px, 18vw, 240px)",
          fontWeight: 300, color: "rgba(140,123,106,0.07)",
          whiteSpace: "nowrap", pointerEvents: "none", letterSpacing: "0.06em"
        }}>
          Standard
        </div>

        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "13px", letterSpacing: "0.24em", color: "#8C7B6A", marginBottom: "36px" }}>
              — Your statement
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(30px, 4vw, 52px)",
              fontWeight: 300, lineHeight: 1.35, marginBottom: "40px", letterSpacing: "-0.01em"
            }}>
              山本タオルを選ぶことは、<br />
              <em>あなた自身のスタンダードを、<br />自分に宣言すること。</em>
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.9, color: "#5A5248", fontWeight: 300, marginBottom: "0" }}>
              「なんとなく」で満たされる朝ではなく、<br />
              「これでいい」と言い切れる朝を、選び続けるために。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" style={{ padding: "120px 48px", background: "#1C1A17", color: "#F5F2ED", textAlign: "center" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>

          <FadeIn>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "13px", letterSpacing: "0.24em", color: "#8C7B6A", marginBottom: "32px" }}>
              — Begin your ritual
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 4vw, 54px)",
              fontWeight: 300, lineHeight: 1.2, marginBottom: "24px"
            }}>
              あなたの朝に、<br />
              <em>本物の基準を。</em>
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#8C7B6A", marginBottom: "56px", fontWeight: 300 }}>
              今なら初回購入者限定で、無料タオルサンプルをご用意。<br />
              実際に触れて、その違いをお確かめください。
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
              <button className="cta-btn" style={{ background: "#F5F2ED", color: "#1C1A17", padding: "20px 56px", fontSize: "14px" }}>
                サンプルを申し込む <ArrowRight size={16} />
              </button>
              <button className="cta-btn-outline" style={{ color: "#F5F2ED", borderColor: "#F5F2ED", padding: "18px 40px" }}>
                コレクションを見る
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div style={{ display: "flex", justifyContent: "center", gap: "40px", paddingTop: "40px", borderTop: "1px solid #3A3529" }}>
              {["送料無料", "30日間返品保証", "職人直送"].map(t => (
                <div key={t} style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "12px", letterSpacing: "0.14em", color: "#8C7B6A" }}>{t}</p>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "40px 48px", background: "#141210", color: "#5A5248", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 300, color: "#8C7B6A" }}>山本タオル</p>
        <p style={{ fontSize: "11px", letterSpacing: "0.1em" }}>© 2025 Yamamoto Towel Co. All rights reserved.</p>
        <div style={{ display: "flex", gap: "24px" }}>
          {["プライバシーポリシー", "特定商取引法", "お問い合わせ"].map(l => (
            <a key={l} href="#" style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#5A5248", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      </footer>

    </div>
  );
}
