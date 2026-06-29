import { useEffect, useState } from "react";
import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Youtube,
  Send,
  Twitter,
  Download,
  MessageCircle,
} from "lucide-react";

const PROFILE_IMAGE = "/images/profile.jpeg";

export default function Hero() {
  const [vis, setVis] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setTimeout(() => setVis(true), 100);
  }, []);

  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ background: "#ffffff", minHeight: "calc(100vh - 70px)" }}
    >
      <div className="mesh-bg absolute inset-0 pointer-events-none" />
      <div
        className="grid-pattern absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle,rgba(34,197,94,.07) 0%,transparent 65%)",
          transform: "translate(30%,-30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle,rgba(74,222,128,.04) 0%,transparent 65%)",
          transform: "translate(-30%,30%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 w-full">
        <div className="hero-grid">
          {/* ── LEFT: PHOTO ── */}
          <div
            className="hero-left"
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? "translateX(0)" : "translateX(-40px)",
              transition: "all .8s cubic-bezier(.22,1,.36,1) .3s",
            }}
          >
            <div className="photo-outer">
              <div className="ring-spin" />
              <div className="ring-spin-rev" />
              <div className="photo-circle">
                {!imgError ? (
                  <img
                    src={PROFILE_IMAGE}
                    alt="প্রোফাইল"
                    onError={() => setImgError(true)}
                    style={{ display: "block" }}
                  />
                ) : (
                  <div className="text-center select-none">
                    <div
                      style={{
                        fontFamily: "'Tiro Bangla',serif",
                        fontSize: "5.5rem",
                        lineHeight: 1,
                        color: "rgba(22,163,74,.25)",
                      }}
                    >
                      জু
                    </div>
                    <div
                      style={{
                        fontSize: ".65rem",
                        color: "rgba(22,163,74,.35)",
                        marginTop: "8px",
                        letterSpacing: ".05em",
                      }}
                    >
                      ছবি যোগ করুন
                    </div>
                  </div>
                )}
              </div>
              <div className="photo-badge">✦ আলিম ও খতিব</div>
            </div>
          </div>

          {/* ── RIGHT: INFO ── */}
          <div
            className="hero-right"
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? "translateX(0)" : "translateX(40px)",
              transition: "all .8s cubic-bezier(.22,1,.36,1) .5s",
            }}
          >
            <h1
              className="shimmer-text"
              style={{
                fontFamily: "'Tiro Bangla',serif",
                fontSize: "clamp(2.2rem,5vw,3.4rem)",
                lineHeight: 1.35,
                marginBottom: "18px",
                display: "block",
              }}
            >
              জুনাইদ আল হাবিব
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {["লেখক", "মাদরাসা শিক্ষক", "ইমাম ও খতিব"].map((r) => (
                <span
                  key={r}
                  style={{
                    fontSize: ".78rem",
                    fontWeight: 600,
                    padding: "4px 13px",
                    borderRadius: "9999px",
                    background: "rgba(34,197,94,.07)",
                    color: "#16a34a",
                    border: "1px solid rgba(34,197,94,.2)",
                  }}
                >
                  {r}
                </span>
              ))}
            </div>

            {/* Contacts */}
            <div className="flex flex-col gap-2.5 mb-5">
              {[
                {
                  icon: <Phone size={13} />,
                  label: "+880 1624-114405",
                  href: "tel:+8801624114405",
                },
                { icon: <MapPin size={13} />, label: "ঢাকা, বাংলাদেশ" },
                {
                  icon: <Mail size={13} />,
                  label: "[email protected]",
                  href: "mailto:[email protected]",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5"
                  style={{ fontSize: ".85rem" }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(34,197,94,.07)",
                      border: "1px solid rgba(34,197,94,.18)",
                      color: "#22c55e",
                    }}
                  >
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        color: "#16a34a",
                        textDecoration: "none",
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span style={{ color: "#475569" }}>{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-2 mb-6">
              {[
                { label: "ফেসবুক", icon: <Facebook size={15} />, href: "#" },
                { label: "ইউটিউব", icon: <Youtube size={15} />, href: "#" },
                { label: "টেলিগ্রাম", icon: <Send size={15} />, href: "#" },
                { label: "টুইটার", icon: <Twitter size={15} />, href: "#" },
              ].map(({ label, icon, href }) => (
                <a
                  href={href}
                  key={label}
                  className="soc-btn"
                  aria-label={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#jogajog"
                className="btn-primary"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <MessageCircle size={14} />
                যোগাযোগ করুন
              </a>
              <a
                href="#"
                className="btn-secondary"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <Download size={14} />
                জীবনবৃত্তান্ত
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          style={{ opacity: vis ? 0.4 : 0, transition: "opacity 1s ease 1.2s" }}
        >
          <span
            style={{
              fontSize: ".62rem",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#94a3b8",
            }}
          >
            স্ক্রল করুন
          </span>
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
