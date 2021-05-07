export function Chrome({ light, children, title }) {
  const { font } = window.htld_lightbox;

  return (
    <div className="bg-white pa3 mw7 center">
      <div className="flex justify-end">
        <div className="pointer gray f3" onClick={() => light.current.close()}>
          &times;
        </div>
      </div>
      <div className={`${font} f3 mb3 pb3 b--light-gray bb lh-title`}>
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
}
