import { addListener, launch } from 'devtools-detector';

/**
 * Initializes anti-debugging measures.
 * Redirects to baidu.com if DevTools are detected.
 * 
 * Bypasses:
 * 1. Localhost / 127.0.0.1
 * 2. URL query parameter ?dev=true
 */
export function initSecurity() {
  const hostname = window.location.hostname;
  const isLocal = hostname === 'localhost' || hostname === '127.0.0.1';
  
  // Check for dev=true query param
  const urlParams = new URLSearchParams(window.location.search);
  const isDevMode = urlParams.get('dev') === 'true';

  // Bypass if local or explicitly in dev mode
  if (isLocal || isDevMode) {
    console.log('Security: Anti-debugging disabled (Local or Dev Mode).');
    return;
  }

  // Initialize detection
  addListener((isOpen) => {
    if (isOpen) {
      window.location.href = 'https://baidu.com';
    }
  });

  launch();
  console.log('Security: Anti-debugging enabled.');
}
