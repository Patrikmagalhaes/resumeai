import fs from 'fs';
import OpenAI from 'openai';

const apiKey = ''; 
const openai = new OpenAI({ apiKey });

async function main() {
  try {
    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream('audio.mp3'),
      model: 'whisper-1',
      // language: 'en', // Opcional, se necessário
    });
    console.log(transcription);
  } catch (error) {
    console.error('Erro ao transcrever o áudio:', error);
  }
}

main();
