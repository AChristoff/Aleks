export default function NotFound() {
  return (
    <div className="not-found">
      <h3>Page not found !</h3>
      <p>The Page you are looking for doesn't exist!</p>
      <img id="not-found-lego" alt="not-found-lego" src={`${process.env.ENV}/assets/img/lego_404.png`}></img>
    </div>
  );
}