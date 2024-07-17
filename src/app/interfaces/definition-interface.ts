interface Phonetics {
  text: string;
  audio: string;
}

interface Definitions {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

interface Meanings {
  partOfSpeech: string;
  definitions: Definitions[];
  synonyms: string[];
  antonyms: string[];
}

interface License {
  name: string;
  url: string;
}

export default interface Definition {
  license: License[];
  word: string;
  phonetic: string;
  phonetics: Phonetics[];
  origin: string;
  meanings: Meanings[];
  sourceUrls: string[];
}
