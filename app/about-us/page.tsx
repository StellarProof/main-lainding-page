"use client";

import React, { useState } from "react";

const CYAN = "#06B6D4";
const DARK = "#171716";
const DARK2 = "#0D1F35";
const BORDER = "#1E3A5F";
const TEXT = "#E2E8F0";
const MUTED = "#e4e2dd";
const GREEN = "#10B981";

const nav = [
  { id: "what", label: "What is StellarProof", icon: "" },
  { id: "user", label: "How It Works (Users)", icon: "" },
  { id: "anchor", label: "Anchor Integration", icon: "" },
  { id: "architecture", label: "Architecture", icon: "" },
  { id: "security", label: "Security Model", icon: "" },
  { id: "compliance", label: "Compliance Model", icon: "" },
  { id: "roadmap", label: "Roadmap", icon: "" },
  { id: "team", label: "Team", icon: "" },
  { id: "faq", label: "FAQ", icon: "" },
] as const;

type NavId = (typeof nav)[number]["id"];

const Code = ({ children }: { children: React.ReactNode }) => (
  <code
    style={{
      background: "#0A1628",
      border: `1px solid ${BORDER}`,
      borderRadius: 4,
      padding: "2px 8px",
      fontFamily: "'Fira Code', monospace",
      fontSize: 13,
      color: CYAN,
    }}
  >
    {children}
  </code>
);

const Block = ({ children }: { children: React.ReactNode }) => (
  <pre
    style={{
      background: "#0A1628",
      border: `1px solid ${BORDER}`,
      borderRadius: 8,
      padding: 20,
      overflowX: "auto",
      fontFamily: "'Fira Code', monospace",
      fontSize: 13,
      color: TEXT,
      margin: "16px 0",
      lineHeight: 1.6,
      whiteSpace: "pre-wrap",
    }}
  >
    {children}
  </pre>
);

const Tag = ({
  children,
  color = CYAN,
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <span
    style={{
      background: `${color}15`,
      border: `1px solid ${color}40`,
      borderRadius: 99,
      padding: "2px 10px",
      fontSize: 11,
      color,
      fontWeight: 600,
      marginRight: 6,
    }}
  >
    {children}
  </span>
);

const Step = ({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) => (
  <div style={{ marginBottom: 24 }}>
    <div>
      <div style={{ fontWeight: 600, color: TEXT, marginBottom: 4 }}>
        <span style={{ color: TEXT, marginRight: 8 }}>{`${n}.`}</span>
        {title}
      </div>
      <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }}>{children}</div>
    </div>
  </div>
);

const H1 = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontSize: "clamp(22px, 5vw, 32px)",
      fontWeight: 700,
      color: TEXT,
      margin: "0 0 8px",
      fontFamily: "'Trebuchet MS', sans-serif",
    }}
  >
    {children}
  </h1>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    style={{
      fontSize: "clamp(16px, 3vw, 22px)",
      fontWeight: 700,
      color: TEXT,
      margin: "32px 0 12px",
      fontFamily: "'Trebuchet MS', sans-serif",
      borderBottom: `1px solid ${BORDER}`,
      paddingBottom: 8,
    }}
  >
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 15, margin: "0 0 16px" }}>
    {children}
  </p>
);

const Callout = ({
  type = "info",
  children,
}: {
  type?: "info" | "warning" | "success";
  children: React.ReactNode;
}) => {
  const colors = { info: CYAN, warning: "#F59E0B", success: GREEN };
  const c = colors[type];
  return (
    <div
      style={{
        background: `${c}08`,
        border: `1px solid ${c}30`,
        borderLeft: `3px solid ${c}`,
        borderRadius: 8,
        padding: "12px 16px",
        margin: "16px 0",
        fontSize: 14,
        color: TEXT,
        lineHeight: 1.7,
      }}
    >
      {children}
    </div>
  );
};

const sections: Record<NavId, () => React.ReactElement> = {
  what: () => (
    <div>
      <H1>What is StellarProof</H1>
      <P>
        StellarProof is the identity layer for Stellar. Verify once using your national ID and
        Get a credential locked to your wallet. Use it at every anchor instantly, with one tap. 
        No uploading the same passport again. No waiting. No five different apps storing copies of your face.
      </P>
      <Callout type="info">
        SDF wrote this goal into SEP-12 in 2018: <br/> <em>&quot;Allow a customer to enter their KYC
        information once and use it across many services without re-entering manually.&quot;</em>
        <br /><br />
        That was the plan. Nobody built the infrastructure. StellarProof is that infrastructure.
      </Callout>

      <H2>The Problem</H2>
      <P>
        Stellar has 100+ anchors across countries. Every single one runs its own KYC
        stack independently - SumSub here, Onfido there, Veriff somewhere else. A user
        who wants to use three anchors uploads the same passport three times, waits three
        times, and each anchor pays $1-3 in verification costs three times.
      </P>
      <P>
        60–80% of users abandon KYC before completing it, Not because they don&apos;t want
        to use the product Because they&apos;ve done it before and don&apos;t want to do it again.
      </P>
      <Block>{`Without StellarProof:
  User → Coins.ph   → Upload passport, ID, selfie. Wait 2 days. ✓  ($1.35)
  User → Vibrant    → Upload passport, ID, selfie. Wait 2 days. ✓  ($1.35)
  User → Bitso      → Upload passport, ID, selfie. Wait 2 days. ✓  ($1.35)

  Same person. Same passport. Same face.
  3 separate databases holding your documents.`}</Block>

      <H2>Why Nobody Fixed It</H2>
      <P>
        SumSub has &quot;Reusable KYC&quot; but it only works within their own network. If Anchor A uses 
        SumSub and Anchor B uses Onfido, reuse breaks completely. The large KYC companies have 
        no incentive to fix this. Cross-provider reuse destroys their per-verification revenue.
      </P>
      <P>
        The problem was never technology. It was incentives. StellarProof earns only when credentials 
        are reused — so everything we build is designed to make reuse work as well as possible. Our 
        interests and the ecosystem&apos;s are the same.
      </P>

      <H2>The Solution</H2>
      <P>
        StellarProof sits above every KYC provider as a shared identity layer. 
        Verify once — your identity gets encrypted, locked to your Stellar wallet, 
        and recorded on-chain. Every anchor after that gets a simple yes/no: this person is verified, 
        low risk — no documents, no passport copies, no waiting. One tap. Two seconds. Done.
      </P>
      <Block>{`With StellarProof:
  User → Coins.ph   → Verify once via DigiLocker/PhilSys. Credential encrypted. ✓
  User → Vibrant    → One tap consent. Proof returned in 2 seconds.            ✓  ($0.10)
  User → Bitso      → One tap consent. Proof returned in 2 seconds.            ✓  ($0.10)

  Same person. One verification.
  Zero duplicate databases. Zero re-uploads.`}</Block>
      <Callout type="success">
        The breach that can&apos;t leak what it doesn&apos;t have. StellarProof stores only
        encrypted blobs. The server cannot decrypt them under any circumstance
        including legal compulsion.
      </Callout>

      <H2>Key Numbers</H2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16, margin: "16px 0" }}>
        {[
          { val: "60–80%", label: "KYC drop-off rate across Stellar anchors" },
          { val: "$1-3", label: "Cost per first-time verification" },
          { val: "$0.10", label: "Cost per reuse — 93% cheaper" },
        ].map((s) => (
          <div key={s.val} style={{ background: DARK2, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 20 }}>
            <div style={{ fontSize: "clamp(20px, 5vw, 28px)", fontWeight: 700, color: CYAN, fontFamily: "'Trebuchet MS'" }}>
              {s.val}
            </div>
            <div style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  ),

  user: () => (
    <div>
      <H1>How It Works - Users</H1>
      <P>As a user, you verify once. Every anchor after that requires one consent tap.</P>
      <H2>First Verification</H2>
      <Step n={1} title="Connect your Stellar wallet">
        Your identity is tied to your wallet. No separate account needed.
      </Step>
      <Step n={2} title="Prove you own the wallet">
        One signature. Takes two seconds.
      </Step>
      <Step n={3} title="Complete KYC via your national ID">
        StellarProof picks the fastest, cheapest option for your country automatically.
      </Step>
      <Step n={4} title="Your credential is encrypted and locked to your wallet">
        Nobody else can read it. Not even us.
      </Step>
      <Step n={5} title="A tamper-proof record is anchored on Stellar">
        Permanent proof that verification happened, with no personal data stored on-chain.
      </Step>
      <H2>Every User After That</H2>
      <Step n={1} title="Visit a new anchor">
        They detect your existing credential instantly.
      </Step>
      <Step n={2} title="See exactly what they are asking for">
        No surprises. You see every field before approving.
      </Step>
      <Step n={3} title="Tap to approve">Your wallet signs it. Done.</Step>
      <Step n={4} title="The anchor gets a proof, not your passport">
        Verified. Low risk. Onboarded. Your documents never touched their servers.
      </Step>
    </div>
  ),

  anchor: () => (
    <div>
      <H1>Anchor Integration</H1>
      <P>
        StellarProof runs alongside your existing KYC stack from day one. No compliance
        changes. No risk during migration. Your team gets it live in under a day.
      </P>
      <P>
        Once integrated, you get access to a live dashboard showing exactly how many of
        your users could have been onboarded instantly. Real numbers from your real
        traffic before you commit to anything.
      </P>
      <P>
        For teams that need more, we offer a Compliance Dashboard, AML Transaction
        Monitoring, Priority Integration Support, and a White-label SDK for wallets and
        fintechs building on Stellar.
      </P>
    </div>
  ),

  architecture: () => (
    <div>
      <H1>Architecture</H1>
      <P>
        StellarProof sits between KYC providers and Stellar anchors as a shared
        credential registry. Think of it as CKYC for the Stellar ecosystem: verify
        once, and every anchor routes through consent back to the original verified
        source.
      </P>
      <P>
        The registry stores nothing readable. Credentials are encrypted with the
        user&apos;s Stellar keypair before they ever touch our database. A server breach
        exposes only encrypted blobs. Even we cannot read them.
      </P>
    </div>
  ),

  security: () => (
    <div>
      <H1>Security Model</H1>
      <P>
        StellarProof is designed so that a breach of our servers exposes nothing useful.
      </P>
      <P>
        Credentials are encrypted with the user&apos;s own Stellar keypair before they touch
        our database. The server generates a one-time keypair per credential, encrypts
        the data, then permanently discards its own private key. What remains in our
        database is a blob that only the user can decrypt. Not us. Not a regulator with
        a subpoena directed at us. Not an attacker who gets root access.
      </P>
      <P>
        If a user loses their phone, recovery uses Shamir 2 of 3 secret sharing. The
        master key is split into three shards: one on the user&apos;s device, one with a
        trusted contact, one in time-locked escrow with us. Any two shards reconstruct
        the key. No single shard reveals anything on its own. Losing a phone never means
        losing your identity.
      </P>
      <P>
        For anchors, the audit log is append-only and cannot be modified or deleted.
        Every verification event is timestamped and tamper-evident. Your compliance team
        has a permanent record without ever holding a single raw document.
      </P>
    </div>
  ),

  compliance: () => (
    <div>
      <H1>Compliance Model</H1>
      <P>
        StellarProof resolves the hardest tension in reusable KYC: user privacy
        versus regulatory subpoena power. It does this by keeping two separate
        layers with two separate purposes.
      </P>
      <P>
        The user layer holds the encrypted credential. Only the user can decrypt
        it. We cannot read it. A regulator compelling us produces nothing useful.
      </P>
      <P>
        The compliance layer sits with the licensed KYC provider who performed the
        original verification: DigiLocker, Onfido, SumSub. They retain their
        compliance copy under their own regulatory obligations exactly as they do
        today. Subpoenas go to them, not to us.
      </P>
      <P>
        For anchors, the obligation is satisfied by our audit log: a tamper-proof,
        append-only record proving that verification occurred, by which licensed
        provider, at what time, and to what risk level. You never held the raw
        documents. You cannot be compelled to produce what you never had. That
        reduces your regulatory surface area rather than adding to it.
      </P>
    </div>
  ),

  roadmap: () => (
    <div>
      <H1>Roadmap</H1>
      <H2>Phase 1: Build to launch</H2>
      <P>
        Month 1 — Foundation
        <br />
        Month 2 — Consent System and UI
        <br />
        Month 3 — Security Audit and Pilots
        <br />
        Month 4 — Launch
      </P>
      <H2>Phase 2: Zero Knowledge Proofs</H2>
      <P>
        Protocol 25 went live on Stellar mainnet in January 2026 with native BN254 and
        Poseidon supports two primitives needed for selective disclosure.
      </P>
    </div>
  ),

  team: () => (
    <div>
      <H1>Team</H1>
      <P> <a href="https://x.com/Dhanush_devx" target="_blank" rel="noopener noreferrer"
          style={{ color: CYAN, textDecoration: "underline" }} >
          Dhanush </a>{" "} - Founder of StellarProof
      </P>
    </div>
  ),

  faq: () => (
    <div>
      <H1>FAQ</H1>
      {[
        ["Does SumSub already have reusable KYC?", "It is mostly limited to provider-local networks."],
        ["What if users lose private keys?", "Recovery can use Shamir 2-of-3 secret sharing."],
        ["How do regulated anchors store records?", "Document mode can route consented records via providers."],
        ["Can StellarProof be subpoenaed for plaintext?", "Encrypted-only architecture reduces plaintext exposure risk."],
      ].map(([q, a], i) => (
        <FAQItem key={i} q={q} a={a} />
      ))}
    </div>
  ),
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "16px 0" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          textAlign: "left",
        }}
      >
        <span style={{ color: TEXT, fontWeight: 600, fontSize: 15 }}>{q}</span>
        <span style={{ color: CYAN, fontSize: 18, marginLeft: 16, flexShrink: 0 }}>{open ? "-" : "+"}</span>
      </button>
      {open && (
        <p
          style={{
            color: MUTED,
            fontSize: 14,
            lineHeight: 1.8,
            marginTop: 12,
            marginBottom: 0,
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

export default function AboutUsPage() {
  const [active, setActive] = useState<NavId>("what");
  const [menuOpen, setMenuOpen] = useState(false);
  const activeIndex = nav.findIndex((n) => n.id === active);

  const handleNavClick = (id: NavId) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: DARK,
        fontFamily: "Calibri, sans-serif",
        color: TEXT,
        position: "relative",
      }}
    >
      {/* Status badge — hidden on small screens */}
      <div
        className="hidden sm:block"
        style={{
          position: "fixed",
          bottom: 24,
          left: 14,
          background: `${DARK2}99`,
          border: `1px solid ${CYAN}40`,
          borderRadius: 8,
          padding: "16px 20px",
          backdropFilter: "blur(10px)",
          maxWidth: 280,
          zIndex: 10,
        }}
      >
        <div style={{ fontSize: 12, color: CYAN, fontWeight: 600, marginBottom: 8 }}>
          Status
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: TEXT }}>
          Building on Stellar ecosystem
        </div>
      </div>

      {/* ── MOBILE TOP BAR ── */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: `${DARK}f0`,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${BORDER}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
        }}
      >
        <a href="/" aria-label="Go to homepage">
          <img src="/stellarproof-logo.svg" alt="StellarProof" style={{ height: 32, width: "auto" }} />
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            background: "none",
            border: `1px solid ${BORDER}`,
            borderRadius: 6,
            padding: "6px 10px",
            cursor: "pointer",
            color: TEXT,
            fontSize: 18,
            lineHeight: 1,
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ── MOBILE DRAWER ── */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            top: 57,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
            background: `${DARK}f8`,
            backdropFilter: "blur(16px)",
            overflowY: "auto",
            padding: "8px 0 24px",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => handleNavClick(n.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                width: "100%",
                padding: "14px 20px",
                background: active === n.id ? `${CYAN}18` : "none",
                border: "none",
                borderLeft: active === n.id ? `3px solid ${CYAN}` : "3px solid transparent",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.15s",
              }}
            >
              <span
                style={{
                  fontSize: 15,
                  color: active === n.id ? CYAN : MUTED,
                  fontWeight: active === n.id ? 600 : 400,
                }}
              >
                {n.label}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* ── DESKTOP SIDEBAR ── */}
      <div
        className="hidden md:block"
        style={{
          width: 260,
          flexShrink: 0,
          borderRight: `1px solid ${BORDER}`,
          padding: "24px 0",
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            padding: "0 20px 20px",
            borderBottom: `1px solid ${BORDER}`,
            marginBottom: 16,
          }}
        >
          <div>
            <a href="/" aria-label="Go to homepage">
              <img
                src="/stellarproof-logo.svg"
                alt="StellarProof"
                className="w-30 h-auto"
              />
            </a>
          </div>
        </div>
        {nav.map((n) => (
          <button
            key={n.id}
            onClick={() => setActive(n.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              padding: "10px 20px",
              background: active === n.id ? `${CYAN}15` : "none",
              border: "none",
              borderLeft:
                active === n.id ? `2px solid ${CYAN}` : "2px solid transparent",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.15s",
            }}
          >
            <span style={{ fontSize: 14 }}>{n.icon}</span>
            <span
              style={{
                fontSize: 13,
                color: active === n.id ? CYAN : MUTED,
                fontWeight: active === n.id ? 600 : 400,
              }}
            >
              {n.label}
            </span>
          </button>
        ))}
      </div>

      {/* ── MAIN CONTENT ── */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          minWidth: 0,
        }}
      >
        {/* Spacer for mobile sticky top bar */}
        <div className="md:hidden" style={{ height: 57 }} />

        <div style={{ padding: "clamp(20px, 5vw, 48px) clamp(16px, 5vw, 64px)", maxWidth: 900 }}>
          {sections[active]()}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 48,
              paddingTop: 24,
              borderTop: `1px solid ${BORDER}`,
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {activeIndex > 0 ? (
              <button
                onClick={() => setActive(nav[activeIndex - 1].id)}
                style={{
                  background: DARK2,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  padding: "10px 16px",
                  color: TEXT,
                  cursor: "pointer",
                  fontSize: 13,
                  flex: "1 1 auto",
                  minWidth: 0,
                  textAlign: "left",
                }}
              >
                {`← ${nav[activeIndex - 1].label}`}
              </button>
            ) : (
              <div />
            )}
            {activeIndex < nav.length - 1 ? (
              <button
                onClick={() => setActive(nav[activeIndex + 1].id)}
                style={{
                  background: DARK2,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  padding: "10px 16px",
                  color: TEXT,
                  cursor: "pointer",
                  fontSize: 13,
                  flex: "1 1 auto",
                  minWidth: 0,
                  textAlign: "right",
                }}
              >
                {`${nav[activeIndex + 1].label} →`}
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
