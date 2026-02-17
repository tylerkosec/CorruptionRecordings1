import React, { useEffect, useMemo, useState } from "react";
import { Instagram, Music, Play, ExternalLink } from "lucide-react";
import loop from "./assets/loop.mp4";
import logoFull from "./assets/logo-full.png";
import logoIcon from "./assets/logo-icon.png";
import chain from "./assets/chain.png";
import clientFoxlake from "./assets/client-foxlake.png";
import clientCellmetal from "./assets/client-cellmetal.png";
import clientMugshot from "./assets/client-mugshot.jpg";
import clientNocure from "./assets/client-nocure.png";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const EMAIL = "connor@corruptionrecordings.com";
  const INSTAGRAM_URL = "https://www.instagram.com/cononhands/";
  const YOUTUBE_ID = "NC3oXgByaG8";

  // Cache-bust (optional; keep if you want)
  const ASSET_VER = "cdn-1";
  const q = (url) => `${url}?v=${ASSET_VER}`;

  const ASSET = {
    loop,
    logoFull,
    logoIcon,
    chain,
    clients: {
      foxlake: clientFoxlake,
      cellmetal: clientCellmetal,
      mugshot: clientMugshot,
      nocure: clientNocure,
    },
  };

  const clients = useMemo(
    () => [
      {
        band: "MUGSHOT",
        role: "Drums / Production",
        img: ASSET.clients.mugshot,
        ig: "https://www.instagram.com/mugshotca/",
      },
      {
        band: "FOX LAKE",
        role: "Drums / Mixing",
        img: ASSET.clients.foxlake,
        ig: "https://www.instagram.com/foxlakeco/",
      },
      {
        band: "NO CURE",
        role: "Mastering Engineer",
        img: ASSET.clients.nocure,
        ig: "https://www.instagram.com/nocurestraightedge/",
      },
      {
        band: "CELLMETAL",
        role: "Production / Mix",
        img: ASSET.clients.cellmetal,
        ig: "https://www.instagram.com/cellmetal_/",
      },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL
  )}`;

  return (
    <div className="app-container">
      <style>{`
        :root{
          --orange:#EC4E17;
          --black:#050505;
          --white:#ffffff;
          --muted:rgba(255,255,255,.72);
          --muted2:rgba(255,255,255,.56);
          --line:rgba(255,255,255,.14);
          --card:rgba(255,255,255,.06);
          --shadow:0 18px 60px rgba(0,0,0,.55);
        }

        *{box-sizing:border-box}
        html,body{margin:0;padding:0;background:var(--black);color:var(--white);font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif}
        a{color:inherit}
        img{max-width:100%;display:block}

        .container{width:min(1120px, 92vw);margin:0 auto}
        .section-padding{padding:84px 0}

        .nav{
          position:fixed;left:0;top:0;width:100%;
          z-index:50;
          transition:background .25s ease, border-color .25s ease, backdrop-filter .25s ease;
          border-bottom:1px solid transparent;
        }
        .nav.isScrolled{
          background:rgba(5,5,5,.72);
          backdrop-filter:blur(10px);
          border-bottom:1px solid rgba(255,255,255,.08);
        }
        .nav-inner{height:70px;display:flex;align-items:center;justify-content:space-between}
        .brand{display:flex;align-items:center;gap:12px;text-decoration:none}
        .brand img{height:34px;width:34px;object-fit:contain}
        .nav-links{display:flex;align-items:center;gap:26px}
        .nav-links a{
          text-decoration:none;
          font-weight:800;
          font-size:12px;
          letter-spacing:.2em;
          text-transform:uppercase;
          color:rgba(255,255,255,.86);
          opacity:.92;
        }
        .nav-links a:hover{opacity:1}
        .nav-cta{
          background:var(--orange);
          color:#0b0b0b;
          border:none;
          font-weight:900;
          letter-spacing:.16em;
          text-transform:uppercase;
          font-size:12px;
          padding:12px 16px;
          border-radius:999px;
          text-decoration:none;
          display:inline-flex;
          align-items:center;
          gap:10px;
        }

        .hero{
          position:relative;
          min-height:92vh;
          padding-top:70px;
          display:flex;
          align-items:center;
          overflow:visible;
          background: radial-gradient(1200px 600px at 70% 30%, rgba(236,78,23,.12), transparent 60%);
          z-index:1;
        }
        .hero-video{position:absolute; inset:0; z-index:0; opacity:.32; pointer-events:none;}
        .hero-video video{width:100%;height:100%;object-fit:cover;filter:contrast(1.05) saturate(1.05);}
        .hero-overlay{
          position:absolute; inset:0; z-index:1;
          background: linear-gradient(180deg, rgba(5,5,5,.62) 0%, rgba(5,5,5,.72) 38%, rgba(5,5,5,.92) 100%);
        }
        .hero-inner{position:relative;z-index:2;padding:64px 0 140px}
        .hero-topline{
          display:flex;align-items:center;justify-content:center;gap:18px;margin-bottom:18px;
          color:rgba(255,255,255,.78);font-weight:900;text-transform:uppercase;letter-spacing:.32em;font-size:12px;
        }
        .hero-topline:before,.hero-topline:after{content:"";height:1px;width:80px;background:rgba(236,78,23,.65);}
        .hero-logo-wrap{width:min(860px, 92vw);margin:0 auto;filter:drop-shadow(0 20px 60px rgba(0,0,0,.75));}
        .hero-logo-wrap img{width:100%;height:auto}
        .hero-sub{
          margin:18px auto 0;width:min(860px, 92vw);text-align:center;color:rgba(255,255,255,.88);
          font-weight:900;text-transform:uppercase;letter-spacing:.16em;font-size:12px;
        }
        .hero-sub strong{
          display:inline-block;margin-top:6px;font-size:16px;letter-spacing:.14em;color:#fff;
          border-bottom:2px solid rgba(236,78,23,.85);padding-bottom:6px;
        }
        .hero-actions{
          margin:34px auto 0;width:min(860px, 92vw);
          display:flex;gap:18px;justify-content:center;flex-wrap:wrap;
        }
        .btn{
          border-radius:999px;padding:16px 26px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;font-size:12px;
          text-decoration:none;display:inline-flex;align-items:center;gap:10px;
          border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.04);color:#fff;
        }
        .btn.primary{border-color:transparent;background:var(--orange);color:#0b0b0b;}
        .btn:hover{transform:translateY(-1px)}
        .btn:active{transform:translateY(0px)}

        .hero-chain{
          width:140vw;
          max-width:none;
          display:block;
          opacity:.95;
          filter:drop-shadow(0 18px 40px rgba(0,0,0,.6));
          pointer-events:none;
          position:absolute;
          left:50%;
          transform:translateX(-50%);
          bottom:-65px;
          z-index:9999;
        }

        .section-header{display:flex;align-items:flex-end;justify-content:space-between;gap:18px;margin-bottom:26px;}
        .section-subtitle{
          display:block;font-weight:900;font-size:12px;letter-spacing:.28em;text-transform:uppercase;
          color:rgba(255,255,255,.72);margin-bottom:10px;
        }
        .section-title{
          margin:0;font-size:34px;line-height:1.05;font-weight:1000;letter-spacing:-.02em;
          text-transform:uppercase;font-style:italic;
        }
        .section-title span{color:var(--orange)}

        .about{
          background:linear-gradient(180deg, rgba(5,5,5,1) 0%, rgba(8,8,8,1) 100%);
          position:relative;
          z-index:0;
          padding-top:110px;
        }
        .about-split{
          border:1px solid rgba(255,255,255,.10);
          background:rgba(255,255,255,.03);
          border-radius:18px;
          padding:22px;
          display:grid;
          grid-template-columns:1fr;
          gap:18px;
        }
        @media (min-width: 900px){
          .about-split{grid-template-columns: 1fr 1.35fr;align-items:stretch;}
        }
        .about-left{display:flex;align-items:center}
        .about-text{margin:0;color:rgba(255,255,255,.72);line-height:1.7;text-align:left;font-weight:600;}
        @media (max-width: 899px){.about-text{text-align:center}}
        .video-frame{
          border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.10);
          background:rgba(255,255,255,.02);box-shadow:var(--shadow);
        }
        .video-frame iframe{width:100%;aspect-ratio:16/9;border:0;display:block;}
        .about-right .video-frame{box-shadow:none}

        .embed-frame{
          border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.10);
          background:rgba(255,255,255,.02);box-shadow:var(--shadow);
        }

        .client-grid{display:grid;grid-template-columns:repeat(2, minmax(0,1fr));gap:18px;}
        .client-card{
          position:relative;border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.10);
          background:rgba(255,255,255,.02);min-height:170px;text-decoration:none;display:block;
        }
        .client-card img{width:100%;height:100%;object-fit:cover;transform:scale(1.03);filter:contrast(1.05) saturate(1.02);}
        .client-overlay{
          position:absolute;inset:0;background:linear-gradient(180deg, rgba(0,0,0,.08) 0%, rgba(0,0,0,.78) 86%);
          display:flex;flex-direction:column;justify-content:flex-end;padding:18px;gap:6px;
        }
        .client-band{margin:0;font-weight:1000;font-size:20px;letter-spacing:.08em;text-transform:uppercase;font-style:italic;}
        .client-role{margin:0;color:rgba(236,78,23,.92);font-weight:900;text-transform:uppercase;letter-spacing:.22em;font-size:11px;}

        footer{padding:70px 0 60px;border-top:1px solid rgba(255,255,255,.08)}
        .footer-cta{display:flex;flex-direction:column;gap:18px;align-items:center;justify-content:center;}
        .footer-brand-icon{
          width:min(240px, 60vw);
          height:auto;
          object-fit:contain;
          opacity:.9;
        }
        .footer-email-pill{
          display:inline-flex;align-items:center;gap:12px;padding:16px 18px;border-radius:999px;
          background:rgba(236,78,23,.92);color:#0b0b0b;font-weight:1000;letter-spacing:.10em;
          text-transform:uppercase;text-decoration:none;border:1px solid rgba(255,255,255,.10);
          box-shadow:0 18px 50px rgba(236,78,23,.22);
        }
        .social-links{display:flex;gap:14px;align-items:center;justify-content:center;opacity:.95;}
        .social-links a{
          width:44px;height:44px;border-radius:999px;display:grid;place-items:center;
          border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.04);text-decoration:none;
        }
        .social-links a:hover{border-color:rgba(236,78,23,.55)}
        .copyright{margin-top:26px;opacity:.24;font-weight:900;letter-spacing:.42em;text-transform:uppercase;font-size:10px;text-align:center;}
      `}</style>

      {/* NAV */}
      <div className={`nav ${isScrolled ? "isScrolled" : ""}`}>
        <div className="container nav-inner">
          <a className="brand" href="#top" onClick={scrollToId("top")}>
            <img src={ASSET.logoIcon} alt="Corruption icon" />
          </a>

          <div className="nav-links">
            <a href="#about" onClick={scrollToId("about")}>
              About
            </a>
            <a href="#mywork" onClick={scrollToId("mywork")}>
              My Work
            </a>
            <a href="#clients" onClick={scrollToId("clients")}>
              Clients
            </a>
          </div>

          <a
            className="nav-cta"
            href="#inquire"
            onClick={scrollToId("inquire")}
          >
            Inquire <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-video" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="auto">
            <source src={ASSET.loop} type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" aria-hidden="true" />

        <div className="container hero-inner">
          <div className="hero-topline">DENVER // COLORADO</div>

          <div className="hero-logo-wrap">
            <img src={ASSET.logoFull} alt="Corruption Recordings" />
          </div>

          <div className="hero-sub">
            ELITE METAL PRODUCTION BY <br />
            <strong>CONNOR HAINES</strong>
          </div>

          <div className="hero-actions">
            <a
              className="btn primary"
              href="#inquire"
              onClick={scrollToId("inquire")}
            >
              START YOUR PROJECT <Play size={18} />
            </a>

            <a className="btn" href="#mywork" onClick={scrollToId("mywork")}>
              HEAR THE WORK <Music size={18} />
            </a>
          </div>
        </div>

        <img className="hero-chain" src={ASSET.chain} alt="" />
      </section>

      {/* ABOUT */}
      <section className="section-padding about" id="about">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-subtitle">// 01 ABOUT</span>
              <h2 className="section-title">
                ABOUT <span>CONNOR</span>
              </h2>
            </div>
          </div>

          <div className="about-split">
            <div className="about-left">
              <p className="about-text">
                Connor Haynes is the founder of Corruption Recordings in Denver,
                CO and drummer of the metal band Mugshot. At the age of 14,
                Connor began passionately crafting his skills in music
                production. His humble beginnings in California bedrooms and
                basements gave him the practice and kindle to light the spark he
                carries into each project. In recent years, he has worked with
                local artists to global touring bands while touring with his own
                band. Since 2016, the albums he’s recorded and produced have
                amassed over 50 MILLION STREAMS (Apple Music + Spotify). Whether
                it be co-writing, full production, or mixing and mastering,
                Connor’s expertise can take your music to a new level.
              </p>
            </div>

            <div className="about-right">
              <div className="video-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`}
                  title="About Connor"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MY WORK (Spotify) */}
      <section className="section-padding" id="mywork">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-subtitle">// 02 LISTEN</span>
              <h2 className="section-title">
                MY <span>WORK</span>
              </h2>
            </div>
          </div>

          <div className="embed-frame">
            <iframe
              style={{ borderRadius: "18px" }}
              src="https://open.spotify.com/embed/playlist/5Gi8DqYmIbTPEyA8xmc7c8?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist"
            />
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section
        className="section-padding"
        id="clients"
        style={{ backgroundColor: "var(--black)" }}
      >
        <div className="container">
          <div className="section-header" style={{ marginBottom: "3rem" }}>
            <div>
              <span className="section-subtitle">// 03 PORTFOLIO</span>
              <h2 className="section-title">
                CLIENT <span>LIST</span>
              </h2>
            </div>
          </div>

          <div className="client-grid">
            {clients.map((item, i) => (
              <a
                key={i}
                className="client-card"
                href={item.ig}
                target="_blank"
                rel="noreferrer"
                aria-label={`${item.band} Instagram`}
              >
                <img src={item.img} alt={item.band} />
                <div className="client-overlay">
                  <h4 className="client-band">{item.band}</h4>
                  <p className="client-role">{item.role}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER / INQUIRE */}
      <footer id="inquire">
        <div className="container">
          <div className="footer-cta">
            <img
              className="footer-brand-icon"
              src={ASSET.logoIcon}
              alt="Corruption icon"
            />

            <a
              href={gmailCompose}
              target="_blank"
              rel="noreferrer"
              className="footer-email-pill"
            >
              {EMAIL} <ExternalLink size={18} />
            </a>

            <div className="social-links">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
            </div>

            <div className="copyright">
              © 2026 TylerKosec.com // Tyler Kosec Media LLC.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
