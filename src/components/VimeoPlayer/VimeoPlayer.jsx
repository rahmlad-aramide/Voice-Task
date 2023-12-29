
const VimeoPlayer = () => {
  const aspectRatio = 9 / 16;
  return (
    <div style={{ position: 'relative', width: '100%', paddingTop: `${aspectRatio * 100}%` }}>
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/898539952"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
};

export default VimeoPlayer;
