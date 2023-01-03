import React from 'react';
import { useTranslation } from 'react-i18next';
const languages = ['vi', 'en'];

function I18next() {
  const { t, i18n } = useTranslation();

  console.log(i18n);

  return (
    <div>
      I18NEXT TRANSLATION
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {languages.map((language) => {
          return <option value={language}>{language}</option>;
        })}
      </select>
      <div>{t('test.text')}</div>
    </div>
  );
}

export default I18next;
