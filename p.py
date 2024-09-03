import whisper
from pytubefix import YouTube
from pytubefix.cli import on_progress

url = "https://youtu.be/3OnjOv_TtXo?si=G1JM-Kg-iTlWOjY1"

# Baixar o áudio do YouTube
yt = YouTube(url, on_progress_callback=on_progress)
print(yt.title)

# Obter o áudio apenas e salvar como MP3 com um nome específico
ys = yt.streams.get_audio_only()
audio_file = ys.download(filename="audio.mp3")  # Salva como audio.mp3

# Carregar o modelo Whisper
model = whisper.load_model("base")

# Transcrever o áudio baixado
result = model.transcribe("audio.mp3")
print(result["text"])
