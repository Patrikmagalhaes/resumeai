import { exec } from 'child_process';
import path from 'path';

const url = 'https://youtu.be/k_Y1tDZoHps?si=IKA_7XIcl6Y_i6_q'; // Substitua pelo link correto
const outputPath = path.join(process.cwd(), 'audio.mp3');

exec(`yt-dlp -x --audio-format mp3 -o "${outputPath}" "${url}"`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Erro ao executar o comando: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Erro: ${stderr}`);
        return;
    }
    console.log(`Download concluído! ${stdout}`);
});
