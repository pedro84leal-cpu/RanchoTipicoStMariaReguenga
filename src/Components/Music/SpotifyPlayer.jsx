import styles from './spotify.module.css';

export default function SpotifyPlayer({ mostrarMusica }) {

  if (!mostrarMusica) return null;
  
  return (
    <div className={styles.playerContainer}>
      <iframe
        src="https://open.spotify.com/embed/artist/5qvv0E5A6cnZ9Yt4zkI6AA"
        width="100%"
        height="200"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: '12px', marginTop: '1rem' }}
        title="Spotify Player"
      />
    </div>
  );
}