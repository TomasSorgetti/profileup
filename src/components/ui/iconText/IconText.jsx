export default function IconText({ icon, children }) {
  return (
    <div className="d-flex align-items-center gap-3 justify-content-start max-width-400">
      <img src={icon} alt="icon" />
      <p className="m-0">{children}</p>
    </div>
  );
}
