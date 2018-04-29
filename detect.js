function detectLang()
{
  if (!navigator)
    return "";

  if (navigator.systemLanguage)
  {
    return navigator.systemLanguage;
  }

  if (navigator.browserLanguage)
  {
    return navigator.browserLanguage;
  }
  
  if (navigator.language)
  {
    return navigator.language;
  }
  
  if (navigator.userLanguage)
  {
    return navigator.userLanguage;
  }                 
  
  return "";
}
