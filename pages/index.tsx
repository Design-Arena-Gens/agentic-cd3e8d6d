import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Botbaz – Automate, Engage, and Grow</title>
        <meta
          name="description"
          content="Botbaz helps you automate WhatsApp marketing with bulk messaging, chatbots, and advanced analytics."
        />
      </Head>
      <main className={styles.hero}>
        <div className={styles.header}>
          <h1>Botbaz – Automate, Engage, and Grow</h1>
          <p>
            Power your WhatsApp automation with intelligent chat flows, multi-agent live chat, and deep business integrations.
          </p>
        </div>
        <section className={styles.grid}>
          <div className={styles.leftPane}>
            <div className={styles.phoneShell}>
              <div className={styles.phoneNotch} />
              <div className={styles.phoneScreen}>
                <header className={styles.screenHeader}>
                  <span className={styles.brandDot} />
                  <span className={styles.brandName}>Botbaz Dashboard</span>
                  <span className={styles.statusBadge}>LIVE</span>
                </header>
                <div className={styles.screenBody}>
                  <div className={styles.tabStrip}>
                    <span className={`${styles.tab} ${styles.active}`}>Bulk Broadcast</span>
                    <span className={styles.tab}>Individual Message</span>
                    <span className={styles.tab}>Interactive Buttons</span>
                  </div>
                  <div className={styles.broadcastCard}>
                    <div className={styles.broadcastHeader}>
                      <span>Audience: Premium Leads</span>
                      <span>Scheduled · 18:45</span>
                    </div>
                    <p>
                      Launching new AI-driven support bots today. Tap to explore our playbook and unlock guided onboarding.
                    </p>
                    <div className={styles.broadcastStats}>
                      <span>Messages: 12,500</span>
                      <span>Delivery Rate: 98%</span>
                    </div>
                  </div>
                  <div className={styles.builderCard}>
                    <div className={styles.builderHeader}>Chat Flow Builder</div>
                    <div className={styles.flowCanvas}>
                      <div className={`${styles.flowNode} ${styles.messageNode}`}>Message</div>
                      <div className={`${styles.flowNode} ${styles.imageNode}`}>Image</div>
                      <div className={`${styles.flowNode} ${styles.buttonNode}`}>Button</div>
                      <div className={`${styles.flowNode} ${styles.replyNode}`}>Reply</div>
                      <svg className={styles.flowLines} viewBox="0 0 400 200" preserveAspectRatio="none">
                        <path d="M40 40 C120 40, 120 100, 200 100" />
                        <path d="M40 40 C160 40, 160 160, 320 160" />
                        <path d="M200 100 C260 100, 260 60, 320 60" />
                        <path d="M200 100 C240 100, 240 160, 320 160" />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.liveChatPanel}>
                    <div className={styles.liveChatHeader}>
                      Live Chat · 5 Agents Online
                      <span className={styles.agentPills}>
                        <span>Ava</span>
                        <span>Leo</span>
                        <span>Riya</span>
                      </span>
                    </div>
                    <div className={styles.chatMessages}>
                      <div className={styles.chatBubbleIncoming}>Customer: Need a demo link?</div>
                      <div className={styles.chatBubbleOutgoing}>Agent Ava: Sent! Anything else I can help with?</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.integrationStrip}>
              <div className={styles.integrationCard}>
                <h3>Multi-number API</h3>
                <p>Connect 6 WhatsApp numbers for synchronized outreach.</p>
                <div className={styles.deviceRow}>
                  <span className={styles.deviceBadge}>HQ</span>
                  <span className={styles.deviceBadge}>EMEA</span>
                  <span className={styles.deviceBadge}>APAC</span>
                </div>
              </div>
              <div className={styles.integrationCard}>
                <h3>3rd-party Integration</h3>
                <p>Real-time analytics feeding your CRM and data warehouse.</p>
                <div className={styles.analyticsBar}>
                  <span style={{ width: '68%' }} />
                  <span style={{ width: '82%' }} />
                  <span style={{ width: '45%' }} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightPane}>
            <div className={styles.whatsappBeam}>
              <div className={styles.glowOrb} />
              <div className={styles.flowWave} />
            </div>
            <div className={styles.flowCard}>
              <h2>Conversational Intelligence</h2>
              <p>
                Route automated journeys with contextual triggers and smart segmentation. Deliver inspiring conversations at
                scale on WhatsApp.
              </p>
            </div>
            <div className={styles.flowTargets}>
              {['Message', 'Image', 'Button', 'Reply'].map((label) => (
                <div key={label} className={styles.targetNode}>
                  <span className={styles.targetIcon}>🟢</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <svg className={styles.connectionMap} viewBox="0 0 600 400" preserveAspectRatio="none">
              <defs>
                <linearGradient id="beam" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,255,170,0.15)" />
                  <stop offset="50%" stopColor="rgba(0,200,255,0.45)" />
                  <stop offset="100%" stopColor="rgba(0,114,255,0.75)" />
                </linearGradient>
              </defs>
              <path d="M60 220 C200 140, 320 120, 460 80" stroke="url(#beam)" />
              <path d="M60 220 C200 220, 360 260, 520 320" stroke="url(#beam)" />
              <path d="M60 220 C200 180, 360 200, 520 200" stroke="url(#beam)" />
              <path d="M60 220 C220 100, 360 60, 520 100" stroke="url(#beam)" />
            </svg>
          </div>
        </section>
      </main>
    </>
  );
}
