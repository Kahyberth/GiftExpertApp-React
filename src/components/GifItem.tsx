
export default function GifItem({ title, url } : { id : string ; title : string ; url : string }) {
  return (
    <div className="card">
    <div className="tools">
      <div className="circle">
        <span className="red box"></span>
      </div>
      <div className="circle">
        <span className="yellow box"></span>
      </div>
      <div className="circle">
        <span className="green box"></span>
      </div>
    </div>
    <div className="card__content">
    </div>
    <img src={ url } alt={ title } />
        <p>{ title }</p>
  </div>
  )
}
