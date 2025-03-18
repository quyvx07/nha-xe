import { NextPage } from 'next';
import Script from 'next/script';

interface LanguageAttributeScriptProps {
  lang: string;
}

export const LanguageAttributeScript: NextPage<LanguageAttributeScriptProps> = ({ lang }) => {
  const script = `
    document.documentElement.lang = "${lang}";
  `;

  return (
    <Script id="language-attribute-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: script }} />
  );
}; 