const criticalCss = `
  :root {
    color-scheme: light;
    --critical-bg: #f5f7fb;
    --critical-card: #ffffff;
    --critical-border: rgba(15, 23, 42, 0.08);
    --critical-text: #0f172a;
    --critical-subtext: #475467;
    --critical-brand: #0a7cff;
  }

  body.critical-shell {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: "Inter", "HarmonyOS Sans", "PingFang SC", "Microsoft YaHei", system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: var(--critical-bg);
    color: var(--critical-text);
    -webkit-font-smoothing: antialiased;
  }

  body.critical-shell *,
  body.critical-shell *::before,
  body.critical-shell *::after {
    box-sizing: border-box;
  }

  body.critical-shell a {
    color: var(--critical-brand);
    text-decoration: none;
  }

  body.critical-shell nav,
  body.critical-shell header {
    padding: 0 24px;
    height: 72px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(15, 23, 42, 0.04);
    background: rgba(245, 247, 251, 0.9);
    backdrop-filter: blur(14px);
    position: sticky;
    top: 0;
    z-index: 20;
  }

  body.critical-shell .brand-pulse {
    width: 42px;
    height: 42px;
    border-radius: 14px;
    background: linear-gradient(135deg, #63a4ff, #83eaf1);
    animation: brand-breathe 2.4s ease-in-out infinite;
  }

  @keyframes brand-breathe {
    0% {
      transform: translateY(0);
      box-shadow: 0 8px 20px rgba(99, 164, 255, 0.2);
    }
    50% {
      transform: translateY(-2px);
      box-shadow: 0 12px 24px rgba(99, 164, 255, 0.35);
    }
    100% {
      transform: translateY(0);
      box-shadow: 0 8px 20px rgba(99, 164, 255, 0.2);
    }
  }

  body.critical-shell .site-main {
    flex: 1;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px 24px 64px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  body.critical-shell footer {
    padding: 32px 24px;
    border-top: 1px solid rgba(15, 23, 42, 0.08);
    background: rgba(255, 255, 255, 0.92);
  }

  body.critical-shell .card,
  body.critical-shell section,
  body.critical-shell article {
    border: 1px solid var(--critical-border);
    border-radius: 24px;
    padding: 24px;
    background: var(--critical-card);
    box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
    min-height: 180px;
  }

  body.critical-shell .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
  }

  body.critical-shell [data-skeleton="true"] {
    border-radius: 999px;
    height: 12px;
    margin-bottom: 12px;
    background: linear-gradient(
      100deg,
      rgba(148, 163, 184, 0.24) 20%,
      rgba(148, 163, 184, 0.45) 50%,
      rgba(148, 163, 184, 0.24) 80%
    );
    background-size: 200% 100%;
    animation: skeleton-pulse 1.3s ease-in-out infinite;
  }

  @keyframes skeleton-pulse {
    from {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }
`;

const removeShellScript = `
  (() => {
    const detachShell = () => {
      document.body?.classList.remove("critical-shell");
      document.getElementById("critical-shell-style")?.remove();
    };

    if (document.readyState === "complete") {
      requestAnimationFrame(detachShell);
    } else {
      window.addEventListener("load", () => requestAnimationFrame(detachShell), { once: true });
    }
  })();
`;

export function InitialRenderStyles() {
  return (
    <>
      <style id="critical-shell-style" dangerouslySetInnerHTML={{ __html: criticalCss }} />
      <script dangerouslySetInnerHTML={{ __html: removeShellScript }} />
    </>
  );
}


