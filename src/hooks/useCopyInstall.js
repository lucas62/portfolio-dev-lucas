import { useState } from 'react';
import { INSTALL_COMMAND } from '../data/footer';

export function useCopyInstall() {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard?.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return { copied, copyInstall };
}
